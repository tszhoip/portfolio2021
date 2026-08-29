/**
 * Google Sheets API Service
 * Fetches project metadata from Google Sheet
 *
 * Expects columns:
 * A: #project, B: title, C: role, D: deliverable, E: #en, F: #cn, G: video, H: #order
 */

const SHEET_ID = process.env.REACT_APP_GOOGLE_SHEETS_ID;
const API_KEY = process.env.REACT_APP_GOOGLE_SHEETS_API_KEY;
const RANGE = 'Sheet1!A1:H100'; // Adjust as needed

/**
 * Fetch all project metadata from Google Sheet
 * Uses Sheets API v4
 * Returns array of project objects
 */
export const fetchProjectsMetadata = async () => {
  // Check if credentials are configured
  if (!SHEET_ID || !API_KEY) {
    console.warn('Google Sheets credentials not configured. Using hardcoded metadata.');
    return null;
  }

  try {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Sheets API error: ${response.status}`);
    }

    const data = await response.json();
    const rows = data.values;

    if (!rows || rows.length === 0) {
      console.warn('No data found in Google Sheet');
      return null;
    }

    // Parse header row (row 0)
    const headers = rows[0];
    const headerIndex = {
      project: headers.indexOf('#project'),
      title: headers.indexOf('title'),
      role: headers.indexOf('role'),
      deliverable: headers.indexOf('deliverable'),
      en: headers.indexOf('#en'),
      cn: headers.indexOf('#cn'),
      video: headers.indexOf('video'),
      order: headers.indexOf('#order'),
    };

    // Verify all required columns exist
    if (Object.values(headerIndex).some(idx => idx === -1)) {
      console.error('Missing required columns in Google Sheet', headerIndex);
      return null;
    }

    // Parse data rows (skip header row)
    const projects = [];
    for (let i = 1; i < rows.length; i++) {
      const row = rows[i];

      if (!row[headerIndex.project]) continue; // Skip empty rows

      const project = {
        id: parseInt(row[headerIndex.project], 10),
        title: row[headerIndex.title] || '',
        role: row[headerIndex.role] || '',
        deliverable: row[headerIndex.deliverable] || '',
        descEN: row[headerIndex.en] || '',
        descCN: row[headerIndex.cn] || '',
        video: row[headerIndex.video] || null,
        order: parseInt(row[headerIndex.order], 10) || i,
      };

      projects.push(project);
    }

    console.log('Fetched projects from Google Sheet:', projects);
    return projects;
  } catch (error) {
    console.error('Error fetching from Google Sheets:', error);
    return null;
  }
};

/**
 * Get single project metadata
 * Falls back to hardcoded data if API fails
 */
export const getProjectDataWithVideo = async (projectId, fallbackData) => {
  const allProjects = await fetchProjectsMetadata();

  if (allProjects) {
    const project = allProjects.find(p => p.id === projectId);
    if (project) return project;
  }

  // Fallback to hardcoded data
  return fallbackData;
};
