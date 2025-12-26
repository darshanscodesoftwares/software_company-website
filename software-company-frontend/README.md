# TechNova Solutions - Software Company Website

A modern, production-ready React website for TechNova Solutions, a software development company. Built with Vite, React Router, and modern CSS.

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173`

## Build for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
software-company-frontend/
├── public/
│   └── vite.svg              # Favicon
├── src/
│   ├── components/           # Reusable components
│   │   ├── Layout.jsx        # Main layout wrapper
│   │   ├── Layout.css
│   │   ├── Navbar.jsx        # Navigation component
│   │   ├── Navbar.css
│   │   ├── Footer.jsx        # Footer component
│   │   └── Footer.css
│   ├── pages/                # Page components
│   │   ├── Home.jsx          # Home page
│   │   ├── Home.css
│   │   ├── About.jsx         # About page
│   │   ├── About.css
│   │   ├── Services.jsx      # Services page
│   │   ├── Services.css
│   │   ├── Careers.jsx       # Careers page
│   │   ├── Careers.css
│   │   ├── Contact.jsx       # Contact page with form
│   │   ├── Contact.css
│   │   ├── NotFound.jsx      # 404 page
│   │   └── NotFound.css
│   ├── styles/
│   │   └── index.css         # Global styles & CSS variables
│   ├── App.jsx               # Main app with routing
│   └── main.jsx              # Entry point
├── index.html                # HTML template
├── package.json              # Dependencies & scripts
├── vite.config.js            # Vite configuration
└── README.md                 # This file
```

## Pages & Routes

| Route       | Page         | Description                           |
|-------------|--------------|---------------------------------------|
| `/`         | Home         | Hero, services preview, why us, CTA   |
| `/about`    | About        | Company story, mission, team          |
| `/services` | Services     | Full services list, process           |
| `/careers`  | Careers      | Job listings, perks, application      |
| `/contact`  | Contact      | Contact form, company info            |
| `*`         | 404          | Not found page with navigation        |

## Features

- **Responsive Design**: Mobile-first approach, works on all screen sizes
- **Modern UI**: Clean SaaS-style design with smooth animations
- **React Router**: Client-side routing with nested layouts
- **Form Validation**: Client-side validation on contact form
- **CSS Variables**: Consistent theming with CSS custom properties
- **Accessible**: Semantic HTML and ARIA labels
- **No Backend Required**: Pure frontend application

## Tech Stack

- **React 18** - UI library
- **Vite 5** - Build tool and dev server
- **React Router DOM 6** - Client-side routing
- **Modern CSS** - Custom properties, flexbox, grid

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License
