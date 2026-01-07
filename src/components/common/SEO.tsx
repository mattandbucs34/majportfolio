import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  name?: string;
  type?: string;
}

const SEO = ({ 
  title, 
  description = "Full-Stack Software Developer specializing in React and Python.", 
  name = "Matthew A Johnson", 
  type = "website" 
}: SEOProps) => {
  useEffect(() => {
    // Basic Title
    const baseTitle = "Matthew A Johnson";
    document.title = title ? `${title} | ${baseTitle}` : `${baseTitle} | Full-Stack Developer`;

    // Description Meta
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }

    // Open Graph
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title || baseTitle);
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute('content', description);

    // Twitter
    const twitterTitle = document.querySelector('meta[property="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute('content', title || baseTitle);
  }, [title, description, name, type]);

  return null;
};

export default SEO;
