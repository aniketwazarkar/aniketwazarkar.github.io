# Environment Variables Setup

## Local Development
1. Copy `.env.example` to `.env`
2. Replace the placeholder values with your actual EmailJS credentials:
   ```
   VITE_EMAILJS_SERVICE_ID=your_actual_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
   ```

## GitHub Pages Deployment
Since GitHub Pages doesn't support environment variables directly, you have two options:

### Option 1: Use GitHub Secrets (Recommended)
1. Go to your GitHub repository
2. Navigate to Settings > Secrets and variables > Actions
3. Add the following repository secrets:
   - `EMAILJS_SERVICE_ID`
   - `EMAILJS_TEMPLATE_ID`
   - `EMAILJS_PUBLIC_KEY`
4. Update your GitHub Actions workflow to use these secrets

### Option 2: Build-time Environment Variables
Create a GitHub Actions workflow that sets environment variables during build:

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [ main ]
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '16'
      - name: Install dependencies
        run: npm install
      - name: Build
        env:
          VITE_EMAILJS_SERVICE_ID: ${{ secrets.EMAILJS_SERVICE_ID }}
          VITE_EMAILJS_TEMPLATE_ID: ${{ secrets.EMAILJS_TEMPLATE_ID }}
          VITE_EMAILJS_PUBLIC_KEY: ${{ secrets.EMAILJS_PUBLIC_KEY }}
        run: npm run build
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./build
```

## Hostinger Deployment
1. In your Hostinger control panel, go to your domain settings
2. Look for "Environment Variables" or "App Settings"
3. Add the following environment variables:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
4. Set their values to your actual EmailJS credentials

## Netlify Deployment
1. In your Netlify dashboard, go to your site
2. Click **Site settings** → **Environment variables**
3. Add the following environment variables:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
4. Set their values to your actual EmailJS credentials

## Security Notes
- Never commit the `.env` file to version control
- The `.env` file is already added to `.gitignore`
- Only the `.env.example` file should be committed to show the required variables
- EmailJS public keys are safe to expose in client-side code, but it's still good practice to use environment variables for consistency 