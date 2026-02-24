# 🔍 Quick Guide: Where to Find Your 3 IDs

## 📍 Location of Each ID

```
EmailJS Dashboard (https://dashboard.emailjs.com/)
│
├── 📧 Email Services (Left Sidebar)
│   │
│   └── Your Gmail Service
│       │
│       └── Service ID: service_abc123  ← ID #1: SERVICE_ID
│
├── 📝 Email Templates (Left Sidebar)
│   │
│   └── Your Template
│       │
│       └── Template ID: template_xyz789  ← ID #2: TEMPLATE_ID
│
└── ⚙️ Account → General (Left Sidebar)
    │
    └── API Keys Section
        │
        └── Public Key: abcXYZ123_456  ← ID #3: PUBLIC_KEY
```

---

## 🎯 Step-by-Step: Finding Each ID

### 1️⃣ SERVICE_ID (from Email Services)

**Path:** Dashboard → Email Services → Your Gmail

**What you'll see:**
```
┌──────────────────────────────┐
│ Gmail                        │
│ ──────────────────────────── │
│ Service ID: service_abc123   │  ← COPY THIS!
│ Status: Active               │
│ Provider: Gmail              │
└──────────────────────────────┘
```

**Copy:** `service_abc123`

---

### 2️⃣ TEMPLATE_ID (from Email Templates)

**Path:** Dashboard → Email Templates → Your Template

**What you'll see:**
```
┌──────────────────────────────────┐
│ Portfolio Contact Form           │
│ ──────────────────────────────── │
│ Template ID: template_xyz789     │  ← COPY THIS!
│ Created: Today                   │
│ Last Modified: Today             │
└──────────────────────────────────┘
```

**Copy:** `template_xyz789`

---

### 3️⃣ PUBLIC_KEY (from Account Settings)

**Path:** Dashboard → Account → General → API Keys

**What you'll see:**
```
┌──────────────────────────────────┐
│ API Keys                         │
│ ──────────────────────────────── │
│ Public Key:                      │
│ abcXYZ123_456                    │  ← COPY THIS!
│                                  │
│ [Copy to Clipboard] button       │
└──────────────────────────────────┘
```

**Copy:** `abcXYZ123_456`

---

## 📋 Email Template to Copy-Paste

When creating your template in EmailJS, use this:

### Template Settings:

**Template Name:**
```
Portfolio Contact Form
```

**To Email:**
```
{{to_name}}
```

**Subject:**
```
New Portfolio Message from {{from_name}}
```

**Content (HTML or Plain Text):**
```
Hello Tushar,

You have received a new message from your portfolio website!

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

FROM: {{from_name}}
EMAIL: {{from_email}}

MESSAGE:
{{message}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This message was sent from your portfolio contact form.
Reply directly to this email to respond to {{from_name}}.

Best regards,
Your Portfolio System
```

### Important Variables (DO NOT CHANGE):
- `{{from_name}}` - Sender's name from form
- `{{from_email}}` - Sender's email from form
- `{{message}}` - Message from form
- `{{to_name}}` - Your name (set in code)

---

## 🔧 Update Your Code

Open: `tushar-portfolio/src/components/Contact.js`

Find these lines (around line 24-26):

**BEFORE:**
```javascript
const serviceID = 'YOUR_SERVICE_ID';
const templateID = 'YOUR_TEMPLATE_ID';
const publicKey = 'YOUR_PUBLIC_KEY';
```

**AFTER (with your actual IDs):**
```javascript
const serviceID = 'service_abc123';      // Replace with YOUR Service ID
const templateID = 'template_xyz789';    // Replace with YOUR Template ID
const publicKey = 'abcXYZ123_456';       // Replace with YOUR Public Key
```

---

## ✅ Quick Checklist

- [ ] Created EmailJS account
- [ ] Connected Gmail (got Service ID)
- [ ] Created email template (got Template ID)
- [ ] Copied Public Key from Account settings
- [ ] Ran `npm install @emailjs/browser`
- [ ] Updated Contact.js with all 3 IDs
- [ ] Tested the contact form

---

## 🎯 Example with Real IDs

Here's what it looks like with actual IDs:

```javascript
// Real example (your IDs will be different)
const serviceID = 'service_8k2j9h3';
const templateID = 'template_portfolio_2024';
const publicKey = 'xYz123AbC_789';
```

---

## 🆘 Can't Find an ID?

### Service ID Missing?
1. Go to "Email Services"
2. If empty, click "Add New Service"
3. Connect your Gmail
4. Service ID will appear

### Template ID Missing?
1. Go to "Email Templates"
2. If empty, click "Create New Template"
3. Copy the template from above
4. Click "Save"
5. Template ID will appear

### Public Key Missing?
1. Go to "Account" (left sidebar)
2. Click "General" tab
3. Scroll down to "API Keys"
4. Public Key is always there

---

## 📧 Test Email Example

After setup, when someone fills your form, you'll receive:

```
From: EmailJS <noreply@emailjs.com>
Reply-To: john.doe@example.com
To: your-email@gmail.com
Subject: New Portfolio Message from John Doe

Hello Tushar,

You have received a new message from your portfolio website!

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

FROM: John Doe
EMAIL: john.doe@example.com

MESSAGE:
Hi Tushar, I'm interested in working with you on a project.
Can we schedule a call to discuss?

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This message was sent from your portfolio contact form.
Reply directly to this email to respond to John Doe.

Best regards,
Your Portfolio System
```

---

## 🎉 You're Done!

Once you have all 3 IDs and update Contact.js:
1. Save the file
2. Your portfolio will auto-reload
3. Test the contact form
4. Check your email inbox!

**Total time: 5 minutes** ⏱️

Need help? Check EMAILJS-TEMPLATE-GUIDE.md for detailed instructions!
