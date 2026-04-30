# SONARIQ MUSIC - Integration & Deployment Guide

Complete guide for setting up and deploying the SONARIQ MUSIC website with all features.

## 🎯 Quick Start

### 1. Install Dependencies
```bash
cd sonariq-music
pnpm install
```

### 2. Set Up EmailJS
Follow the [EmailJS Setup Guide](./EMAILJS_SETUP.md) to:
- Create an EmailJS account
- Connect your email service
- Create an email template
- Get your API credentials

### 3. Configure EmailJS
Update `client/src/hooks/useEmailJS.ts` with your credentials:
```typescript
const EMAILJS_SERVICE_ID = 'service_YOUR_ID';
const EMAILJS_TEMPLATE_ID = 'template_YOUR_ID';
const EMAILJS_PUBLIC_KEY = 'pk_YOUR_KEY';
```

### 4. Start Development Server
```bash
pnpm dev
```

Visit `http://localhost:3000` to see your website.

## 📱 Features Overview

### Contact Form with EmailJS Integration
- **Real Email Sending**: Emails sent directly to your inbox
- **Form Validation**: Client-side validation with error messages
- **Loading States**: Visual feedback during submission
- **Success Notifications**: Animated success/error messages

### Bilingual Support (Arabic/English)
- **Language Toggle**: Switch between Arabic and English
- **RTL Support**: Automatic right-to-left layout for Arabic
- **Complete Translations**: All text is fully translated

### Art Deco Design
- **Premium Aesthetics**: Gold and black luxury theme
- **Smooth Animations**: Fade-in, scale-in, and hover effects
- **Responsive Layout**: Works perfectly on all devices
- **High-Quality Images**: Generated backgrounds and assets

## 🔧 Customization

### Update Artist Information
Edit `client/src/lib/constants.ts`:
```typescript
export const ARTISTS = [
  {
    id: 1,
    name: 'Artist Name',
    nameAr: 'اسم الفنان',
    image: 'image-url',
    url: '#artist-link',
    bio: 'English bio',
    bioAr: 'السيرة الذاتية'
  },
  // Add more artists
];
```

### Update Video Links
Edit `client/src/lib/constants.ts`:
```typescript
export const VIDEOS = [
  {
    id: 1,
    title: 'Video Title',
    titleAr: 'عنوان الفيديو',
    youtubeId: 'YOUTUBE_VIDEO_ID',
    artist: 'Artist Name',
    artistAr: 'اسم الفنان'
  },
  // Add more videos
];
```

### Update Social Media Links
Edit `client/src/lib/constants.ts`:
```typescript
export const SOCIAL_LINKS = [
  {
    name: 'Instagram',
    icon: 'instagram',
    url: 'https://instagram.com/your-handle',
    ariaLabel: 'Follow on Instagram'
  },
  // Update other social links
];
```

### Change Colors
Edit `client/src/index.css`:
```css
:root {
  --primary: #FFD700; /* Gold */
  --background: #0a0a0a; /* Deep Black */
  --foreground: #F5F5F0; /* Cream White */
  /* Update other colors */
}
```

## 📧 Contact Form Setup

### Email Template Variables
Your EmailJS template should include:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{message}}` - Main message
- `{{whatsapp}}` - WhatsApp number
- `{{youtube_channel}}` - YouTube channel URL

### Testing the Form
1. Fill in the contact form
2. Click "Send Message"
3. Check your email for the submission
4. Verify the notification appears

## 🚀 Deployment

### Deploy to Manus
1. Click the "Publish" button in the Manus UI
2. Choose your domain settings
3. Your website will be live immediately

### Deploy to GitHub Pages
1. Push your changes to GitHub
2. Enable GitHub Pages in repository settings
3. Your site will be available at `username.github.io/sonariq-music`

### Deploy to Custom Domain
1. Purchase a domain (Namecheap, GoDaddy, etc.)
2. Update DNS records to point to your hosting
3. Configure SSL certificate
4. Deploy your built files

## 🔒 Security Considerations

- **EmailJS Public Key**: Safe to expose in frontend code
- **Never expose**: Private keys, service secrets, or API tokens
- **Form Validation**: Always validate on both client and server
- **Rate Limiting**: Consider adding rate limiting to prevent spam
- **CORS**: Configure CORS headers if needed

## 📊 Performance Optimization

### Image Optimization
- All images are compressed WebP format
- Lazy loading enabled by default
- Responsive images for different screen sizes

### Code Splitting
- Automatic via Vite
- Each route loads only necessary code
- Smooth loading experience

### Caching
- Static assets cached by browser
- Service worker for offline support (optional)

## 🐛 Troubleshooting

### Contact Form Not Sending
1. Check EmailJS credentials in `useEmailJS.ts`
2. Verify email service is connected in EmailJS dashboard
3. Check browser console for errors
4. Ensure email template exists

### Styling Issues
1. Clear browser cache
2. Rebuild: `pnpm build`
3. Check Tailwind CSS configuration
4. Verify custom CSS in `index.css`

### Bilingual Display Issues
1. Check language state in component
2. Verify translations in `useTranslations.ts`
3. Test RTL layout in Arabic mode
4. Check browser console for warnings

## 📚 File Structure

```
sonariq-music/
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── SocialIcons.tsx
│   │   │   └── SuccessNotification.tsx
│   │   ├── hooks/
│   │   │   ├── useTranslations.ts
│   │   │   └── useEmailJS.ts
│   │   ├── lib/
│   │   │   └── constants.ts
│   │   ├── pages/
│   │   │   └── Home.tsx
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   ├── index.html
│   └── public/
├── EMAILJS_SETUP.md
├── INTEGRATION_GUIDE.md
├── README.md
└── package.json
```

## 🎓 Learning Resources

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [EmailJS Docs](https://www.emailjs.com/docs/)
- [Vite Guide](https://vitejs.dev/guide/)

## 🤝 Support

For issues or questions:
1. Check the troubleshooting section
2. Review the relevant documentation
3. Check browser console for error messages
4. Contact SONARIQ MUSIC support

## 📝 Changelog

### Version 1.0.0
- Initial release
- Art Deco design
- Bilingual support (Arabic/English)
- EmailJS integration
- Contact form with validation
- Social media integration
- Responsive design
- High-quality animations

---

**Last Updated**: April 30, 2026
**Version**: 1.0.0
