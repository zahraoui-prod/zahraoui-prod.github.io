import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Music, Play } from 'lucide-react';
import { SocialIcons } from '@/components/SocialIcons';
import { SuccessNotification } from '@/components/SuccessNotification';
import { useTranslations, type Language } from '@/hooks/useTranslations';
import { useEmailJS } from '@/hooks/useEmailJS';
import { ARTISTS, VIDEOS, SOCIAL_LINKS } from '@/lib/constants';

/**
 * SONARIQ MUSIC - Premium Music Label Website
 * Design Philosophy: Art Deco Revival with Bold Modern Luxury
 * 
 * Color Scheme:
 * - Primary: #FFD700 (Vibrant Gold)
 * - Background: #0a0a0a (Deep Black)
 * - Text: #F5F5F0 (Cream White)
 * - Accents: #1a1a1a (Dark Gray)
 * 
 * Typography:
 * - Headlines: Montserrat (bold, geometric)
 * - Body: Roboto (clean, modern)
 */

export default function Home() {
  const [language, setLanguage] = useState<Language>('en');
  const [formData, setFormData] = useState({
    email: '',
    whatsapp: '',
    youtubeChannel: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [notificationMessage, setNotificationMessage] = useState('');
  const [notificationType, setNotificationType] = useState<'success' | 'error'>('success');
  const [showNotification, setShowNotification] = useState(false);

  const t = useTranslations(language);
  const { isInitialized, isLoading, sendEmail } = useEmailJS();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('loading');

    // Validate form
    if (!formData.email || !formData.message) {
      setNotificationType('error');
      setNotificationMessage(language === 'en' ? 'Please fill in all required fields' : 'يرجى ملء جميع الحقول المطلوبة');
      setShowNotification(true);
      setSubmitStatus('idle');
      return;
    }

    // Send email via EmailJS
    const result = await sendEmail({
      email: formData.email,
      whatsapp: formData.whatsapp,
      youtubeChannel: formData.youtubeChannel,
      message: formData.message
    });

    if (result.success) {
      setSubmitStatus('success');
      setNotificationType('success');
      setNotificationMessage(t.messageSent);
      setShowNotification(true);
      setFormData({ email: '', whatsapp: '', youtubeChannel: '', message: '' });
    } else {
      setSubmitStatus('error');
      setNotificationType('error');
      setNotificationMessage(result.error || t.messageError);
      setShowNotification(true);
    }

    // Reset status after 3 seconds
    setTimeout(() => setSubmitStatus('idle'), 3000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Success/Error Notification */}
      <SuccessNotification
        message={notificationMessage}
        isVisible={showNotification}
        onClose={() => setShowNotification(false)}
        type={notificationType}
        duration={5000}
      />

      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-primary/30">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Music className="w-8 h-8 text-primary" />
            <h1 className="text-2xl font-bold text-primary">{t.brand}</h1>
          </div>
          <button
            onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
            className="px-4 py-2 rounded-full bg-primary text-primary-foreground font-bold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
          >
            {language === 'en' ? 'العربية' : 'English'}
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663613133162/mZCZKuLBkZRvRqHjxTjbTe/hero-background-7dXTiAGKFNoguEYFbbYAtu.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 container text-center fade-in-up">
          <h2 className="text-display mb-6 text-primary">{t.hero}</h2>
          <p className="text-xl md:text-2xl mb-8 text-foreground/90 max-w-3xl mx-auto">
            {t.heroSub}
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="luxury-button"
              onClick={() => document.getElementById('artists')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t.exploreArtists}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              {t.listenNow}
            </Button>
          </div>
          <p className="mt-12 text-sm text-foreground/70">{t.streamingPlatforms}</p>
        </div>
      </section>

      {/* Divider */}
      <div className="gold-divider"></div>

      {/* Artists Section */}
      <section id="artists" className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-heading text-primary mb-4">{t.artistsSection}</h2>
            <p className="text-lg text-foreground/80">{t.artistsDesc}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {ARTISTS.map((artist, index) => (
              <div
                key={artist.id}
                className="scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <a href={artist.url} className="block group">
                  <div className="geometric-frame mb-4 overflow-hidden bg-card">
                    <img
                      src={artist.image}
                      alt={language === 'ar' ? artist.nameAr : artist.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-primary text-center group-hover:text-primary/80 transition-colors">
                    {language === 'ar' ? artist.nameAr : artist.name}
                  </h3>
                  <p className="text-sm text-foreground/60 text-center mt-2">
                    {language === 'ar' ? artist.bioAr : artist.bio}
                  </p>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="gold-divider"></div>

      {/* Videos Section */}
      <section
        className="py-20 bg-card"
        style={{
          backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663613133162/mZCZKuLBkZRvRqHjxTjbTe/video-section-bg-5ymgdJVyBpbWeTRaNHtduR.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-heading text-primary mb-4">{t.videosSection}</h2>
            <p className="text-lg text-foreground/80">{t.videosDesc}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {VIDEOS.map((video, index) => (
              <div
                key={video.id}
                className="scale-in group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <a
                  href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="relative overflow-hidden rounded-lg bg-black aspect-video">
                    <img
                      src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
                      alt={language === 'ar' ? video.titleAr : video.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <Play className="w-12 h-12 text-primary group-hover:scale-125 transition-transform" />
                    </div>
                  </div>
                  <h3 className="mt-3 font-bold text-primary">{language === 'ar' ? video.titleAr : video.title}</h3>
                  <p className="text-sm text-foreground/70">{language === 'ar' ? video.artistAr : video.artist}</p>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="gold-divider"></div>

      {/* Contact Section */}
      <section
        className="py-20 bg-background"
        style={{
          backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663613133162/mZCZKuLBkZRvRqHjxTjbTe/contact-section-bg-QFwLYBsxVZU6ZgrRxNFsx7.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/75"></div>
        <div className="container relative z-10">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-heading text-primary mb-4">{t.contactSection}</h2>
              <p className="text-lg text-foreground/80">{t.contactDesc}</p>
              {!isInitialized && (
                <p className="text-sm text-yellow-400 mt-4">
                  {language === 'en' ? 'Email service is being initialized...' : 'جاري تهيئة خدمة البريد...'}
                </p>
              )}
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 bg-card/50 backdrop-blur-sm p-8 rounded-lg border border-primary/20">
              <div>
                <label className="block text-sm font-bold text-primary mb-2">
                  {t.emailLabel} *
                </label>
                <Input
                  type="email"
                  name="email"
                  placeholder={t.emailPlaceholder}
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  disabled={isLoading}
                  className="bg-background border-primary/30 text-foreground placeholder:text-foreground/50 disabled:opacity-50"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-primary mb-2">
                  {t.whatsappLabel}
                </label>
                <Input
                  type="tel"
                  name="whatsapp"
                  placeholder={t.whatsappPlaceholder}
                  value={formData.whatsapp}
                  onChange={handleInputChange}
                  disabled={isLoading}
                  className="bg-background border-primary/30 text-foreground placeholder:text-foreground/50 disabled:opacity-50"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-primary mb-2">
                  {t.youtubeLabel}
                </label>
                <Input
                  type="url"
                  name="youtubeChannel"
                  placeholder={t.youtubePlaceholder}
                  value={formData.youtubeChannel}
                  onChange={handleInputChange}
                  disabled={isLoading}
                  className="bg-background border-primary/30 text-foreground placeholder:text-foreground/50 disabled:opacity-50"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-primary mb-2">
                  {t.messageLabel} *
                </label>
                <Textarea
                  name="message"
                  placeholder={t.messagePlaceholder}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  disabled={isLoading}
                  rows={5}
                  className="bg-background border-primary/30 text-foreground placeholder:text-foreground/50 resize-none disabled:opacity-50"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isLoading || !isInitialized}
                className="w-full luxury-button disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <span className="inline-block w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin"></span>
                    {language === 'en' ? 'Sending...' : 'جاري الإرسال...'}
                  </span>
                ) : (
                  t.sendButton
                )}
              </Button>
            </form>

            {/* Social Media Icons */}
            <div className="mt-12 text-center">
              <h3 className="text-lg font-bold text-primary mb-6">{t.followUs}</h3>
              <SocialIcons links={SOCIAL_LINKS as any} />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-primary/30 py-8">
        <div className="container text-center">
          <p className="text-foreground/70">{t.copyright}</p>
          <p className="text-sm text-foreground/50 mt-2">{t.craftedWith}</p>
        </div>
      </footer>
    </div>
  );
}
