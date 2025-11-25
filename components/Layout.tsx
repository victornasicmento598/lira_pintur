import React, { useEffect } from 'react';

const LOGO_URL = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ffa7b5a8ad7ef33bca024b/1054911ed_lirapintura.png";
const SITE_URL = "https://lira-pintura.base44.app";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  useEffect(() => {
    // Helper to set meta tags dynamically
    const setMeta = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      
      meta.setAttribute('content', content);
    };

    const setLink = (rel: string, href: string) => {
      let link = document.querySelector(`link[rel="${rel}"]`);
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', rel);
        document.head.appendChild(link);
      }
      link.setAttribute('href', href);
    };

    const title = 'Lira Pintura — Reformas e Hidráulica em POA';
    const description = 'Pintura de alto padrão, reformas completas e serviços hidráulicos 24h em Porto Alegre. Qualidade e confiança.';

    // SEO Setup
    document.title = title;

    // Primary Meta Tags
    setMeta('description', description, false);
    setMeta('theme-color', '#0c4a6e', false);
    setMeta('author', 'Lira Pintura', false);

    // Open Graph / Facebook / WhatsApp
    setMeta('og:type', 'website', true);
    setMeta('og:url', SITE_URL, true);
    setMeta('og:title', title, true);
    setMeta('og:description', description, true);
    setMeta('og:image', LOGO_URL, true);
    setMeta('og:image:width', '800', true);
    setMeta('og:image:height', '800', true);
    setMeta('og:image:alt', 'Logo Lira Pintura', true);
    setMeta('og:site_name', 'Lira Pintura', true);
    setMeta('og:locale', 'pt_BR', true);

    // Twitter
    setMeta('twitter:card', 'summary', false); // 'summary' é melhor para logos quadrados, 'summary_large_image' para banners
    setMeta('twitter:url', SITE_URL, false);
    setMeta('twitter:title', title, false);
    setMeta('twitter:description', description, false);
    setMeta('twitter:image', LOGO_URL, false);
    
    // Links
    setLink('canonical', SITE_URL);
    setLink('icon', LOGO_URL);

  }, []);

  return (
    <div className="min-h-screen bg-gray-950 font-sans">
      {children}
    </div>
  );
};