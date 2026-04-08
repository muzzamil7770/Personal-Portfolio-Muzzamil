# Netlify Deployment Setup Guide

This guide will help you set up automated deployment to Netlify using GitHub Actions.

## Prerequisites

- A Netlify account (sign up at [netlify.com](https://www.netlify.com/))
- Your repository pushed to GitHub
- Netlify CLI installed (optional, for local testing)

## Step-by-Step Setup

### 1. Create a Netlify Site

1. Log in to your [Netlify Dashboard](https://app.netlify.com/)
2. Click **"Add new site"** > **"Import an existing project"**
3. Connect your GitHub account
4. Select your repository: `Personal-Portfolio-Muzzamil`
5. Configure build settings:
   - **Build command:** Leave empty (no build needed for static HTML)
   - **Publish directory:** `.` (root directory)
6. Click **"Deploy site"**

### 2. Get Your Netlify Site ID

1. Go to your site dashboard on Netlify
2. Navigate to **Site settings** > **General** > **Site details**
3. Copy the **Site ID** (looks like: `abc12345-6789-0abc-defg-1234567890ab`)

### 3. Create Netlify Auth Token

1. Go to [Netlify User Settings](https://app.netlify.com/user/applications)
2. Navigate to **Applications** > **Personal access tokens**
3. Click **"Generate access token"**
4. Give it a description (e.g., "GitHub Actions Deployment")
5. Copy the generated token immediately (you won't see it again!)

### 4. Add Secrets to GitHub

1. Go to your GitHub repository
2. Navigate to **Settings** > **Secrets and variables** > **Actions**
3. Click **"New repository secret"**
4. Add the following secrets:

| Secret Name | Value | Description |
|------------|-------|-------------|
| `NETLIFY_AUTH_TOKEN` | Your Netlify personal access token | API token for authentication |
| `NETLIFY_SITE_ID` | Your Netlify site ID | Identifies which site to deploy to |

### 5. Trigger Your First Deployment

The workflow will automatically deploy when you:
- ✅ Push to the `main` or `master` branch
- ✅ Create a pull request (creates preview deployment)
- ✅ Manually trigger from GitHub Actions tab

### 6. Verify Deployment

1. Go to the **Actions** tab in your GitHub repository
2. Click on the running/completed workflow
3. Check the deployment URL in the logs
4. Visit your Netlify site to verify it's working

## Local Testing (Optional)

To test your site locally before deploying:

```bash
# Using Python (if installed)
python -m http.server 8000

# Or using Node.js (if installed)
npx serve .

# Or using Netlify CLI (if installed)
netlify dev
```

Then open `http://localhost:8000` in your browser.

## Custom Domain Setup (Optional)

1. Go to your Netlify dashboard
2. Navigate to **Domain settings**
3. Click **"Add custom domain"**
4. Follow the instructions to configure your domain
5. Netlify will automatically provision SSL certificates

## Troubleshooting

### Deployment Fails?

1. **Check the workflow logs:**
   - Go to GitHub > Actions tab
   - Click on the failed workflow run
   - Review the error messages

2. **Common issues:**
   - ❌ Missing or incorrect `NETLIFY_AUTH_TOKEN`
   - ❌ Wrong `NETLIFY_SITE_ID`
   - ❌ Missing `index.html` file
   - ❌ Incorrect file paths in the workflow

3. **Fix and redeploy:**
   - Fix the issue
   - Push a new commit to trigger the workflow
   - Or manually trigger from the Actions tab

### Preview Deployments Not Working?

- Preview deployments are created for pull requests
- Check the PR comments for the preview URL
- Ensure you have proper permissions on Netlify

### Site Not Updating After Deployment?

1. **Clear Netlify cache:**
   - Go to Netlify dashboard
   - Navigate to **Deploys** > **Clear cache and deploy**

2. **Force push to main:**
   ```bash
   git push origin main --force
   ```

## Workflow Features

This GitHub Actions workflow provides:

✅ **Automatic Deployment** - Deploys on every push to main/master  
✅ **Preview Deployments** - Creates preview URLs for PRs  
✅ **Build Validation** - Validates HTML before deployment  
✅ **Deployment Notifications** - Success/failure status updates  
✅ **Concurrent Deployment Protection** - Prevents conflicting deployments  
✅ **Deployment URL Output** - Shows live URL in workflow logs  

## Additional Resources

- [Netlify Documentation](https://docs.netlify.com/)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Netlify CLI Documentation](https://docs.netlify.com/cli/get-started/)
- [nwtgck/actions-netlify Action](https://github.com/nwtgck/actions-netlify)

## Support

If you encounter any issues:
1. Check the workflow logs in GitHub Actions
2. Review the Netlify deploy logs
3. Check the [Netlify community forums](https://answers.netlify.com/)
4. Review the [GitHub Actions troubleshooting guide](https://docs.github.com/en/actions/learn-github-actions/troubleshooting-github-actions)

---

**Happy Deploying! 🚀**
