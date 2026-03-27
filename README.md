# Junwen Gu's Personal Website

This is the personal academic homepage for Junwen Gu (顾俊文), hosted on GitHub Pages.

## 🌐 Live Site

Visit the website at: [https://vincentgu2000.github.io](https://vincentgu2000.github.io)

## 📁 Project Structure

```
personal-website/
├── index.html              # Main HTML page
├── css/
│   └── style.css           # Stylesheet
├── js/
│   └── main.js             # JavaScript interactions
├── images/
│   ├── personal_pic.jpg    # Profile photo
│   ├── LetterV.svg         # Favicon
│   ├── logos/              # Institution logos
│   │   ├── cas_logo.png
│   │   ├── ustb_logo.png
│   │   └── placeholder_logo.svg
│   └── papers/             # Publication images
│       ├── tro_fishtail.png
│       ├── tro_fishtail.gif  (optional, for hover effect)
│       ├── usim_u0.png
│       ├── usim_u0.gif        (optional, for hover effect)
│       ├── cbs2024.png
│       ├── cbs2024.gif        (optional, for hover effect)
│       ├── tie_multirobot.png
│       ├── tie_multirobot.gif (optional, for hover effect)
│       ├── iccss2021.png
│       ├── iccss2021.gif      (optional, for hover effect)
│       └── placeholder.svg
├── files/
│   ├── CV_JunwenGu_EN.pdf  # English CV (to be added)
│   └── CV_JunwenGu_CN.pdf  # Chinese CV (to be added)
└── README.md
```

## 🚀 Setup Instructions

### 1. Add Your Files

#### Profile Photo
- Replace `images/personal_pic.jpg` with your profile photo

#### Publication Images
- Add paper thumbnails to `images/papers/` directory
- Recommended size: 230x165 pixels
- For each paper, provide:
  - A static image (`.png` or `.jpg`)
  - An animated GIF for hover effect (optional)

#### CV Files
- Add your English CV: `files/CV_JunwenGu_EN.pdf`
- Add your Chinese CV: `files/CV_JunwenGu_CN.pdf`

### 2. Deploy to GitHub Pages

1. Create a repository named `vincentgu2000.github.io` on GitHub
2. Push this folder's contents to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/VincentGu2000/vincentgu2000.github.io.git
   git push -u origin main
   ```
3. Go to repository Settings > Pages
4. Select "main" branch as the source
5. Your site will be live at `https://vincentgu2000.github.io`

### 3. Update Content

Edit `index.html` to:
- Update personal information
- Add/remove publications
- Update contact links
- Add news section (optional)

## 📝 Customization

### Colors
Main colors are defined in `css/style.css`:
- Link color: `#1772d0` (blue)
- Hover color: `#f09228` (orange)

### Fonts
The website uses Google Fonts' Roboto. To change:
1. Update the Google Fonts link in `index.html`
2. Update the `font-family` in `css/style.css`

### Adding Publications
Copy and modify the publication item template in `index.html`:
```html
<div class="publication-item" onmouseout="paper_stop()" onmouseover="paper_start()">
    <div class="publication-image">
        <div class="image-wrapper">
            <div class="image-hover" id="paper_image">
                <img src="images/papers/paper.gif" alt="Paper" width="230" height="165">
            </div>
            <img src="images/papers/paper.png" alt="Paper" width="230" height="165" class="image-static">
        </div>
    </div>
    <div class="publication-content">
        <a href="PAPER_URL" target="_blank" rel="noopener noreferrer">
            <span class="paper-title">Paper Title</span>
        </a>
        <br>
        <span class="paper-authors">Author List</span>
        <br>
        <span class="paper-venue"><em>Venue</em></span>
        <br>
        <span class="paper-links">
            <a href="PAPER_URL" target="_blank">Paper</a>
        </span>
        <p class="paper-abstract">Brief description...</p>
    </div>
</div>
```

## 🔗 Links

- [Google Scholar](https://scholar.google.com/citations?user=RLmZMP8AAAAJ)
- [LinkedIn](https://www.linkedin.com/in/vincentgu2000/)
- [ResearchGate](https://www.researchgate.net/profile/Junwen-Gu-3)
- [ORCID](https://orcid.org/0000-0002-2185-9346)
- [GitHub](https://github.com/VincentGu2000)

## 📄 License

© 2022-2026 Junwen Gu. All rights reserved.

---

Last updated: March 2026
