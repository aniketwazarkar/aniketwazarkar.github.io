# Deployment Guide - Replace Existing Portfolio

This guide will help you replace your existing portfolio at [https://github.com/aniketwazarkar/aniketwazarkar.github.io](https://github.com/aniketwazarkar/aniketwazarkar.github.io) with this new one.

## 🚀 Step-by-Step Deployment

### 1. Backup Your Current Portfolio (Optional)
```bash
# Clone your current portfolio to a backup folder
git clone https://github.com/aniketwazarkar/aniketwazarkar.github.io.git portfolio-backup
```

### 2. Replace Repository Content

#### Option A: Replace via GitHub Web Interface
1. Go to [https://github.com/aniketwazarkar/aniketwazarkar.github.io](https://github.com/aniketwazarkar/aniketwazarkar.github.io)
2. Delete all existing files (except README.md initially)
3. Upload all files from this project to the repository

#### Option B: Replace via Git Commands
```bash
# Clone your existing repository
git clone https://github.com/aniketwazarkar/aniketwazarkar.github.io.git
cd aniketwazarkar.github.io

# Remove all existing files (except .git)
rm -rf * .[^.]*

# Copy all files from this project
cp -r /path/to/this/project/* .
cp -r /path/to/this/project/.[^.]* .

# Add all files
git add .

# Commit the changes
git commit -m "Replace portfolio with new 3D React version"

# Push to GitHub
git push origin main
```

### 3. Configure GitHub Pages

1. Go to your repository settings: `https://github.com/aniketwazarkar/aniketwazarkar.github.io/settings`
2. Navigate to "Pages" in the left sidebar
3. Under "Source", select "GitHub Actions"
4. The GitHub Actions workflow will automatically deploy your site

### 4. Set Up Environment Variables (Optional)

If you want the contact form to work, add these secrets to your repository:

1. Go to repository settings → Secrets and variables → Actions
2. Add the following secrets:
   - `EMAILJS_SERVICE_ID`
   - `EMAILJS_TEMPLATE_ID` 
   - `EMAILJS_PUBLIC_KEY`

### 5. Verify Deployment

1. Wait for the GitHub Actions workflow to complete (check the "Actions" tab)
2. Visit [https://aniketwazarkar.github.io](https://aniketwazarkar.github.io) to see your new portfolio
3. Test all features including the contact form

## 🔧 Configuration Files

The following files have been configured for GitHub Pages deployment:

- `vite.config.js` - Set base path to `/aniketwazarkar.github.io/`
- `.github/workflows/deploy.yml` - GitHub Actions workflow for automatic deployment
- `README.md` - Updated with your information
- `.gitignore` - Proper ignore rules for React/Vite project

## 🎯 Features Included

✅ **Modern 3D Portfolio** with Three.js animations  
✅ **Responsive Design** that works on all devices  
✅ **Contact Form** with EmailJS integration  
✅ **SEO Optimized** with proper meta tags  
✅ **Fast Performance** with Vite build system  
✅ **Professional Design** showcasing your skills and experience  

## 🚨 Important Notes

1. **Base Path**: The site is configured for the repository name `aniketwazarkar.github.io`
2. **Automatic Deployment**: Every push to main branch will trigger a new deployment
3. **Contact Form**: Requires EmailJS setup for full functionality
4. **Custom Domain**: If you have a custom domain, update the base path in `vite.config.js`

## 📞 Support

If you encounter any issues during deployment, check:
- GitHub Actions logs for build errors
- Browser console for runtime errors
- Network tab for missing assets

Your new portfolio will be live at: **https://aniketwazarkar.github.io** 