# Vercel Setup Guide for portfolio2021

The code migration is complete! ✅ Now you need to complete the Vercel setup. Follow these steps:

---

## Phase 3: Connect Your Repository to Vercel

### Step 1: Go to Vercel Dashboard
1. Visit https://vercel.com/dashboard
2. If you don't have an account, create one (free tier includes unlimited deployments)
3. Click **"Add New"** → **"Project"**

### Step 2: Import GitHub Repository
1. Click **"Continue with GitHub"** (or authenticate with GitHub if not connected)
2. Search for **`portfolio2021`** or find it in your list
3. Click **Import** on the portfolio2021 repository

### Step 3: Configure Build Settings
Vercel should auto-detect these, but verify:
- **Project Name:** `portfolio2021` (or your preferred name)
- **Framework Preset:** Create React App (auto-detected ✓)
- **Build Command:** `npm run build` (default ✓)
- **Output Directory:** `build` (default ✓)
- **Install Command:** `npm install` (default ✓)

**Environment Variables:** Leave empty (none needed for this project)

### Step 4: Deploy
Click **"Deploy"** button. Vercel will:
1. Clone your repository
2. Install dependencies
3. Run the build
4. Deploy to a preview URL (e.g., `portfolio2021-xyz.vercel.app`)

⏱️ **Deployment takes 1-2 minutes**

### Step 5: Verify Production Deployment
- Once complete, click **"Visit"** or open the provided URL
- Test basic navigation (click around, check pages load)
- Verify no errors in browser console (DevTools F12)

---

## Phase 4: Configure Custom Domain

### Step 1: Add Domain in Vercel
1. In Vercel Dashboard → Select your **portfolio2021** project
2. Go to **Project Settings** → **Domains**
3. Click **"Add Domain"**
4. Enter: `tszhoip.com`

### Step 2: Configure DNS

Vercel will show you two options:

#### Option A: Update Nameservers (Recommended)
If you manage your domain registrar:
1. Note the Vercel nameservers shown
2. Log into your domain registrar (GoDaddy, Namecheap, etc.)
3. Update nameservers to Vercel's nameservers
4. Wait 5-30 minutes for DNS propagation

#### Option B: Add CNAME Record
If you prefer not to change nameservers:
1. Add a CNAME record pointing to Vercel
2. Follow Vercel's instructions for your specific registrar
3. Wait 5-30 minutes for DNS propagation

### Step 3: Verify Domain
- Check Vercel dashboard for "Valid Configuration" status
- Once confirmed, visit `https://tszhoip.com` in your browser
- Should load your portfolio (same as the vercel.app URL)

---

## Phase 5: Full Testing Checklist

Once your domain is live, test everything:

- [ ] Visit `https://tszhoip.com` → loads homepage
- [ ] Navigate to `/work` → page loads without 404
- [ ] Navigate to `/about` → page loads without 404
- [ ] Try other project pages (Nike, Shopify, etc.)
- [ ] Refresh page while on `/work` → doesn't 404 (SPA routing works)
- [ ] Click browser back/forward buttons → works smoothly
- [ ] Test on mobile device → responsive layout works
- [ ] Open DevTools Console (F12) → no red errors
- [ ] Check Network tab → all assets load successfully

---

## After Setup: Continuous Deployment

🎉 **You're done!** From now on:

### Automatic Deployments
- Push code to `main` branch on GitHub
- Vercel automatically detects the push
- Vercel rebuilds and deploys to `tszhoip.com`
- Takes 1-2 minutes, no manual action needed

### Preview Deployments (Optional)
- Create a Pull Request on GitHub
- Vercel auto-creates a preview URL for that PR
- Test changes before merging
- Merge to main → goes live to `tszhoip.com`

### Monitoring
- Check Vercel dashboard for build status
- Click into a deployment to see logs if issues occur
- Vercel provides build/runtime error notifications

---

## Troubleshooting

### Domain not connecting
- DNS propagation can take up to 30 minutes
- Check Vercel dashboard for DNS configuration status
- Verify nameservers or CNAME record in your registrar

### Build fails
- Check Vercel dashboard → Deployments tab for error logs
- Most common: `npm install` issue (check package-lock.json)
- Preview can test locally: `npm run build && npm serve -s build`

### SPA routing shows 404 on refresh
- `vercel.json` handles this automatically
- Verify `vercel.json` exists in your project root
- Vercel uses the `routes` rewrite rule to serve index.html

### Custom domain shows old site
- DNS cache can persist
- Try incognito/private browsing
- Wait another 10-15 minutes for full propagation
- Clear browser cache (Ctrl+Shift+Del or Cmd+Shift+Del)

---

## Rollback (If Needed)

If you need to go back to Firebase:
```bash
git revert 62bfaa5
git push origin main
```

Firebase project `portfolio2021test` still exists and can be redeployed to.

---

## Next Steps

1. ✅ **Code migration done** (you're here!)
2. 🔄 **Set up Vercel** (Phase 3-4 above)
3. 🧪 **Test everything** (Phase 5 above)
4. 🚀 **Deploy and enjoy** — no more Firebase!

Good luck! 🎉
