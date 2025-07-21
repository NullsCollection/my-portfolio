# Modern Portfolio Website

A professional, interactive portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern UI/UX**: Clean, responsive design optimized for all devices
- **Interactive Components**: Smooth animations and transitions using Framer Motion
- **Dynamic Project Gallery**: Showcase projects with detailed modal views
- **Optimized Images**: Efficient image loading system with automatic project folder mapping
- **Responsive Navigation**: Mobile-friendly navigation with smooth scrolling
- **Accessibility**: WCAG compliant with keyboard navigation support
- **Performance Optimized**: Fast loading times with Next.js optimizations

## 🛠️ Technologies

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS 4, CSS Modules
- **Animations**: Framer Motion
- **Icons**: Iconify, Lucide React
- **Build Tools**: TurboRepo

## 📂 Project Structure

```
my-portfolio/
├── public/              # Static assets
│   └── assets/          # Images and other media
│       └── Projects/    # Project-specific images
├── src/
│   ├── app/             # Next.js app router
│   ├── assets/          # Asset utilities
│   ├── components/      # React components
│   │   ├── AboutMe/     # About section components
│   │   ├── Contact/     # Contact form components
│   │   ├── FAQ/         # FAQ section components
│   │   ├── Projects/    # Project gallery components
│   │   ├── Services/    # Services section components
│   │   └── ui/          # Reusable UI components
│   ├── hooks/           # Custom React hooks
│   │   └── ScrollAnimation/  # Animation hooks
│   ├── lib/             # Utility libraries
│   ├── types/           # TypeScript type definitions
│   └── utils/           # Utility functions
└── ...config files
```

## 🔧 Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/my-portfolio.git
   cd my-portfolio
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📝 Key Components

### Project Gallery

The portfolio features a dynamic project gallery with:

- Interactive project cards
- Full-screen modal with image carousel
- Project navigation with keyboard support
- Automatic image loading from project folders

### Animation System

The website uses a unified animation system:

- `useScrollAnimation` hook for scroll-triggered animations
- Smooth page transitions
- Interactive UI elements with hover/focus states

### Responsive Design

- Mobile-first approach
- Breakpoint-specific layouts
- Touch-friendly interactions

## 🚀 Deployment

The portfolio is optimized for deployment on Vercel:

```bash
npm run build
# or
yarn build
# or
pnpm build
```

## 🔄 Recent Improvements

- Consolidated animation hooks into a unified `useScrollAnimation` system
- Fixed React hydration issues in project modal components
- Enhanced project image loading with automatic folder mapping
- Improved modal navigation with keyboard support
- Added responsive design optimizations

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👤 Contact

For any inquiries or feedback, please reach out through the contact form on the website or via email at raffy7792@gmail.com.
