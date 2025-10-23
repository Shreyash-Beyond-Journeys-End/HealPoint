# HealPoint Frontend - Deployment Guide

This guide will help you deploy the HealPoint frontend to Vercel.

## ✅ Pre-Deployment Checklist

- [ ] Backend is deployed and running
- [ ] All environment variables are configured
- [ ] Code is committed to GitHub
- [ ] All tests pass locally

## 🚀 Step-by-Step Deployment to Vercel

### 1. Prepare Your Code for Deployment

```bash
# Navigate to frontend directory
cd /home/shreyashkawde/Desktop/HealPoint/frontend

# Install dependencies (if not done)
npm install

# Build the project locally to check for errors
npm run build

# Check for TypeScript errors
npm run type-check
```

### 2. Create GitHub Repository

If you haven't already, initialize Git and push to GitHub:

```bash
# Initialize git (if not done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: HealPoint frontend with Next.js and Tailwind"

# Add remote repository (replace with your GitHub repo URL)
git remote add origin https://github.com/yourusername/HealPoint.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 3. Deploy to Vercel

#### Option A: Using Vercel CLI (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# When prompted:
# - "Which scope should contain your project?" → Select your account
# - "Link to existing project?" → No
# - "What's your project's name?" → healpoint-frontend
# - "In which directory is your code?" → . (current directory)
# - "Want to modify these settings?" → No
```

#### Option B: Using Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Click "Import Git Repository"
4. Search for your GitHub repository
5. Click "Import"
6. Configure project:
   - **Root Directory**: Select `frontend`
   - **Framework**: Next.js
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
7. Add environment variables:
   - `NEXT_PUBLIC_API_URL` = `https://your-backend-url.com`
8. Click "Deploy"

### 4. Configure Environment Variables in Vercel

After deployment, go to:

**Vercel Dashboard → Settings → Environment Variables**

Add the following:

| Variable | Value | Type |
|----------|-------|------|
| `NEXT_PUBLIC_API_URL` | `https://your-backend-api.com` | Public |

**Note**: If your backend is on a different domain, update `NEXT_PUBLIC_API_URL` accordingly.

### 5. Verify Deployment

After deployment completes:

1. Visit your Vercel deployment URL
2. Test the following:
   - [ ] Home page loads correctly
   - [ ] Navigation works
   - [ ] Login page is accessible
   - [ ] Can submit forms
   - [ ] Mobile responsive
   - [ ] Console has no errors

### 6. Custom Domain (Optional)

If you want to use a custom domain:

1. **In Vercel Dashboard:**
   - Go to your project → Settings → Domains
   - Click "Add Domain"
   - Enter your domain

2. **Update DNS records** at your domain provider:
   - For apex domain (@): `cname.vercel.com`
   - For subdomains (www): `cname.vercel.com`

3. **Wait for DNS propagation** (can take 24 hours)

## 🔗 Environment Setup Examples

### For Development (Local)
```env
NEXT_PUBLIC_API_URL=http://localhost:4451
```

### For Staging (Vercel Preview)
```env
NEXT_PUBLIC_API_URL=https://staging-api.yourdomain.com
```

### For Production (Vercel)
```env
NEXT_PUBLIC_API_URL=https://api.yourdomain.com
```

## 🔄 Continuous Deployment

Vercel automatically deploys when you push to GitHub:

- **Main branch** → Production deployment
- **Other branches** → Preview deployment

## 📊 Monitoring Your Deployment

### View Logs
```bash
# Check recent deployments
vercel list

# View latest deployment logs
vercel logs
```

### Rollback (if needed)
In Vercel Dashboard:
1. Go to Deployments
2. Find the previous deployment
3. Click "Promote to Production"

## ❌ Troubleshooting

### Build Fails

**Problem**: `npm ERR! missing script: "build"`

**Solution**: Check `package.json` has the build script:
```json
{
  "scripts": {
    "build": "next build"
  }
}
```

### API Not Connecting

**Problem**: Frontend can't reach backend API

**Solutions**:
1. Check `NEXT_PUBLIC_API_URL` is correct in environment variables
2. Verify backend is running and accessible
3. Check CORS headers on backend
4. Check browser console for errors

### Environment Variables Not Loading

**Problem**: `process.env.NEXT_PUBLIC_API_URL` is undefined

**Solution**: 
- Ensure variables start with `NEXT_PUBLIC_`
- Restart build after adding variables
- Clear browser cache

### White Screen / 500 Error

**Problem**: Blank page or 500 error after deployment

**Solutions**:
1. Check Vercel function logs in dashboard
2. Look for TypeScript errors: `npm run type-check`
3. Check for API errors in browser console
4. Redeploy: `vercel --prod`

## 📈 Performance Optimization

### After Deployment

1. **Check performance** at [PageSpeed Insights](https://pagespeed.web.dev/)
2. **Monitor** in Vercel Analytics
3. **Optimize images** if needed
4. **Enable Vercel Cache** in settings

### Next.js Optimizations Already Included

- ✅ Automatic code splitting
- ✅ Image optimization
- ✅ Lazy loading
- ✅ CSS minification
- ✅ Production optimizations

## 🔐 Security

- ✅ Never commit `.env` or `.env.local`
- ✅ Use Vercel's environment variables for secrets
- ✅ Enable HTTPS (automatic with Vercel)
- ✅ Regular security updates: `npm audit`

## 📞 Support

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs/deployment
- **Troubleshooting**: https://vercel.com/support

## ✨ Post-Deployment

1. Update your `README.md` with the live URL
2. Share the deployment URL with team members
3. Set up monitoring and alerts
4. Document the deployment process
5. Keep dependencies updated: `npm update`

---

**Your app is now live! 🎉**
