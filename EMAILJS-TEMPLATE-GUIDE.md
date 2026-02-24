# 📧 EmailJS Template Setup - Step by Step

## 🎯 How to Find YOUR_TEMPLATE_ID

### Step 1: Go to EmailJS Dashboard
1. Open https://dashboard.emailjs.com/
2. Login to your account

### Step 2: Navigate to Email Templates
1. Look at the left sidebar
2. Click on "Email Templates" (icon looks like an envelope)
3. You'll see a list of your templates (or empty if you haven't created one)

### Step 3: Create New Template
1. Click the blue button "Create New Template" (top right)
2. You'll see the template editor

### Step 4: Copy This Exact Template

#### Template Name:
```
Portfolio Contact Form
```

#### Subject Line (copy exactly):
```
New Portfolio Message from {{from_name}}
```

#### Content/Body (copy exactly):
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

#### To Email (Important!):
```
{{to_name}}
```
(This will be replaced with "Tushar Dodamani" from your code)

### Step 5: Save Template
1. Click "Save" button (top right)
2. You'll see a success message

### Step 6: Find Your Template ID
After saving, you'll see your template in the list. Look for:

```
Template ID: template_xxxxxxx
```

**This is YOUR_TEMPLATE_ID!** Copy it!

It looks something like:
- `template_abc123xyz`
- `template_9k2j3h4k`
- `template_portfolio_contact`

---

## 📋 Complete EmailJS Setup Checklist

### ✅ Step-by-Step Instructions:

#### 1️⃣ Create EmailJS Account
- [ ] Go to https://www.emailjs.com/
- [ ] Click "Sign Up"
- [ ] Use your email (the one where you want to receive messages)
- [ ] Verify your email

#### 2️⃣ Add Email Service (Get SERVICE_ID)
- [ ] In dashboard, click "Email Services" (left sidebar)
- [ ] Click "Add New Service"
- [ ] Choose "Gmail" (recommended)
- [ ] Click "Connect Account"
- [ ] Allow EmailJS to access your Gmail
- [ ] **COPY YOUR SERVICE_ID** (looks like: `service_abc123`)
- [ ] Save it somewhere!

**Where to find SERVICE_ID:**
After connecting Gmail, you'll see:
```
Service Name: Gmail
Service ID: service_abc123  ← COPY THIS!
Status: Active
```

#### 3️⃣ Create Email Template (Get TEMPLATE_ID)
- [ ] Click "Email Templates" (left sidebar)
- [ ] Click "Create New Template"
- [ ] Copy the template from above
- [ ] Click "Save"
- [ ] **COPY YOUR TEMPLATE_ID** (looks like: `template_xyz789`)

**Where to find TEMPLATE_ID:**
After saving, you'll see:
```
Template Name: Portfolio Contact Form
Template ID: template_xyz789  ← COPY THIS!
```

#### 4️⃣ Get Public Key (Get PUBLIC_KEY)
- [ ] Click "Account" (left sidebar)
- [ ] Click "General" tab
- [ ] Scroll down to "API Keys" section
- [ ] **COPY YOUR PUBLIC_KEY** (looks like: `abcXYZ123_456`)

**Where to find PUBLIC_KEY:**
In Account → General, you'll see:
```
Public Key: abcXYZ123_456  ← COPY THIS!
```

#### 5️⃣ Update Your Code
- [ ] Open `tushar-portfolio/src/components/Contact.js`
- [ ] Find lines 24-26
- [ ] Replace with your actual IDs:

```javascript
const serviceID = 'service_abc123';      // Your Service ID from step 2
const templateID = 'template_xyz789';    // Your Template ID from step 3
const publicKey = 'abcXYZ123_456';       // Your Public Key from step 4
```

#### 6️⃣ Install EmailJS Package
- [ ] Open terminal in your project
- [ ] Run: `npm install @emailjs/browser`
- [ ] Wait for installation to complete

#### 7️⃣ Test Your Contact Form
- [ ] Make sure your portfolio is running (`npm start`)
- [ ] Go to the Contact section
- [ ] Fill in the form:
  - Name: Test User
  - Email: test@example.com
  - Message: This is a test message
- [ ] Click "Send Message"
- [ ] Check your email inbox!

---

## 🎨 Visual Guide - What You'll See

### In EmailJS Dashboard:

**Email Services Page:**
```
┌─────────────────────────────────────┐
│ Email Services                      │
├─────────────────────────────────────┤
│ ┌─────────────────────────────────┐ │
│ │ Gmail                           │ │
│ │ Service ID: service_abc123      │ │ ← COPY THIS
│ │ Status: ● Active                │ │
│ └─────────────────────────────────┘ │
└─────────────────────────────────────┘
```

**Email Templates Page:**
```
┌─────────────────────────────────────┐
│ Email Templates                     │
├─────────────────────────────────────┤
│ ┌─────────────────────────────────┐ │
│ │ Portfolio Contact Form          │ │
│ │ Template ID: template_xyz789    │ │ ← COPY THIS
│ │ Created: Today                  │ │
│ └─────────────────────────────────┘ │
└─────────────────────────────────────┘
```

**Account → General Page:**
```
┌─────────────────────────────────────┐
│ API Keys                            │
├─────────────────────────────────────┤
│ Public Key:                         │
│ abcXYZ123_456                       │ ← COPY THIS
│                                     │
│ [Copy] button                       │
└─────────────────────────────────────┘
```

---

## 📧 What Email You'll Receive

When someone fills your contact form, you'll get:

```
From: noreply@emailjs.com
To: your-email@gmail.com
Subject: New Portfolio Message from John Doe

Hello Tushar,

You have received a new message from your portfolio website!

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

FROM: John Doe
EMAIL: john.doe@example.com

MESSAGE:
Hi Tushar, I came across your portfolio and I'm impressed 
with your work. I'd like to discuss a potential project 
opportunity. Are you available for a call next week?

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This message was sent from your portfolio contact form.
Reply directly to this email to respond to John Doe.

Best regards,
Your Portfolio System
```

---

## 🔧 Troubleshooting

### "Can't find Template ID"
1. Make sure you clicked "Save" after creating the template
2. Refresh the Email Templates page
3. The Template ID appears right under the template name

### "Can't find Service ID"
1. Go to "Email Services" in left sidebar
2. You should see your connected Gmail
3. Service ID is displayed under the service name

### "Can't find Public Key"
1. Click "Account" in left sidebar
2. Click "General" tab
3. Scroll down to "API Keys" section
4. Public Key is displayed there

### "Email not sending"
1. Check all three IDs are correct in Contact.js
2. Make sure you ran `npm install @emailjs/browser`
3. Check browser console for errors (F12)
4. Verify your Gmail is still connected in EmailJS

---

## 💡 Pro Tips

1. **Test the template in EmailJS:**
   - In Email Templates, click your template
   - Click "Test It" button
   - Fill in test values
   - Send test email to yourself

2. **Customize the template:**
   - You can change the subject line
   - Modify the email body
   - Add your logo or styling
   - Just keep the {{variables}} intact!

3. **Set up email notifications:**
   - Enable Gmail notifications on your phone
   - Get instant alerts when someone contacts you

4. **Check spam folder:**
   - First few emails might go to spam
   - Mark them as "Not Spam"
   - Future emails will go to inbox

---

## ✅ Final Checklist

Before testing, make sure:
- [ ] EmailJS account created and verified
- [ ] Gmail connected (Service ID copied)
- [ ] Email template created (Template ID copied)
- [ ] Public Key copied from Account settings
- [ ] All three IDs updated in Contact.js
- [ ] `npm install @emailjs/browser` completed
- [ ] Portfolio is running (`npm start`)

**Now test your contact form and check your email!** 🎉

---

## 📞 Need Help?

If you're stuck:
1. Check the EmailJS documentation: https://www.emailjs.com/docs/
2. Watch their video tutorial: https://www.emailjs.com/docs/tutorial/overview/
3. Check their FAQ: https://www.emailjs.com/docs/faq/

Your contact form is ready to receive messages! 🚀
