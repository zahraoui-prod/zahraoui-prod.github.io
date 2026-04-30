/**
 * useTranslations Hook
 * Provides bilingual support for SONARIQ MUSIC website
 */

export type Language = 'en' | 'ar';

export const translations = {
  en: {
    brand: 'SONARIQ MUSIC',
    tagline: 'Premium Music Label',
    hero: 'Discover Exceptional Music Talent',
    heroSub: 'Your gateway to premium music production and artist collaboration',
    streamingPlatforms: 'Available on Spotify, Apple Music, YouTube Music & More',
    
    // Artists Section
    artistsSection: 'Featured Artists',
    artistsDesc: 'Meet our talented roster of musicians and producers',
    
    // Videos Section
    videosSection: 'Top Videos',
    videosDesc: 'Watch our latest music videos and performances',
    
    // Contact Section
    contactSection: 'Get In Touch',
    contactDesc: 'Connect with SONARIQ MUSIC for collaborations and inquiries',
    
    // Form Labels
    emailLabel: 'Email Address',
    emailPlaceholder: 'your@email.com',
    whatsappLabel: 'WhatsApp Number',
    whatsappPlaceholder: '+1234567890',
    youtubeLabel: 'YouTube Channel URL',
    youtubePlaceholder: 'https://youtube.com/...',
    messageLabel: 'Message',
    messagePlaceholder: 'Tell us about your project...',
    sendButton: 'Send Message',
    
    // Social & Footer
    followUs: 'Follow Us',
    copyright: '© 2024 SONARIQ MUSIC. All rights reserved.',
    craftedWith: 'Crafted with passion for music',
    
    // Buttons
    exploreArtists: 'Explore Artists',
    listenNow: 'Listen Now',
    
    // Messages
    messageSent: 'Message sent successfully!',
    messageError: 'Failed to send message. Please try again.',
  },
  ar: {
    brand: 'سونارك ميوزك',
    tagline: 'دار موسيقى فاخرة',
    hero: 'اكتشف مواهب موسيقية استثنائية',
    heroSub: 'بوابتك إلى إنتاج موسيقي فاخر والتعاون مع الفنانين',
    streamingPlatforms: 'متاح على Spotify و Apple Music و YouTube Music والمزيد',
    
    // Artists Section
    artistsSection: 'الفنانون المميزون',
    artistsDesc: 'تعرف على فريقنا الموهوب من الموسيقيين والمنتجين',
    
    // Videos Section
    videosSection: 'أفضل الفيديوهات',
    videosDesc: 'شاهد أحدث مقاطعنا الموسيقية والعروض',
    
    // Contact Section
    contactSection: 'تواصل معنا',
    contactDesc: 'تواصل مع سونارك ميوزك للتعاون والاستفسارات',
    
    // Form Labels
    emailLabel: 'عنوان البريد الإلكتروني',
    emailPlaceholder: 'your@email.com',
    whatsappLabel: 'رقم WhatsApp',
    whatsappPlaceholder: '+1234567890',
    youtubeLabel: 'رابط قناة YouTube',
    youtubePlaceholder: 'https://youtube.com/...',
    messageLabel: 'الرسالة',
    messagePlaceholder: 'أخبرنا عن مشروعك...',
    sendButton: 'إرسال الرسالة',
    
    // Social & Footer
    followUs: 'تابعنا',
    copyright: '© 2024 سونارك ميوزك. جميع الحقوق محفوظة.',
    craftedWith: 'صُنع بشغف للموسيقى',
    
    // Buttons
    exploreArtists: 'استكشف الفنانين',
    listenNow: 'استمع الآن',
    
    // Messages
    messageSent: 'تم إرسال الرسالة بنجاح!',
    messageError: 'فشل إرسال الرسالة. يرجى المحاولة مرة أخرى.',
  }
} as const;

export function useTranslations(language: Language) {
  return translations[language];
}

export function getTranslation(language: Language, key: keyof typeof translations.en) {
  return translations[language][key] || translations.en[key];
}
