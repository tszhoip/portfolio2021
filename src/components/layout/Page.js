import styled from 'styled-components';

/**
 * Page - the outer shell every route's body sits in.
 *
 *   <Page>
 *     <Section>...</Section>
 *     <Section variant="full">...</Section>
 *   </Page>
 *
 * The menu and footer are not in here. App.js renders <BlockFooter /> once
 * and PageWrapper renders <BlockMenuFloating /> once, so both are already
 * global and a page must not repeat them.
 *
 * Width is NOT capped here. The cap lives inside <Section> so that a section
 * can carry a full-bleed background while its text still stops at maxWidth.
 *
 * No background either: the page is white because the document is white, set
 * once on body in style/app.css. A page that wants another colour sets it on
 * its own wrapper.
 */
export const Page = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  font-family: ${(props) => props.theme.layout.fontStack};
`;

export default Page;
