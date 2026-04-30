import React from 'react';

interface SocialLink {
  name: string;
  icon: string;
  url: string;
  ariaLabel: string;
}

interface SocialIconsProps {
  links: SocialLink[];
  className?: string;
}

export const SocialIcons: React.FC<SocialIconsProps> = ({ links, className = '' }) => {
  const getIconSVG = (iconName: string) => {
    const icons: Record<string, string> = {
      instagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/></svg>`,
      facebook: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="currentColor"/></svg>`,
      tiktok: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.321 5.562a5.122 5.122 0 0 1-.868-.075c.44-1.073.733-2.229.733-3.487 0-.414-.03-.82-.087-1.22H15.6c.05.4.075.806.075 1.22 0 2.237-1.12 4.208-2.829 5.406v7.772c0 .414-.03.82-.087 1.22h3.156c.057-.4.087-.806.087-1.22 0-2.237 1.12-4.208 2.829-5.406V5.562zm-3.546 9.26v-7.772a3.27 3.27 0 0 0-3.27-3.27 3.27 3.27 0 0 0-3.27 3.27v7.772a3.27 3.27 0 0 1-3.27-3.27c0-.414.03-.82.087-1.22H2.46c-.057.4-.087.806-.087 1.22 0 3.546 2.829 6.375 6.375 6.375s6.375-2.829 6.375-6.375c0-.414-.03-.82-.087-1.22h-3.156c.057.4.087.806.087 1.22 0 1.12-.56 2.108-1.42 2.695z" fill="currentColor"/></svg>`,
      youtube: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="currentColor"/></svg>`
    };
    return icons[iconName] || icons.instagram;
  };

  return (
    <div className={`flex justify-center gap-6 ${className}`}>
      {links.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.ariaLabel}
          className="w-12 h-12 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 group"
          title={social.name}
        >
          <div
            className="w-6 h-6"
            dangerouslySetInnerHTML={{ __html: getIconSVG(social.icon) }}
          />
        </a>
      ))}
    </div>
  );
};
