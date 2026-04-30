/**
 * SONARIQ MUSIC - Constants and Configuration
 * Art Deco Luxury Theme
 */

export const COLORS = {
  primary: '#FFD700', // Vibrant Gold
  primaryForeground: '#0a0a0a', // Deep Black
  background: '#0a0a0a', // Deep Black
  foreground: '#F5F5F0', // Cream White
  card: '#1a1a1a', // Dark Gray
  muted: '#2a2a2a', // Muted Gray
  accent: '#FFD700', // Gold
  border: '#2a2a2a',
} as const;

export const ARTISTS = [
  {
    id: 1,
    name: 'Mustapha Zyan',
    nameAr: 'مصطفى زيان',
    image: 'https://via.placeholder.com/300x300?text=Mustapha+Zyan',
    url: '#artist-mustapha-zyan',
    bio: 'Innovative producer blending traditional and modern sounds',
    bioAr: 'منتج مبتكر يمزج الأصوات التقليدية والحديثة'
  },
  {
    id: 2,
    name: 'Ahmed Chourouk',
    nameAr: 'أحمد شروق',
    image: 'https://via.placeholder.com/300x300?text=Ahmed+Chourouk',
    url: '#artist-ahmed-chourouk',
    bio: 'Rising star with electrifying performances',
    bioAr: 'نجم صاعد بعروض كهربائية'
  },
  {
    id: 3,
    name: 'Nour El Din',
    nameAr: 'نور الدين',
    image: 'https://via.placeholder.com/300x300?text=Nour+El+Din',
    url: '#artist-nour-el-din',
    bio: 'Master of rhythm and percussion',
    bioAr: 'سيد الإيقاع والآلات الإيقاعية'
  },
  {
    id: 4,
    name: 'Layla Mansour',
    nameAr: 'ليلى منصور',
    image: 'https://via.placeholder.com/300x300?text=Layla+Mansour',
    url: '#artist-layla-mansour',
    bio: 'Soulful vocalist with international appeal',
    bioAr: 'مغنية روحانية بجاذبية عالمية'
  },
  {
    id: 5,
    name: 'Karim Hassan',
    nameAr: 'كريم حسن',
    image: 'https://via.placeholder.com/300x300?text=Karim+Hassan',
    url: '#artist-karim-hassan',
    bio: 'Electronic music pioneer and innovator',
    bioAr: 'رائد موسيقى إلكترونية ومبتكر'
  }
] as const;

export const VIDEOS = [
  {
    id: 1,
    title: 'Latest Hit',
    titleAr: 'أحدث نجاح',
    youtubeId: 'dQw4w9WgXcQ',
    artist: 'Mustapha Zyan',
    artistAr: 'مصطفى زيان'
  },
  {
    id: 2,
    title: 'Summer Vibes',
    titleAr: 'أجواء الصيف',
    youtubeId: 'dQw4w9WgXcQ',
    artist: 'Ahmed Chourouk',
    artistAr: 'أحمد شروق'
  },
  {
    id: 3,
    title: 'Night Dreams',
    titleAr: 'أحلام الليل',
    youtubeId: 'dQw4w9WgXcQ',
    artist: 'Nour El Din',
    artistAr: 'نور الدين'
  },
  {
    id: 4,
    title: 'Golden Hour',
    titleAr: 'الساعة الذهبية',
    youtubeId: 'dQw4w9WgXcQ',
    artist: 'Layla Mansour',
    artistAr: 'ليلى منصور'
  },
  {
    id: 5,
    title: 'Rhythm & Soul',
    titleAr: 'الإيقاع والروح',
    youtubeId: 'dQw4w9WgXcQ',
    artist: 'Karim Hassan',
    artistAr: 'كريم حسن'
  }
] as const;

export const SOCIAL_LINKS = [
  {
    name: 'Instagram',
    icon: 'instagram',
    url: 'https://instagram.com/sonariqmusic',
    ariaLabel: 'Follow on Instagram'
  },
  {
    name: 'Facebook',
    icon: 'facebook',
    url: 'https://facebook.com/sonariqmusic',
    ariaLabel: 'Follow on Facebook'
  },
  {
    name: 'TikTok',
    icon: 'tiktok',
    url: 'https://tiktok.com/@sonariqmusic',
    ariaLabel: 'Follow on TikTok'
  },
  {
    name: 'YouTube',
    icon: 'youtube',
    url: 'https://youtube.com/@sonariqmusic',
    ariaLabel: 'Subscribe on YouTube'
  }
] as const;

export const STREAMING_PLATFORMS = [
  { name: 'Spotify', url: 'https://spotify.com' },
  { name: 'Apple Music', url: 'https://music.apple.com' },
  { name: 'YouTube Music', url: 'https://music.youtube.com' },
  { name: 'SoundCloud', url: 'https://soundcloud.com' }
] as const;
