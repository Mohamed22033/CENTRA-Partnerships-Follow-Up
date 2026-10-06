# CENTRA Cybersecurity Partnership Portal

A professional, responsive, animated cybersecurity partnership portal for CENTRA.

The project is intentionally built with plain:

- HTML
- CSS
- JavaScript

No backend is required.

That means it can be hosted for free with GitHub Pages.

---

# 1. Folder Structure

```text
CENTRA-Partnership-Portal/
│
├── index.html
│
├── css/
│   └── style.css
│
├── js/
│   └── app.js
│
├── assets/
│   ├── centra-logo.png
│   │
│   ├── engineers/
│   │   ├── mohamed-abdelalim.jpg
│   │   ├── anas-osama.jpg
│   │   ├── mohab-hassan.jpg
│   │   ├── mohamed-nabil.jpg
│   │   └── nada-amr.jpg
│   │
│   └── vendors/
│       ├── f5.png
│       ├── splunk.png
│       ├── tenable.png
│       ├── fidelis-security.png
│       ├── infoblox.png
│       ├── proofpoint.png
│       ├── trellix.png
│       ├── fortinet.png
│       ├── a10.png
│       ├── utimaco.png
│       ├── thales.png
│       ├── cisco.png
│       └── palo-alto-networks.png
│
└── README.md
```

The image files are placeholders in the project. Replace them with your real images/logos using the exact filenames above.

---

# 2. Where Do I Add / Change Engineers?

Open:

```text
js/app.js
```

Find:

```javascript
const engineers = [
```

Each engineer looks like this:

```javascript
{
  name: "Engineer Name",
  role: "Cybersecurity Systems Engineer",
  photo: "assets/engineers/engineer-name.jpg",

  partnerships: [
    {
      name: "Company Name",
      logo: "assets/vendors/company-name.png"
    }
  ]
}
```

To add another engineer, add another object to the array.

---

# 3. How Do I Add a New Partnership?

Inside the engineer's `partnerships` array:

```javascript
{
  name: "New Vendor",
  logo: "assets/vendors/new-vendor.png"
}
```

Then put:

```text
new-vendor.png
```

inside:

```text
assets/vendors/
```

---

# 4. How Do I Replace the CENTRA Logo?

Put your real CENTRA logo here:

```text
assets/centra-logo.png
```

Recommended:

- PNG
- Transparent background
- High resolution
- Square or near-square logo works best

You can also change the logo filename inside `index.html` if required.

---

# 5. How Do I Replace Engineer Photos?

Put each photo in:

```text
assets/engineers/
```

Use these filenames:

```text
mohamed-abdelalim.jpg
anas-osama.jpg
mohab-hassan.jpg
mohamed-nabil.jpg
nada-amr.jpg
```

If you want another filename, update the `photo:` property in `js/app.js`.

---

# 6. How Do I Replace Vendor Logos?

Put vendor logos in:

```text
assets/vendors/
```

Use the exact filenames currently referenced in `js/app.js`.

If a logo is missing, the portal automatically shows an initials fallback instead of breaking the page.

---

# 7. Current Team

The initial project contains:

### Mohamed Abdelalim

- F5
- Splunk
- Tenable

### Anas Osama

- Fidelis Security
- Infoblox

### Mohab Hassan

- Proofpoint
- Trellix
- Fortinet
- A10
- Utimaco
- Thales

### Mohamed Nabil

- Cisco

### Nada Amr

- Palo Alto Networks

---

# 8. Run Locally in VS Code

The easiest method is VS Code Live Server.

Install the VS Code extension:

```text
Live Server
```

Then:

1. Open the project folder.
2. Open `index.html`.
3. Right click.
4. Select `Open with Live Server`.

The website should open in your browser.

You can also simply open `index.html` directly in a browser, but Live Server is recommended during development.

---

# 9. Upload to GitHub

Create a new GitHub repository, for example:

```text
centra-partnership-portal
```

Open the project folder in VS Code.

Open the terminal:

```bash
git init
git add .
git commit -m "Initial CENTRA Partnership Portal"
git branch -M main
```

Then connect your GitHub repository:

```bash
git remote add origin https://github.com/YOUR-USERNAME/centra-partnership-portal.git
```

Then:

```bash
git push -u origin main
```

---

# 10. Enable GitHub Pages

In your GitHub repository:

```text
Settings
    ↓
Pages
    ↓
Build and deployment
    ↓
Source: Deploy from a branch
    ↓
Branch: main
    ↓
Folder: /
    ↓
Save
```

GitHub will generate a public website URL similar to:

```text
https://YOUR-USERNAME.github.io/centra-partnership-portal/
```

Send that URL to your manager.

---

# 11. How To Update the Website Later

After changing files:

```bash
git add .
git commit -m "Update partnership portal"
git push
```

GitHub Pages will automatically publish the new version.

---

# 12. Important GitHub Pages Note

This is a static website.

There is no database and no admin login.

The content is stored in:

```text
js/app.js
```

and images are stored in:

```text
assets/
```

Therefore:

- Everyone with the public GitHub Pages URL can view the page.
- Anyone with repository write access can modify the content.
- Do NOT put passwords, API keys, confidential credentials, or sensitive internal information in this project.
- If the partnership information is confidential, use a private/internal hosting solution instead of public GitHub Pages.

---

# 13. Main Customization Areas

### Website colors

Edit the CSS variables at the beginning of:

```text
css/style.css
```

For example:

```css
--accent: #39b9ff;
--accent-bright: #7bd7ff;
```

### Website title

Edit in:

```text
index.html
```

Search for:

```html
<title>
```

### Engineer data

Edit:

```text
js/app.js
```

### Engineer photos

Edit:

```text
assets/engineers/
```

### Vendor logos

Edit:

```text
assets/vendors/
```

### CENTRA logo

Edit:

```text
assets/centra-logo.png
```

---

# 14. Future Upgrade Ideas

The current version is intentionally static and free.

Possible future versions could add:

- Engineer login
- Admin dashboard
- Add/Edit/Delete engineers from a web interface
- Partnership status
- Partnership start date
- Renewal date
- Certification status
- Opportunity pipeline
- Account manager information
- Vendor contact information
- Meeting follow-up
- Documents
- Search
- Advanced filtering
- Export to PDF
- Export to Excel
- Authentication
- Private database
- Internal CENTRA deployment

Those features would require a backend/database or an external service.
