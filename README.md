# Daniot Mihrete Portfolio

A modern, minimalistic personal portfolio website built with React and Tailwind CSS. This portfolio showcases creative development work with a warm, passionate design that balances logic and creativity.

## ✨ Features

### 🎨 Design

- **Modern & Minimalistic** - Clean, elegant design with deep navy backgrounds
- **Warm Color Palette** - Crimson red, burnt orange, soft rose, and deep purple accents
- **Responsive Design** - Fully responsive across all devices
- **Smooth Animations** - Subtle floating animations and hover effects
- **Custom Typography** - Inter and Poppins fonts for optimal readability

### 🏗️ Architecture

- **Modular Components** - Organized component structure for easy maintenance
- **React Router** - Client-side routing for seamless navigation
- **Tailwind CSS** - Utility-first CSS framework for rapid development
- **Vite** - Fast build tool and development server

### 📱 Pages

- **Home** - Landing page with introduction and call-to-action buttons
- **Projects** - Portfolio showcase with project cards and technologies
- **Contact** - Contact form and social media links

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/Daniot_Mihrete_Portfolio.git
   cd Daniot_Mihrete_Portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the portfolio

## 📁 Project Structure

```bash
src/
├── components/          # Reusable components
│   ├── Header.jsx      # Navigation header
│   └── Header.css      # Header styles
├── pages/              # Page components
│   ├── Home/           # Home page
│   │   ├── Home.jsx
│   │   └── Home.css
│   ├── Projects/       # Projects page
│   │   ├── Projects.jsx
│   │   └── Projects.css
│   └── Contact/        # Contact page
│       ├── Contact.jsx
│       └── Contact.css
├── App.jsx             # Main app component
├── App.css             # Global styles
├── index.css           # Base styles
└── main.jsx           # Entry point
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Customization

### Colors

The portfolio uses a custom color palette defined in Tailwind CSS:

- **Primary**: Deep navy (`slate-900`, `blue-900`)
- **Accents**: Crimson red (`rose-400`, `rose-500`), Purple (`purple-500`, `purple-600`), Orange (`orange-400`, `orange-500`)

### Typography

- **Headings**: Poppins font family
- **Body Text**: Inter font family

### Adding New Pages

1. Create a new folder in `src/pages/`
2. Add your component and CSS files
3. Import and add the route in `App.jsx`

### Modifying Projects

Edit the `projects` array in `src/pages/Projects/Projects.jsx` to add or modify your projects.

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Technologies Used

- **React 19** - Frontend framework
- **React Router DOM** - Client-side routing
- **Tailwind CSS 4** - Utility-first CSS framework
- **Vite** - Build tool and development server
- **ESLint** - Code linting

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify

1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add deploy script to package.json
3. Run: `npm run deploy`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Contact

- **Email**: [daniotmw10@gmail.com]
- **GitHub**: [@Bondedincome](https://github.com/Bondedincome)
- **LinkedIn**: [Daniot Woldetinsae](https://www.linkedin.com/in/daniot-woldetinsae-339286240/)

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends
- Icons from Heroicons
- Fonts from Google Fonts (Inter & Poppins)

---

<!-- **Built with ❤️ by Daniot Mihrete** -->

<!-- Minor update to preserve GitHub commit streak -->