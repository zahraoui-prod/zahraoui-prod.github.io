/**
 * ZAHRAOUI PROD - Multi-Language & Artist Database System
 * 
 * DEVELOPER GUIDE:
 * ================
 * 
 * 1. HOW TO ADD A NEW ARTIST:
 *    - Locate the `artistsData` object below
 *    - Add a new entry with format:
 *      "2": {
 *        "name": { "ar": "...", "en": "...", "es": "...", "fr": "..." },
 *        "genre": { "ar": "...", "en": "...", "es": "...", "fr": "..." },
 *        "bio": { "ar": "...", "en": "...", "es": "...", "fr": "..." },
 *        "image": "images/artists/artistname.jpg",
 *        "songs": "50+",
 *        "listeners": "1M+",
 *        "plays": "5M+",
 *        "joinYear": "2020",
 *        "social": {
 *          "facebook": "https://facebook.com/...",
 *          "instagram": "https://instagram.com/...",
 *          "tiktok": "https://tiktok.com/@...",
 *          "youtube": "https://youtube.com/...",
 *          "linktree": "https://linktree.com/..."
 *        }
 *      }
 * 
 * 2. HOW TO ADD A NEW SECTION:
 *    - Create a new HTML section in the respective page (index.html, artists.html, etc.)
 *    - Add a unique ID to the section (e.g., id="new-section")
 *    - Use data-i18n attributes for text that needs translation
 *    - Example: <h2 data-i18n="section.title">Default Title</h2>
 *    - Add translations to the `translations` object below
 * 
 * 3. LANGUAGE SWITCHING:
 *    - Call `switchLanguage(languageCode)` where languageCode is 'ar', 'en', 'es', or 'fr'
 *    - The system automatically handles RTL/LTR switching
 *    - All data-i18n elements update automatically
 */

// ============================================================================
// TRANSLATIONS OBJECT - Add all multi-language content here
// ============================================================================

const translations = {
  ar: {
    "nav.home": "الرئيسية",
    "nav.artists": "الفنانون",
    "nav.works": "الأعمال",
    "nav.contact": "تواصل معنا",
    "hero.title": "حماية و توزيع الفن المغربي للعالم",
    "hero.subtitle": "توفر ZAHRAOUI PROD خدمات احترافية لإدارة الحقوق والتوزيع العالمي للمواهب المغربية الرائدة",
    "section.artists": "الفنانون المميزون",
    "section.artists.desc": "اكتشف مواهب مغربية متنوعة تحت رعاية ZAHRAOUI PROD",
    "section.works": "معرض الأعمال",
    "section.works.desc": "استكشف مجموعة مختارة من أفضل الأعمال الموسيقية المُدارة بواسطة ZAHRAOUI PROD",
    "discover": "اكتشف أكثر →",
    "footer.about": "عن الموقع",
    "footer.about.text": "ZAHRAOUI PROD توفر خدمات احترافية لتوزيع الموسيقى وإدارة الحقوق الرقمية للمواهب المغربية.",
    "footer.quick": "روابط سريعة",
    "footer.services": "الخدمات",
    "footer.contact": "تواصل",
    "footer.copyright": "© 2024 ZAHRAOUI PROD. جميع الحقوق محفوظة.",
    "artist.songs": "أغنية",
    "artist.listeners": "مستمع",
    "artist.plays": "تشغيل",
    "artist.joinYear": "سنة الانضمام"
  },
  en: {
    "nav.home": "Home",
    "nav.artists": "Artists",
    "nav.works": "Works",
    "nav.contact": "Contact",
    "hero.title": "Protecting & Distributing Moroccan Art to the World",
    "hero.subtitle": "ZAHRAOUI PROD provides professional rights management and global distribution for top Moroccan talent.",
    "section.artists": "Featured Artists",
    "section.artists.desc": "Discover diverse Moroccan talents under ZAHRAOUI PROD management",
    "section.works": "Works Gallery",
    "section.works.desc": "Explore a curated collection of the finest musical works managed by ZAHRAOUI PROD",
    "discover": "Discover More →",
    "footer.about": "About",
    "footer.about.text": "ZAHRAOUI PROD provides professional music distribution and digital rights management services for Moroccan talent.",
    "footer.quick": "Quick Links",
    "footer.services": "Services",
    "footer.contact": "Contact",
    "footer.copyright": "© 2024 ZAHRAOUI PROD. All rights reserved.",
    "artist.songs": "Songs",
    "artist.listeners": "Listeners",
    "artist.plays": "Plays",
    "artist.joinYear": "Join Year"
  },
  es: {
    "nav.home": "Inicio",
    "nav.artists": "Artistas",
    "nav.works": "Obras",
    "nav.contact": "Contacto",
    "hero.title": "Protegiendo y Distribuyendo Arte Marroquí al Mundo",
    "hero.subtitle": "ZAHRAOUI PROD proporciona gestión profesional de derechos y distribución global para el talento marroquí de primer nivel.",
    "section.artists": "Artistas Destacados",
    "section.artists.desc": "Descubre diversos talentos marroquíes bajo la gestión de ZAHRAOUI PROD",
    "section.works": "Galería de Obras",
    "section.works.desc": "Explora una colección seleccionada de las mejores obras musicales gestionadas por ZAHRAOUI PROD",
    "discover": "Descubre Más →",
    "footer.about": "Acerca de",
    "footer.about.text": "ZAHRAOUI PROD proporciona servicios profesionales de distribución de música y gestión de derechos digitales para talento marroquí.",
    "footer.quick": "Enlaces Rápidos",
    "footer.services": "Servicios",
    "footer.contact": "Contacto",
    "footer.copyright": "© 2024 ZAHRAOUI PROD. Todos los derechos reservados.",
    "artist.songs": "Canciones",
    "artist.listeners": "Oyentes",
    "artist.plays": "Reproducciones",
    "artist.joinYear": "Año de Unión"
  },
  fr: {
    "nav.home": "Accueil",
    "nav.artists": "Artistes",
    "nav.works": "Œuvres",
    "nav.contact": "Contact",
    "hero.title": "Protéger et Distribuer l'Art Marocain au Monde",
    "hero.subtitle": "ZAHRAOUI PROD fournit une gestion professionnelle des droits et une distribution mondiale pour les meilleurs talents marocains.",
    "section.artists": "Artistes en Vedette",
    "section.artists.desc": "Découvrez des talents marocains diversifiés sous la gestion de ZAHRAOUI PROD",
    "section.works": "Galerie d'Œuvres",
    "section.works.desc": "Explorez une collection sélectionnée des meilleures œuvres musicales gérées par ZAHRAOUI PROD",
    "discover": "Découvrir Plus →",
    "footer.about": "À Propos",
    "footer.about.text": "ZAHRAOUI PROD fournit des services professionnels de distribution musicale et de gestion des droits numériques pour les talents marocains.",
    "footer.quick": "Liens Rapides",
    "footer.services": "Services",
    "footer.contact": "Contact",
    "footer.copyright": "© 2024 ZAHRAOUI PROD. Tous droits réservés.",
    "artist.songs": "Chansons",
    "artist.listeners": "Auditeurs",
    "artist.plays": "Lectures",
    "artist.joinYear": "Année d'Adhésion"
  }
};

// ============================================================================
// ARTISTS DATABASE - Centralized, Easy-to-Edit Artist Information
// ============================================================================

const artistsData = {
  "1": {
    name: {
      ar: "مصطفى زيان",
      en: "Mustapha Zyan",
      es: "Mustafá Zian",
      fr: "Moustapha Zian"
    },
    genre: {
      ar: "موسيقى عربية معاصرة",
      en: "Contemporary Arabic Music",
      es: "Música Árabe Contemporánea",
      fr: "Musique Arabe Contemporaine"
    },
    bio: {
      ar: "فنان موهوب متخصص في دمج الأصوات التقليدية مع الإيقاعات الحديثة. يتمتع بخبرة واسعة في الموسيقى العربية المعاصرة.",
      en: "A talented artist specializing in blending traditional sounds with modern rhythms. He has extensive experience in contemporary Arabic music.",
      es: "Un artista talentoso especializado en mezclar sonidos tradicionales con ritmos modernos. Tiene amplia experiencia en música árabe contemporánea.",
      fr: "Un artiste talentueux spécialisé dans le mélange de sons traditionnels avec des rythmes modernes. Il a une vaste expérience dans la musique arabe contemporaine."
    },
    image: "images/artists/mostafazyan.jpg",
    songs: "50+",
    listeners: "1M+",
    plays: "5M+",
    joinYear: "2020",
    social: {
      facebook: "https://facebook.com/mustaphazyan",
      instagram: "https://instagram.com/mustaphazyan",
      tiktok: "https://tiktok.com/@mustaphazyan",
      youtube: "https://youtube.com/@mustaphazyan",
      linktree: "https://linktree.com/mustaphazyan"
    }
  }
};

// ============================================================================
// LANGUAGE & LOCALIZATION SYSTEM
// ============================================================================

let currentLanguage = localStorage.getItem('language') || 'ar';

/**
 * Switch the website language
 * @param {string} lang - Language code: 'ar', 'en', 'es', 'fr'
 */
function switchLanguage(lang) {
  if (!translations[lang]) return;
  
  currentLanguage = lang;
  localStorage.setItem('language', lang);
  
  // Update HTML direction for RTL/LTR
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
  
  // Update all i18n elements
  updateAllTranslations();
  
  // Update language switcher UI
  updateLanguageSwitcher();
}

/**
 * Update all elements with data-i18n attribute
 */
function updateAllTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    const text = getTranslation(key);
    if (text) element.textContent = text;
  });
}

/**
 * Get translation for a key
 * @param {string} key - Translation key (e.g., 'nav.home')
 * @returns {string} Translated text
 */
function getTranslation(key) {
  return translations[currentLanguage]?.[key] || translations['ar'][key] || key;
}

/**
 * Update language switcher UI to show active language
 */
function updateLanguageSwitcher() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('data-lang') === currentLanguage) {
      btn.classList.add('active');
    }
  });
}

// ============================================================================
// ARTIST PAGE SYSTEM
// ============================================================================

/**
 * Load artist data from URL parameter (?id=1)
 */
function loadArtistFromURL() {
  const params = new URLSearchParams(window.location.search);
  const artistId = params.get('id') || '1';
  loadArtistData(artistId);
}

/**
 * Load and display artist data
 * @param {string} artistId - Artist ID from artistsData
 */
function loadArtistData(artistId) {
  const artist = artistsData[artistId];
  
  if (!artist) {
    console.error(`Artist with ID ${artistId} not found`);
    return;
  }
  
  // Update page title
  document.title = `${artist.name[currentLanguage]} - ZAHRAOUI PROD`;
  
  // Update artist name
  const nameElement = document.getElementById('artist-name');
  if (nameElement) nameElement.textContent = artist.name[currentLanguage];
  
  // Update artist genre
  const genreElement = document.getElementById('artist-genre');
  if (genreElement) genreElement.textContent = artist.genre[currentLanguage];
  
  // Update artist bio
  const bioElement = document.getElementById('artist-bio');
  if (bioElement) bioElement.textContent = artist.bio[currentLanguage];
  
  // Update artist stats
  updateArtistStats(artist);
  
  // Update artist image with fallback
  updateArtistImage(artist.image);
  
  // Update social media links
  updateSocialLinks(artist.social);
}

/**
 * Update artist statistics display
 * @param {object} artist - Artist data object
 */
function updateArtistStats(artist) {
  const statsElements = document.querySelectorAll('[data-stat]');
  statsElements.forEach(element => {
    const stat = element.getAttribute('data-stat');
    if (stat === 'songs') element.textContent = artist.songs;
    else if (stat === 'listeners') element.textContent = artist.listeners;
    else if (stat === 'plays') element.textContent = artist.plays;
    else if (stat === 'joinYear') element.textContent = artist.joinYear;
  });
}

/**
 * Update artist image with fallback to microphone icon
 * @param {string} imagePath - Path to artist image
 */
function updateArtistImage(imagePath) {
  const imageElement = document.querySelector('[data-artist-image]');
  if (!imageElement) return;
  
  // Create image element
  const img = new Image();
  img.src = imagePath;
  
  // On successful load
  img.onload = function() {
    imageElement.innerHTML = '';
    imageElement.appendChild(img);
    img.style.width = '100%';
    img.style.height = '100%';
    img.style.objectFit = 'cover';
    img.style.borderRadius = '2px';
  };
  
  // On error, show fallback microphone icon
  img.onerror = function() {
    imageElement.innerHTML = '<span style="font-size: 5rem;">🎤</span>';
    imageElement.style.display = 'flex';
    imageElement.style.alignItems = 'center';
    imageElement.style.justifyContent = 'center';
  };
}

/**
 * Update social media links
 * @param {object} social - Social media links object
 */
function updateSocialLinks(social) {
  const socialContainer = document.querySelector('[data-social-links]');
  if (!socialContainer) return;
  
  const platforms = [
    { key: 'facebook', icon: '📘', label: 'Facebook' },
    { key: 'instagram', icon: '📷', label: 'Instagram' },
    { key: 'tiktok', icon: '🎵', label: 'TikTok' },
    { key: 'youtube', icon: '▶️', label: 'YouTube' },
    { key: 'linktree', icon: '🔗', label: 'Linktree' }
  ];
  
  socialContainer.innerHTML = '';
  
  platforms.forEach(platform => {
    const url = social[platform.key];
    if (url) {
      const link = document.createElement('a');
      link.href = url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.title = platform.label;
      link.style.cssText = `
        width: 48px;
        height: 48px;
        border: 1px solid rgba(0, 212, 255, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 2px;
        color: var(--accent-cyan);
        text-decoration: none;
        transition: all 0.3s;
        font-size: 1.2rem;
      `;
      link.textContent = platform.icon;
      
      // Hover effect
      link.addEventListener('mouseover', () => {
        link.style.borderColor = 'var(--accent-cyan)';
        link.style.boxShadow = '0 0 10px rgba(0, 212, 255, 0.5)';
      });
      link.addEventListener('mouseout', () => {
        link.style.borderColor = 'rgba(0, 212, 255, 0.5)';
        link.style.boxShadow = 'none';
      });
      
      socialContainer.appendChild(link);
    }
  });
}

// ============================================================================
// MOBILE MENU & FORM HANDLING
// ============================================================================

function initMobileMenu() {
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navbarLinks = document.querySelector('.navbar-links');
  
  if (mobileMenuBtn && navbarLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      navbarLinks.style.display = navbarLinks.style.display === 'flex' ? 'none' : 'flex';
    });
    
    // Close menu when clicking a link
    navbarLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navbarLinks.style.display = 'none';
      });
    });
  }
}

function handleFormSubmit(e) {
  e.preventDefault();
  
  const name = document.querySelector('input[name="name"]')?.value;
  const email = document.querySelector('input[name="email"]')?.value;
  const subject = document.querySelector('input[name="subject"]')?.value;
  const message = document.querySelector('textarea[name="message"]')?.value;
  
  if (name && email && subject && message) {
    const submitBtn = document.querySelector('.contact-form button');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = currentLanguage === 'ar' ? 'تم الإرسال!' : 'Sent!';
    submitBtn.disabled = true;
    
    setTimeout(() => {
      document.querySelector('.contact-form').reset();
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }, 2000);
    
    console.log('Form submitted:', { name, email, subject, message });
  }
}

// ============================================================================
// INITIALIZATION
// ============================================================================

document.addEventListener('DOMContentLoaded', () => {
  // Initialize language system
  switchLanguage(currentLanguage);
  
  // Initialize mobile menu
  initMobileMenu();
  
  // Load artist data if on artist page
  if (document.getElementById('artist-name')) {
    loadArtistFromURL();
  }
  
  // Setup language switcher buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      switchLanguage(lang);
      if (document.getElementById('artist-name')) {
        loadArtistFromURL();
      }
    });
  });
  
  // Setup form submission
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', handleFormSubmit);
  }
});
