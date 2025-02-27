# Skill Fynd - Professional Landing Page Template

![Skill Fynd Banner](screenshots/homepage.png)

## 🚀 High-Performance Landing Page for Modern Businesses

Skill Fynd is a cutting-edge, fully responsive landing page template designed for recruitment, talent acquisition, and professional services businesses. Built with scalability and performance in mind, this template features a sleek, professional design that can be easily customized to match your brand.

🔗 **Live Demo:** [https://skill-fynd-ximu.vercel.app/](https://skill-fynd-ximu.vercel.app/)

## ✨ Key Features

- **Optimized for Conversion**: Strategically designed sections guide visitors toward calls-to-action
- **Mobile-First Design**: Seamlessly responsive from 320px mobile screens to large desktop displays
- **Performance Optimized**: Lighthouse score 90+ with minimal JavaScript and optimized assets
- **Accessibility Focused**: WCAG 2.1 compliant with semantic HTML and proper contrast ratios
- **Modern UI Effects**: Subtle animations and micro-interactions enhance user experience
- **SEO Ready**: Structured data and meta tag support for improved search visibility
- **Customizable Components**: Modular design for easy customization and extension

## 🛠️ Technical Highlights

- **Next.js Framework**: Leveraging React with server-side rendering capabilities
- **TypeScript Implementation**: Type-safe codebase for robust development
- **TailwindCSS**: Utility-first CSS framework for rapid UI development
- **Responsive Typography**: Dynamic text sizing based on viewport
- **SVG Asset System**: Optimized vector graphics for crisp visuals at any resolution
- **CSS Animations**: Performant transitions and animations with minimal JavaScript
- **Optimized Asset Loading**: Strategic loading of resources for improved web vitals
- **Static Site Generation (SSG)**: Pre-rendered pages for lightning-fast loading times
- **Incremental Static Regeneration (ISR)**: Dynamic content that stays fresh without sacrificing performance

## 🚀 Performance Optimizations

- **Server-Side Rendering**: Faster initial page loads and improved SEO
- **Image Optimization**: Automatic WebP/AVIF format conversion and responsive sizing
- **CSS Optimization**: Minimal JavaScript for animations, leveraging CSS capabilities
- **Metadata Management**: Comprehensive SEO meta tags and structured data
- **Automated Sitemap Generation**: Dynamic sitemap.xml for improved search engine indexing
- **Web Vitals Focus**: Optimized for Core Web Vitals metrics
- **No Direct DOM Manipulation**: Clean React state management for better performance
- **Preconnect Optimization**: Faster resource loading with DNS preconnect

## 📱 Responsive Design

The template is meticulously tested across a wide range of devices:

- Mobile S (320px)
- Mobile M (375px)
- Mobile L (425px)
- Tablet (768px)
- Laptop (1024px)
- Desktop (1440px+)

## 📱 Mobile Menu

The template includes a specially optimized mobile navigation menu that:

- Uses minimal JavaScript for smooth animations
- Preserves accessibility with proper ARIA attributes
- Handles gestures for intuitive navigation
- Adapts to various screen sizes automatically

## 📈 Performance Optimization

- SVG optimization for crisp icons at any resolution
- Code splitting for reduced initial load time
- Strategic use of CSS instead of JavaScript for animations
- Responsive image loading with next/image

## 📂 Project Structure

```
skill-fynd-template/
├── public/           # Static assets and images
├── src/              # Source code
│   ├── assets/       # Project assets
│   │   └── svg/      # SVG components
│   ├── components/   # React components
│   │   ├── home/     # Homepage section components
│   │   ├── layout/   # Layout components (Header, Footer)
│   │   ├── mobile/   # Mobile-specific components
│   │   └── ui/       # Reusable UI components
│   ├── data/         # Mock data and content
│   │   └── mock/     # Mock data files
│   ├── pages/        # Next.js pages
│   ├── styles/       # Global styles
│   └── utils/        # Utility functions
└── package.json      # Project dependencies
```

## 🚀 Getting Started

### Prerequisites

- Node.js 14.0 or later
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/CiprianCodes/skill-fynd.git
cd skill-fynd
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) to see your running application

### Building for Production

To create an optimized production build with server-side rendering:

```bash
npm run build
# or
yarn build
```

This process will:
- Pre-render pages using Static Site Generation (SSG)
- Apply image optimization
- Minimize CSS and JavaScript
- Generate the sitemap and other SEO assets

### Deployment

The application is optimized for deployment on Vercel:

```bash
npm install -g vercel
vercel
```

For other hosting platforms, use the standard Next.js deployment:

```bash
# First build the application
npm run build

# Then start the production server
npm start
```

## 🎨 Customization Guide

### Changing Colors

The template uses a consistent color system based on Tailwind CSS. To change the primary color scheme:

1. Locate the primary color references (primarily purple-600 and purple-700)
2. Replace with your brand colors
3. For more extensive customization, modify the Tailwind configuration

### Content Replacement

1. Navigate to `src/data/mock/` to find content data files
2. Replace the placeholder content with your actual business information
3. For testimonials, update `src/data/mock/testimonials.ts`

### Adding Sections

The modular component structure makes it easy to add new sections:

1. Create a new component in `src/components/home/`
2. Import and add it to the page layout in `src/pages/index.tsx`

## 📸 Screenshots

### Homepage
![Homepage](screenshots/homepage.png)

### About Section
![About Section](screenshots/about.png)

### Services Section
![Services Section](screenshots/services.png)

### Testimonials Section
![Testimonials Section](screenshots/testimonials.png)

### Contact Section
![Contact Section](screenshots/contact.png)

## 📱 Mobile Views
![Mobile Navigation](screenshots/mobile-nav.png)
![Mobile Homepage](screenshots/mobile-home.png)

## 📈 Performance Optimization

- SVG optimization for crisp icons at any resolution
- Code splitting for reduced initial load time
- Strategic use of CSS instead of JavaScript for animations
- Responsive image loading with next/image

## 📄 License

This template is available for commercial and personal use.

## 📞 Support

For questions or customization requests:

- GitHub Repository: [https://github.com/CiprianCodes/skill-fynd](https://github.com/CiprianCodes/skill-fynd)
- Live Demo: [https://skill-fynd-ximu.vercel.app/](https://skill-fynd-ximu.vercel.app/)

---

© 2025 CiprianCodes. All rights reserved.
