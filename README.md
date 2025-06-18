# Abhishek Jha - Personal Portfolio Website

A modern, responsive personal portfolio website built with React.js, Tailwind CSS, and Framer Motion. This portfolio showcases Abhishek Jha's skills, projects, and professional experience in an attractive and interactive way.

## 🚀 Features

### ✨ Modern Design
- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Dark Mode Toggle**: Switch between light and dark themes
- **Smooth Animations**: Beautiful animations using Framer Motion
- **Modern UI**: Clean, professional design with gradient accents

### 📱 Sections
1. **Hero Section**: Eye-catching introduction with animated elements
2. **About Me**: Personal information, education, and key strengths
3. **Skills**: Technical and soft skills with animated progress bars
4. **Projects**: Showcase of 6 AI-powered Streamlit applications
5. **Resume**: Downloadable PDF resume with key highlights
6. **Contact**: Contact form and social media links

### 🛠️ Technical Features
- **React.js**: Modern React with hooks and functional components
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Framer Motion**: Smooth animations and transitions
- **React Icons**: Beautiful icon library
- **Intersection Observer**: Scroll-triggered animations
- **Local Storage**: Dark mode preference persistence

## 🎯 Projects Showcased

1. **Review Analysis App** - Sentiment analysis and pros/cons extraction
2. **Detailed Summary Generator** - Comprehensive topic reports with summaries
3. **5 Facts Generator** - Interesting facts with structured output parsing
4. **Learn and Test Yourself** - Automatic notes and quiz generation
5. **Post Generator** - Social media content creation
6. **Joke Generator** - AI-powered humor generation

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd abhishek-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the website

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.js       # Navigation bar with dark mode toggle
│   ├── Hero.js         # Hero section with animations
│   ├── About.js        # About section with personal info
│   ├── Skills.js       # Skills section with progress bars
│   ├── Projects.js     # Projects showcase
│   ├── Resume.js       # Resume download and highlights
│   ├── Contact.js      # Contact form and info
│   └── Footer.js       # Footer with social links
├── App.js              # Main app component
├── index.js            # React entry point
└── index.css           # Global styles and Tailwind imports

public/
├── index.html          # HTML template
└── resume.pdf          # Resume file for download
```

## 🎨 Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:
- Primary colors: Blue gradient theme
- Secondary colors: Gray scale for dark mode
- Custom gradient text effects

### Content
- Update personal information in respective component files
- Modify project details in `Projects.js`
- Change contact information in `Contact.js`
- Update skills and progress levels in `Skills.js`

### Styling
- All styling is done with Tailwind CSS classes
- Custom animations in `tailwind.config.js`
- Component-specific styles in `index.css`

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌙 Dark Mode

- Automatic detection of system preference
- Manual toggle in navigation bar
- Persistent preference using localStorage
- Smooth transitions between themes

## 🚀 Deployment

### Netlify
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `build`

### Vercel
1. Import your GitHub repository
2. Vercel will auto-detect React settings
3. Deploy with default settings

### GitHub Pages
1. Add `"homepage": "https://username.github.io/repo-name"` to package.json
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Add deploy scripts to package.json
4. Run `npm run deploy`

## 🛠️ Technologies Used

- **Frontend**: React.js 18
- **Styling**: Tailwind CSS 3
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Build Tool**: Create React App
- **Package Manager**: npm

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- **Email**: abhijha8287@gmail.com
- **LinkedIn**: [Abhishek Jha](https://linkedin.com/in/abhishekjha15)
- **GitHub**: [abhijha8287](https://github.com/abhijha8287)

---

Made with ❤️ by Abhishek Jha 