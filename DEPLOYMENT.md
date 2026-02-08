# CodexBit Website - Vercel Deployment Guide

## Prerequisites
- Git repository pushed to GitHub/GitLab/Bitbucket
- Vercel account (sign up at https://vercel.com)

## Deployment Steps

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to Git**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Import to Vercel**
   - Go to https://vercel.com/new
   - Click "Import Project"
   - Select your Git repository
   - Vercel will auto-detect Vite configuration

3. **Configure Project**
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

4. **Deploy**
   - Click "Deploy"
   - Wait for build to complete
   - Your site will be live at `https://your-project.vercel.app`

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Deploy to Production**
   ```bash
   vercel --prod
   ```

## Environment Variables (if needed)

If you have environment variables, add them in Vercel Dashboard:
1. Go to Project Settings
2. Navigate to Environment Variables
3. Add your variables (e.g., API keys)

## Custom Domain Setup

1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed by Vercel

## Build Configuration

The project is configured with:
- **Framework**: Vite + React + TypeScript
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Node Version**: 18.x (recommended)

## Automatic Deployments

Once connected to Git:
- Every push to `main` branch triggers production deployment
- Pull requests create preview deployments
- Rollback available from Vercel Dashboard

## Performance Optimizations

✅ Code splitting enabled
✅ CSS optimization
✅ Asset caching configured
✅ Source maps disabled for production

## Troubleshooting

### Build Fails
- Check Node version (use 18.x or higher)
- Verify all dependencies are in package.json
- Check build logs in Vercel Dashboard

### 404 Errors on Routes
- Ensure `vercel.json` rewrites are configured (already done)
- Check React Router configuration

### Slow Build Times
- Review bundle size
- Consider lazy loading components
- Check for large dependencies

## Support

For issues:
- Vercel Docs: https://vercel.com/docs
- Vite Docs: https://vitejs.dev/guide/

## Project Structure
```
codexbit-website/
├── dist/              # Build output (generated)
├── src/               # Source files
├── public/            # Static assets
├── vercel.json        # Vercel configuration
├── vite.config.ts     # Vite configuration
└── package.json       # Dependencies
```
