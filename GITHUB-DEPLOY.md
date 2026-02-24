# 🚀 Push Portfolio to GitHub

## 📋 Prerequisites

- GitHub account (create at https://github.com if you don't have one)
- Git installed on your computer (check with `git --version`)

---

## 🎯 Step-by-Step Guide

### Step 1: Configure Git (First Time Only)

If you haven't configured Git before, run these commands:

```bash
git config --global user.name "Tushar Dodamani"
git config --global user.email "crazytush99@gmail.com"
```

### Step 2: Initialize Git Repository

```bash
cd tushar-portfolio
git init
```

### Step 3: Add All Files

```bash
git add .
```

### Step 4: Create First Commit

```bash
git commit -m "Initial commit - Portfolio website"
```

### Step 5: Create GitHub Repository

1. Go to https://github.com/
2. Click the "+" icon (top right)
3. Click "New repository"
4. Repository name: `portfolio` or `tushar-portfolio`
5. Description: "My professional portfolio website"
6. Choose "Public" (so others can see it)
7. **DO NOT** check "Initialize with README" (you already have files)
8. Click "Create repository"

### Step 6: Connect to GitHub

After creating the repo, GitHub will show you commands. Use these:

```bash
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

**Replace `YOUR_USERNAME` with your actual GitHub username!**

Example:
```bash
git remote add origin https://github.com/tushardodamani/portfolio.git
git branch -M main
git push -u origin main
```

### Step 7: Enter GitHub Credentials

When prompted:
- Username: Your GitHub username
- Password: Your GitHub Personal Access Token (see below)

---

## 🔑 Creating GitHub Personal Access Token

GitHub no longer accepts passwords for Git operations. You need a token:

### Get Your Token:

1. Go to: https://github.com/settings/tokens
2. Click "Generate new token" → "Generate new token (classic)"
3. Note: "Portfolio deployment"
4. Expiration: Choose "No expiration" or "90 days"
5. Select scopes:
   - ✅ repo (all)
   - ✅ workflow
6. Click "Generate token"
7. **COPY THE TOKEN** (you won't see it again!)
8. Save it somewhere safe

### Use Token as Password:

When Git asks for password, paste your token (not your GitHub password).

---

## 📝 Complete Command Sequence

Here's everything in order:

```bash
# Navigate to your project
cd tushar-portfolio

# Configure Git (if not done before)
git config --global user.name "Tushar Dodamani"
git config --global user.email "crazytush99@gmail.com"

# Initialize repository
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit - Portfolio website"

# Add GitHub remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Rename branch to main
git branch -M main

# Push to GitHub
git push -u origin main
```

---

## 🌐 Deploy to GitHub Pages (Free Hosting!)

After pushing to GitHub, you can host your portfolio for FREE:

### Step 1: Install gh-pages Package

```bash
npm install --save-dev gh-pages
```

### Step 2: Update package.json

Add these lines to your `package.json`:

**Add at the top (after "name"):**
```json
"homepage": "https://YOUR_USERNAME.github.io/portfolio",
```

**Add to "scripts" section:**
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
```

**Complete example:**
```json
{
  "name": "tushar-portfolio",
  "homepage": "https://tushardodamani.github.io/portfolio",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    ...
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

### Step 3: Deploy to GitHub Pages

```bash
npm run deploy
```

This will:
1. Build your portfolio
2. Create a `gh-pages` branch
3. Deploy to GitHub Pages

### Step 4: Enable GitHub Pages

1. Go to your GitHub repository
2. Click "Settings"
3. Scroll to "Pages" (left sidebar)
4. Source: Should show "gh-pages" branch
5. Your site will be live at: `https://YOUR_USERNAME.github.io/portfolio`

---

## 🔄 Updating Your Portfolio

After making changes:

```bash
# Add changed files
git add .

# Commit changes
git commit -m "Updated portfolio content"

# Push to GitHub
git push

# Deploy to GitHub Pages
npm run deploy
```

---

## 📁 What Gets Pushed to GitHub

Your repository will include:
- ✅ All source code
- ✅ Components (Hero, About, Skills, etc.)
- ✅ CSS files
- ✅ Documentation files
- ✅ package.json
- ❌ node_modules (excluded by .gitignore)
- ❌ build folder (excluded by .gitignore)

---

## 🆘 Common Issues

### "Permission denied"
**Fix**: Use Personal Access Token instead of password

### "Repository not found"
**Fix**: Check the repository URL is correct

### "Failed to push"
**Fix**: Make sure you created the repository on GitHub first

### "Authentication failed"
**Fix**: 
1. Generate new Personal Access Token
2. Use token as password when prompted

### "gh-pages not found"
**Fix**: Run `npm install --save-dev gh-pages`

---

## ✅ Verification Checklist

After pushing:
- [ ] Go to your GitHub repository URL
- [ ] You should see all your files
- [ ] Check the commit message appears
- [ ] If deployed to Pages, visit your live site
- [ ] Test the live portfolio works correctly

---

## 🎯 Your Portfolio URLs

After setup, you'll have:

**GitHub Repository:**
```
https://github.com/YOUR_USERNAME/portfolio
```

**Live Website (GitHub Pages):**
```
https://YOUR_USERNAME.github.io/portfolio
```

---

## 💡 Pro Tips

### 1. Add a README
Create a nice README.md for your repository:

```markdown
# Tushar Dodamani - Portfolio

My professional portfolio showcasing my work as a Fullstack Developer.

## 🚀 Live Demo
[View Portfolio](https://YOUR_USERNAME.github.io/portfolio)

## 🛠️ Built With
- React
- CSS3
- EmailJS

## 📧 Contact
- Email: crazytush99@gmail.com
- Phone: +91 7249445752
```

### 2. Add .gitignore
Make sure you have `.gitignore` with:

```
# dependencies
/node_modules

# testing
/coverage

# production
/build

# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*
```

### 3. Protect Your Secrets
**IMPORTANT**: Before pushing, make sure your EmailJS IDs are in the code, but:
- Don't commit any `.env` files with sensitive data
- EmailJS Public Key is safe to commit (it's meant to be public)
- Service ID and Template ID are also safe to commit

### 4. Custom Domain (Optional)
You can use your own domain:
1. Buy a domain (e.g., tushardodamani.com)
2. In GitHub Pages settings, add custom domain
3. Update DNS records with your domain provider

---

## 🎉 You're Done!

Your portfolio is now:
- ✅ Backed up on GitHub
- ✅ Version controlled
- ✅ Ready to deploy
- ✅ Shareable with others

Share your GitHub repository and live site with potential employers! 🚀
