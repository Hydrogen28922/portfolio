# 🔑 Fix GitHub Authentication Error

## ❌ Error You're Seeing:
```
remote: Invalid username or token.
Password authentication is not supported for Git operations.
fatal: Authentication failed
```

## 🎯 Solution: Use Personal Access Token

GitHub no longer accepts passwords. You need a Personal Access Token (PAT).

---

## 📋 Step-by-Step: Get Your Token

### Step 1: Go to GitHub Token Settings
Open this link: https://github.com/settings/tokens

Or manually:
1. Go to GitHub.com
2. Click your profile picture (top right)
3. Click "Settings"
4. Scroll down, click "Developer settings" (bottom left)
5. Click "Personal access tokens"
6. Click "Tokens (classic)"

### Step 2: Generate New Token
1. Click "Generate new token" button
2. Click "Generate new token (classic)"

### Step 3: Configure Token
**Note:** `Portfolio deployment`

**Expiration:** Choose one:
- No expiration (recommended for personal projects)
- 90 days
- Custom

**Select scopes** (check these boxes):
- ✅ **repo** (all checkboxes under repo)
  - repo:status
  - repo_deployment
  - public_repo
  - repo:invite
  - security_events
- ✅ **workflow**

### Step 4: Generate and Copy
1. Scroll down
2. Click "Generate token" (green button)
3. **COPY THE TOKEN IMMEDIATELY** (you won't see it again!)
4. It looks like: `ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`
5. Save it somewhere safe (notepad, password manager)

---

## 🚀 Push to GitHub with Token

### Method 1: Use Token as Password (Easiest)

Run the push command again:
```bash
git push -u origin main
```

When prompted:
- **Username:** `Hydrogen28922` (your GitHub username)
- **Password:** Paste your token (the `ghp_xxx...` string)

**Note:** When you paste the token, you won't see it (for security). Just paste and press Enter.

---

### Method 2: Update Remote URL with Token

If you want to avoid entering credentials every time:

```bash
git remote set-url origin https://YOUR_TOKEN@github.com/Hydrogen28922/portfolio.git
```

Replace `YOUR_TOKEN` with your actual token.

Example:
```bash
git remote set-url origin https://ghp_abc123xyz789@github.com/Hydrogen28922/portfolio.git
```

Then push:
```bash
git push -u origin main
```

---

### Method 3: Use GitHub CLI (Alternative)

Install GitHub CLI and authenticate:

```bash
# Install GitHub CLI (if not installed)
# Download from: https://cli.github.com/

# Authenticate
gh auth login

# Follow prompts and choose HTTPS
# Then push normally
git push -u origin main
```

---

## 🔐 Store Credentials (Optional)

To avoid entering token every time:

### Windows:
```bash
git config --global credential.helper wincred
```

### Mac:
```bash
git config --global credential.helper osxkeychain
```

### Linux:
```bash
git config --global credential.helper store
```

After this, enter your token once, and Git will remember it.

---

## ✅ Complete Push Sequence

Here's everything in order:

```bash
# 1. Make sure you're in the right directory
cd tushar-portfolio

# 2. Check remote is correct
git remote -v

# 3. Push to GitHub
git push -u origin main

# When prompted:
# Username: Hydrogen28922
# Password: [paste your token here]
```

---

## 🆘 Troubleshooting

### "Token doesn't work"
- Make sure you selected "repo" and "workflow" scopes
- Check token hasn't expired
- Generate a new token if needed

### "Still asking for password"
- Make sure you're pasting the token, not your GitHub password
- Token should start with `ghp_`
- Try Method 2 (update remote URL with token)

### "Remote not found"
Check your remote URL:
```bash
git remote -v
```

Should show:
```
origin  https://github.com/Hydrogen28922/portfolio.git (fetch)
origin  https://github.com/Hydrogen28922/portfolio.git (push)
```

If wrong, fix it:
```bash
git remote set-url origin https://github.com/Hydrogen28922/portfolio.git
```

---

## 📝 Quick Reference

**Your GitHub Repository:**
```
https://github.com/Hydrogen28922/portfolio
```

**Get Token:**
```
https://github.com/settings/tokens
```

**Token Format:**
```
ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

**Push Command:**
```bash
git push -u origin main
```

**Username:** `Hydrogen28922`
**Password:** Your token (starts with `ghp_`)

---

## 🎯 After Successful Push

Once it works, you'll see:
```
Enumerating objects: 100, done.
Counting objects: 100% (100/100), done.
Delta compression using up to 8 threads
Compressing objects: 100% (90/90), done.
Writing objects: 100% (100/100), 1.23 MiB | 2.34 MiB/s, done.
Total 100 (delta 10), reused 0 (delta 0)
To https://github.com/Hydrogen28922/portfolio.git
 * [new branch]      main -> main
Branch 'main' set up to track remote branch 'main' from 'origin'.
```

Then visit: https://github.com/Hydrogen28922/portfolio

Your code will be there! 🎉

---

## 💡 Pro Tip

Save your token in a password manager like:
- LastPass
- 1Password
- Bitwarden
- Or a secure note on your phone

You'll need it for future pushes if you don't store credentials.

---

## ✅ Next Steps After Push

1. Verify files are on GitHub
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Deploy to GitHub Pages: `npm run deploy`
4. Your live site: `https://Hydrogen28922.github.io/portfolio`

Good luck! 🚀
