# Deployment Guide for Nekoife Testing Site

## Prerequisites
- Netlify CLI installed ✓
- Netlify account (sign up at https://netlify.com if needed)

## Quick Deployment Steps

### 1. Build the project
```bash
npm run build
```

### 2. Deploy to Netlify

#### Option A: Production deployment
```bash
netlify deploy --prod
```

#### Option B: Draft/preview deployment (test first)
```bash
netlify deploy
```

### First-time setup prompts:
1. **Authorize**: Log in to Netlify (browser will open)
2. **Create site**: Choose "Create & configure a new site"
3. **Team**: Select your team
4. **Site name**: `nekoife` (or available alternative)
5. **Publish directory**: `dist`

## Configuration
- Build command: `npm run build`
- Publish directory: `dist`
- Framework: Vite + React

## Files Created
- `netlify.toml` - Netlify configuration with build settings and SPA redirects

## After Deployment
Your site will be available at:
- Custom: `https://nekoife.netlify.app` (if available)
- Or: `https://[generated-name].netlify.app`

## Re-deployment
For subsequent deployments, just run:
```bash
npm run build
netlify deploy --prod
```
