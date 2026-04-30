# SONARIQ MUSIC - Premium Music Label Website

A sophisticated, luxury music label website built with **React 19**, **TypeScript**, **Tailwind CSS 4**, and **shadcn/ui**. Featuring an **Art Deco** design aesthetic with full bilingual support (Arabic/English) and responsive design.

## 🎨 Design Philosophy

**Art Deco Revival with Bold Modern Luxury**

The website embodies premium music label branding through:
- **Color Scheme**: Deep black (#0a0a0a) with vibrant gold (#FFD700) accents
- **Typography**: Montserrat (bold, geometric headlines) paired with Roboto (clean body text)
- **Visual Elements**: Geometric frames, gold dividers, and sophisticated animations
- **Interaction Design**: Smooth transitions and hover effects reflecting the design ethos

## ✨ Features

### Core Sections
- **Hero Section**: Compelling headline with call-to-action buttons and streaming platform links
- **Featured Artists**: Showcase of talented musicians with geometric frames and hover effects
- **Top Videos**: YouTube video integration with responsive embeds and direct playback links
- **Contact Form**: Professional inquiry form with email, WhatsApp, and YouTube channel fields
- **Social Media Integration**: Direct links to Instagram, Facebook, TikTok, and YouTube

### Technical Features
- **Bilingual Support**: Full Arabic/English language toggle with RTL support
- **Responsive Design**: Mobile-first approach with seamless tablet and desktop experiences
- **Custom Components**: Reusable UI components (SocialIcons, geometric frames, luxury buttons)
- **Performance Optimized**: Lazy loading, optimized images, and efficient animations
- **Accessibility**: Semantic HTML, ARIA labels, and keyboard navigation support

## 🚀 Getting Started

### Prerequisites
- Node.js 22.13.0+
- pnpm 10.4.1+

### Installation

```bash
# Clone the repository
git clone https://github.com/sonariqmusic/sonariq-music.git
cd sonariq-music

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

The website will be available at `http://localhost:3000`

## 📁 Project Structure

```
sonariq-music/
├── client/
│   ├── public/              # Static assets (favicon, robots.txt)
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   │   └── SocialIcons.tsx
│   │   ├── hooks/           # Custom React hooks
│   │   │   └── useTranslations.ts
│   │   ├── lib/             # Utility functions and constants
│   │   │   └── constants.ts
│   │   ├── pages/           # Page components
│   │   │   └── Home.tsx
│   │   ├── App.tsx          # Main app component with routing
│   │   ├── main.tsx         # React entry point
│   │   └── index.css        # Global styles and design tokens
│   └── index.html           # HTML template
├── server/                  # Placeholder for backend (not used in static version)
├── package.json
└── README.md
```

## 🎯 Key Components

### Home Page (`client/src/pages/Home.tsx`)
The main landing page featuring all sections with bilingual support and smooth animations.

### SocialIcons Component (`client/src/components/SocialIcons.tsx`)
Reusable component for rendering social media icons with SVG support for Instagram, Facebook, TikTok, and YouTube.

### useTranslations Hook (`client/src/hooks/useTranslations.ts`)
Custom hook providing complete bilingual translations for all text content.

### Constants (`client/src/lib/constants.ts`)
Centralized configuration for artists, videos, social links, and streaming platforms.

## 🎨 Customization

### Colors
Edit the CSS variables in `client/src/index.css`:
```css
:root {
  --primary: #FFD700; /* Gold */
  --background: #0a0a0a; /* Deep Black */
  --foreground: #F5F5F0; /* Cream White */
  /* ... more colors */
}
```

### Typography
Fonts are loaded from Google Fonts in `client/index.html`:
- **Montserrat**: Headlines and bold text
- **Roboto**: Body text and regular content

### Content
Update artist and video data in `client/src/lib/constants.ts`:
```typescript
export const ARTISTS = [
  {
    id: 1,
    name: 'Artist Name',
    nameAr: 'اسم الفنان',
    image: 'image-url',
    url: '#artist-link',
    bio: 'English bio',
    bioAr: 'السيرة الذاتية بالعربية'
  },
  // ... more artists
];
```

## 🌐 Bilingual Support

The website automatically switches between Arabic and English:
- **Language Toggle**: Button in the header to switch languages
- **RTL Support**: Arabic content displays right-to-left automatically
- **Complete Translations**: All text, labels, and placeholders are translated
- **Persistent State**: Language preference can be saved to localStorage (future enhancement)

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🔧 Build & Deployment

### Development
```bash
pnpm dev
```

### Production Build
```bash
pnpm build
```

### Preview Production Build
```bash
pnpm preview
```

## 📦 Dependencies

### Core
- **React 19**: UI framework
- **TypeScript**: Type safety
- **Tailwind CSS 4**: Utility-first styling
- **Vite**: Build tool and dev server

### UI Components
- **shadcn/ui**: High-quality React components
- **Lucide React**: Icon library
- **Radix UI**: Headless UI primitives

### Utilities
- **Wouter**: Client-side routing
- **Framer Motion**: Animation library
- **Zod**: Schema validation

## 🎬 Features Showcase

### Animations
- **Fade-in-up**: Smooth entrance animations for sections
- **Scale-in**: Scaling animations for cards and elements
- **Hover Effects**: Interactive hover states with scale and shadow
- **Parallax**: Subtle background parallax effects

### Interactive Elements
- **Geometric Frames**: Custom octagonal frames for artist photos
- **Luxury Buttons**: Gold-accented buttons with hover effects
- **Form Validation**: Real-time form validation with visual feedback
- **Smooth Scrolling**: Anchor links with smooth scroll behavior

## 🔐 Security & Performance

- **No External Dependencies for Critical Paths**: All critical functionality is self-contained
- **Optimized Images**: Compressed WebP images for faster loading
- **CSS-in-JS**: Minimal runtime overhead with Tailwind CSS
- **Code Splitting**: Automatic code splitting via Vite
- **SEO Ready**: Semantic HTML and meta tags

## 📝 License

© 2024 SONARIQ MUSIC. All rights reserved.

## 🤝 Contributing

For contributions or inquiries, please contact SONARIQ MUSIC through the website contact form.

## 📞 Support

For technical support or feature requests, please reach out through:
- **Email**: contact@sonariqmusic.com
- **WhatsApp**: [WhatsApp Number]
- **Social Media**: Instagram, Facebook, TikTok, YouTube

---

**Built with passion for music** 🎵
