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

    // SEO Setup
    document.title = 'Lira Pintura — Reformas e Hidráulica em POA';

    // Primary Meta Tags
    setMeta('description', 'Especialistas em acabamento fino, construção a seco e impermeabilização. Atendimento 24h em Porto Alegre.', false);
    setMeta('theme-color', '#0c4a6e', false);

    // Open Graph
    setMeta('og:type', 'website', true);
    setMeta('og:url', SITE_URL, true);
    setMeta('og:title', 'Lira Pintura — Excelência em Acabamentos', true);
    setMeta('og:description', 'Transformamos seu ambiente com pintura de alto padrão e reformas especializadas.', true);
    setMeta('og:image', LOGO_URL, true);
    
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