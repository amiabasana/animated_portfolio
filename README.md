# 🎨 Animated Portfolio

A modern, responsive portfolio website built with React.js, featuring smooth animations powered by GSAP and styled with Tailwind CSS. This project showcases a professional developer
portfolio with interactive elements and elegant design.

<!--## 🚀 Live Demo

[View Live Portfolio](https://your-portfolio-url.com) <!-- Replace with your actual deployed URL -->

<!--## 📸 Screenshots

![Portfolio Screenshot](./assets/screenshot-main.png)
![Mobile View](./assets/screenshot-mobile.png)-->

## ✨ Features

- **Responsive Design**: Optimized for all devices - desktop, tablet, and mobile
- **Smooth Animations**: GSAP-powered animations for enhanced user experience
- **Modern UI**: Clean, professional design with Tailwind CSS
- **React Router**: Seamless navigation between sections
- **Performance Optimized**: Fast loading times and smooth scrolling
- **Cross-browser Compatible**: Works across all modern browsers
- **SEO Friendly**: Optimized for search engines
- **Accessibility**: WCAG compliant design

## 🛠️ Technologies Used

- **Frontend Framework**: React.js
- **Styling**: Tailwind CSS
- **Animations**: GSAP (GreenSock Animation Platform)
- **Routing**: React Router DOM
- **State Management**: React Hooks
- **Build Tool**: Vite/Create React App
- **Package Manager**: npm/yarn

## 🔧 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/amiabasana/animated_portfolio.git
   cd animated_portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the portfolio

## 📁 Project Structure

```
animated_portfolio/
├── public/
│   ├── index.html
│   └── assets/
├── src/
│   ├── components/
│   │   ├── Header/
│   │   ├── Hero/
│   │   ├── About/
│   │   ├── Projects/
│   │   ├── Skills/
│   │   ├── Contact/
│   │   └── Footer/
│   ├── pages/
│   ├── hooks/
│   ├── utils/
│   ├── styles/
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

## 🎨 Customization

### Updating Personal Information
1. Edit the content in `src/data/personal.js`
2. Replace placeholder images in `public/assets/`
3. Update social media links in the contact section

### Styling
- Modify Tailwind classes in component files
- Update the color scheme in `tailwind.config.js`
- Add custom CSS in `src/styles/`

### Animations
- GSAP animations are configured in `src/hooks/useGSAP.js`
- Customize animation timelines in individual components
- Adjust scroll trigger settings for different effects

## 🚀 Deployment

### Deploy to Vercel (Recommended)
1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```
2. Deploy:
   ```bash
   vercel
   ```

### Deploy to Netlify
1. Build the project:
   ```bash
   npm run build
   ```
2. Drag and drop the `build` folder to [Netlify](https://netlify.com)

### Deploy to GitHub Pages
1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```
2. Add to `package.json`:
   ```json
   "homepage": "https://amiabasana.github.io/animated_portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Deploy:
   ```bash
   npm run deploy
   ```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🙏 Acknowledgments

- [GSAP](https://greensock.com/gsap/) for amazing animation library
- [Tailwind CSS](https://tailwindcss.com/) for utility-first CSS framework
- [React](https://reactjs.org/) for the powerful JavaScript library
- [Unsplash](https://unsplash.com/) for beautiful stock photos
- [Font Awesome](https://fontawesome.com/) for icons
  
---

Built with ❤️ by [Amisha Abasana](https://github.com/amiabasana)
