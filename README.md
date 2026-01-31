# Hana's Portfolio Website

A clean and professional portfolio website built with HTML, CSS, and JavaScript.

## Color Palette

- **Stormy Teal**: `#276f6c` - Used for dark sections and footer
- **Sunflower Gold**: `#ebaf34` - Used for accents and borders
- **Jet Black**: `#142c3a` - Used for text and dark elements
- **White**: `#ffffff` - Used for backgrounds and light elements
- **Porcelain**: `#f8f7f1` - Used for main background

## Fonts Used

- **Homemade Apple** - Logo
- **Cherry Cream Soda** - Hero section heading
- **Cantora One** - Navigation links
- **Libre Baskerville** - Section headings
- **Inter** - Body text

## Files Structure

```
portfolio/
├── index.html          # Main HTML file
├── style.css           # Stylesheet
├── script.js           # JavaScript for interactions
└── README.md           # This file
```

## Deployment Instructions

### Method 1: Local Development (VS Code)

1. **Open the folder in VS Code**
   - Open VS Code
   - File → Open Folder → Select the `public` folder

2. **Install Live Server extension** (if not already installed)
   - Go to Extensions (Ctrl+Shift+X or Cmd+Shift+X)
   - Search for "Live Server"
   - Install it

3. **Launch the website**
   - Right-click on `index.html`
   - Select "Open with Live Server"
   - Your browser will open with the website

### Method 2: GitHub Pages

1. **Create a GitHub repository**
   - Go to https://github.com/new
   - Name your repository (e.g., `portfolio`)
   - Initialize without README

2. **Upload files**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: main → /root → Save
   - Your site will be live at `https://yourusername.github.io/portfolio/`

### Method 3: Netlify (Easiest)

1. **Go to Netlify**
   - Visit https://www.netlify.com/
   - Sign up or log in

2. **Deploy**
   - Drag and drop the `public` folder to Netlify
   - Your site will be live instantly with a unique URL
   - You can customize the domain name in settings

### Method 4: Vercel

1. **Go to Vercel**
   - Visit https://vercel.com/
   - Sign up or log in

2. **Import Project**
   - Click "Add New" → "Project"
   - Upload the folder or connect your GitHub repository
   - Deploy

## Customization Instructions

### Replace Profile Image
In `index.html`, find:
```html
<img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop" alt="Profile">
```
Replace the `src` with your own image URL or local path like `src="profile.jpg"`

### Update Email
In both `index.html` and `script.js`, find:
```
hanasarof2014@gmail.com
```
Replace with your email address

### Update Social Media Links
In `index.html`, find:
```html
<a href="https://github.com/yourusername" target="_blank">
<a href="https://linkedin.com/in/yourusername" target="_blank">
```
Replace `yourusername` with your actual usernames

### Update Project Links
In `index.html`, find the project sections and update:
```html
<a href="https://github.com/yourusername/todo-app" target="_blank">
<a href="https://github.com/yourusername/portfolio" target="_blank">
```

### Update About Me Text
In `index.html`, find the About section and edit the paragraph

### Add More Projects
Copy the project card structure:
```html
<div class="project-card">
    <div class="project-content">
        <div class="project-image">
            <img src="your-image-url" alt="Project Name">
        </div>
        <div class="project-info">
            <a href="your-project-link" target="_blank">
                <h3 class="project-title">Your Project Title</h3>
            </a>
            <p class="project-desc">Project Description</p>
        </div>
    </div>
</div>
```

## Features

✅ Responsive design (mobile & desktop)
✅ Smooth scrolling navigation
✅ Click to copy email functionality
✅ Working social media links
✅ Project links to GitHub
✅ Clean and professional design
✅ Custom color palette
✅ Google Fonts integration

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Opera

## License

© 2025 Hana. All rights reserved.

## Support

For any issues or questions, feel free to reach out!
