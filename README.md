# Skill Fynd - Professional Skill Acquisition Platform

Skill Fynd is a modern skill acquisition platform connecting exceptional candidates with innovative companies. Built with Next.js and React, this application features a sleek, responsive design with smooth animations and optimized performance.

![Skill Fynd Homepage](screenshots/homepage.png)
<!-- Add your screenshot here -->

## Features

- **Modern UI/UX Design**: Clean and professional interface with smooth animations
- **Responsive Layout**: Fully responsive design that works seamlessly across all devices
- **Performance Optimized**: Minimized render blocking and optimized asset loading
- **Maintainable Code Structure**: Well-organized component hierarchy and folder structure
- **Reusable Components**: Library of custom UI components for consistent design
- **SVG Optimization**: Dedicated SVG component system for better performance and maintainability

## Technology Stack

- **Frontend Framework**: Next.js
- **UI Library**: React
- **Styling**: Tailwind CSS
- **Animation**: CSS transitions and custom animation hooks
- **Icons**: Custom SVG components and react-icons
- **Development**: TypeScript for type safety

## Screenshots

### Homepage
![Homepage](screenshots/homepage.png)

### Services
![Services Section](screenshots/services.png)
<!-- Add your screenshot here -->

### About Us
![About Section](screenshots/about.png)
<!-- Add your screenshot here -->

### Testimonials
![Testimonials Section](screenshots/testimonials.png)
<!-- Add your screenshot here -->

### Contact
![Contact Section](screenshots/contact.png)
<!-- Add your screenshot here -->

## Project Structure

```
skill-fynd-app/
├── public/           # Static assets and images
├── src/              # Source code
│   ├── assets/       # Project assets
│   │   └── svg/      # SVG components
│   ├── components/   # React components
│   │   ├── home/     # Homepage section components
│   │   ├── layout/   # Layout components (Header, Footer)
│   │   └── ui/       # Reusable UI components
│   ├── data/         # Mock data and content
│   │   └── mock/     # Mock data files
│   ├── pages/        # Next.js pages
│   ├── styles/       # Global styles
│   └── utils/        # Utility functions
└── tailwind.config.js # Tailwind CSS configuration
```

## Getting Started

### Prerequisites

- Node.js 14.0 or later
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/CiprianCodes/skill-fynd.git
cd skill-fynd-app
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

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Key Code Features

### SVG Components

We've implemented a dedicated SVG component system for better performance and maintainability:

```tsx
// Example of an SVG component
import React from 'react';

interface LogoIconProps {
  className?: string;
}

const LogoIcon: React.FC<LogoIconProps> = ({ className = "w-6 h-6" }) => {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      {/* SVG paths */}
    </svg>
  );
};

export default LogoIcon;
```

### Smooth Scrolling

We use a custom SmoothScroll component that handles smooth scrolling with a modern React approach:

```tsx
// SmoothScroll component
const SmoothScroll: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Scroll logic here
  };

  return <div onClick={handleClick}>{children}</div>;
};
```

## Deployment

The project can be easily deployed on Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/CiprianCodes/skill-fynd)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [Next.js](https://nextjs.org)
- [React](https://reactjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [React Icons](https://react-icons.github.io/react-icons/)
