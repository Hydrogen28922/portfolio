# 📧 HTML Email Template for EmailJS

## 🎨 Copy This Template to EmailJS

When creating your template in EmailJS, paste this HTML code:

### Template Content (HTML):

```html
<div style="font-family: system-ui, sans-serif, Arial; font-size: 12px">
  <div>A message by {{from_name}} has been received. Kindly respond at your earliest convenience.</div>
  <div style="margin-top: 20px; padding: 15px 0; border-width: 1px 0; border-style: dashed; border-color: lightgrey;">
    <table role="presentation">
      <tr>
        <td style="vertical-align: top">
          <div style="padding: 6px 10px; margin: 0 10px; background-color: aliceblue; border-radius: 5px; font-size: 26px;" role="img">👤</div>
        </td>
        <td style="vertical-align: top">
          <div style="color: #2c3e50; font-size: 16px"><strong>{{from_name}}</strong></div>
          <div style="color: #7f8c8d; font-size: 13px">{{from_email}}</div>
          <p style="font-size: 16px; color: #34495e; line-height: 1.6;">{{message}}</p>
        </td>
      </tr>
    </table>
  </div>
  <div style="margin-top: 20px; padding-top: 15px; border-top: 1px solid #ecf0f1; color: #95a5a6; font-size: 11px;">
    <p>This message was sent from your portfolio contact form.</p>
    <p>Reply directly to respond to {{from_name}}.</p>
  </div>
</div>
```

---

## 🔧 Update Your Contact.js

The template uses `{{from_name}}`, `{{from_email}}`, and `{{message}}`, which matches your current code! No changes needed to Contact.js.

Your current code already sends:
- `from_name` → User's name
- `from_email` → User's email  
- `message` → User's message

---

## 📋 EmailJS Template Settings

### In EmailJS Dashboard:

**1. Template Name:**
```
Portfolio Contact Form
```

**2. Subject:**
```
New Message from {{from_name}} - Portfolio Contact
```

**3. Content (switch to HTML mode):**
- Click the "HTML" tab in the template editor
- Paste the HTML template above

**4. To Email:**
```
{{to_name}}
```

**5. Reply-To:**
```
{{from_email}}
```
(This allows you to reply directly to the sender)

---

## 📧 What the Email Will Look Like

When someone fills your form, you'll receive a beautiful formatted email:

```
┌─────────────────────────────────────────────┐
│ Subject: New Message from John Doe          │
├─────────────────────────────────────────────┤
│                                             │
│ A message by John Doe has been received.    │
│ Kindly respond at your earliest convenience.│
│                                             │
│ ─────────────────────────────────────────── │
│                                             │
│  👤   John Doe                              │
│       john.doe@example.com                  │
│                                             │
│       Hi Tushar, I saw your portfolio       │
│       and would like to discuss a project   │
│       opportunity. Can we schedule a call?  │
│                                             │
│ ─────────────────────────────────────────── │
│                                             │
│ This message was sent from your portfolio   │
│ contact form.                               │
│ Reply directly to respond to John Doe.      │
│                                             │
└─────────────────────────────────────────────┘
```

---

## ✅ Step-by-Step Setup

### 1. Go to EmailJS Template Editor
- Dashboard → Email Templates → Create New Template

### 2. Switch to HTML Mode
- Look for tabs: "Plain Text" | "HTML"
- Click "HTML"

### 3. Paste the Template
- Delete any default content
- Paste the HTML template from above

### 4. Set Subject Line
```
New Message from {{from_name}} - Portfolio Contact
```

### 5. Set Reply-To (Important!)
- Find "Reply-To" field
- Enter: `{{from_email}}`
- This lets you reply directly to the sender

### 6. Save Template
- Click "Save"
- Copy your Template ID

### 7. Test It
- Click "Test It" button
- Fill in test values:
  - from_name: Test User
  - from_email: test@example.com
  - message: This is a test message
- Send test email to yourself

---

## 🎯 Variables Explained

The template uses these variables from your form:

| Variable | Source | Description |
|----------|--------|-------------|
| `{{from_name}}` | Form field "name" | Sender's name |
| `{{from_email}}` | Form field "email" | Sender's email |
| `{{message}}` | Form field "message" | The message content |
| `{{to_name}}` | Your code | "Tushar Dodamani" |

---

## 💡 Pro Tips

### 1. Enable Reply-To
Setting `{{from_email}}` as Reply-To means:
- You can click "Reply" in Gmail
- It will reply directly to the sender
- No need to copy their email

### 2. Test Before Going Live
- Use the "Test It" button in EmailJS
- Send a test email to yourself
- Check formatting looks good

### 3. Customize Colors
You can change colors in the HTML:
- `#2c3e50` - Name color (dark blue)
- `#7f8c8d` - Email color (gray)
- `#34495e` - Message color (dark gray)
- `aliceblue` - Icon background

### 4. Add Your Logo (Optional)
Replace the 👤 emoji with an image:
```html
<img src="YOUR_LOGO_URL" alt="Logo" style="width: 40px; height: 40px;">
```

---

## 🆘 Troubleshooting

### HTML Not Rendering?
- Make sure you're in "HTML" mode, not "Plain Text"
- Check all HTML tags are properly closed
- Test the template in EmailJS before using

### Variables Not Working?
- Make sure variable names match exactly:
  - `{{from_name}}` not `{{name}}`
  - `{{from_email}}` not `{{email}}`
- Check your Contact.js sends these exact variable names

### Email Looks Plain?
- Some email clients strip HTML styling
- Gmail usually renders it perfectly
- Outlook might simplify the design

---

## ✅ Final Checklist

- [ ] Created template in EmailJS
- [ ] Switched to HTML mode
- [ ] Pasted the HTML template
- [ ] Set subject line
- [ ] Set Reply-To to `{{from_email}}`
- [ ] Saved template
- [ ] Copied Template ID
- [ ] Updated Contact.js with Template ID
- [ ] Tested with "Test It" button
- [ ] Received test email successfully

---

## 🎉 You're All Set!

Your contact form will now send beautifully formatted HTML emails with:
- Professional styling
- User avatar icon
- Clear sender information
- Easy-to-read message
- Direct reply capability

Just update your Template ID in Contact.js and you're ready to receive messages! 🚀
