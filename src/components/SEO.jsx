import PropTypes from 'prop-types';

const SEO = ({ title, description, path }) => {
  const siteTitle = 'Scooter Plus - Servis Vespa Matic Premium';
  const siteDescription = description || 'Servis Vespa matic premium, cepat, dan bergaransi. Dari ganti oli, tune-up, detailing, sampai upgrade performa.';
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const baseUrl = window.location.origin;
  const url = `${baseUrl}${path || ''}`;

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={siteDescription} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <link rel="canonical" href={url} />
    </>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  path: PropTypes.string
};

// Simple version using document manipulation
export const updateSEO = (title, description, path) => {
  if (typeof window === 'undefined' || typeof document === 'undefined') return;
  
  const siteTitle = 'Scooter Plus - Servis Vespa Matic Premium';
  const siteDescription = description || 'Servis Vespa matic premium, cepat, dan bergaransi. Dari ganti oli, tune-up, detailing, sampai upgrade performa.';
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const baseUrl = window.location.origin;
  const url = `${baseUrl}${path || ''}`;

  document.title = fullTitle;

  // Update or create meta tags
  const updateMeta = (name, content, attribute = 'name') => {
    let element = document.querySelector(`meta[${attribute}="${name}"]`);
    if (!element) {
      element = document.createElement('meta');
      element.setAttribute(attribute, name);
      document.head.appendChild(element);
    }
    element.setAttribute('content', content);
  };

  updateMeta('description', siteDescription);
  updateMeta('og:title', fullTitle, 'property');
  updateMeta('og:description', siteDescription, 'property');
  updateMeta('og:url', url, 'property');
  updateMeta('og:type', 'website', 'property');
  updateMeta('twitter:card', 'summary_large_image');
  updateMeta('twitter:title', fullTitle);
  updateMeta('twitter:description', siteDescription);

  // Update canonical link
  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }
  canonical.setAttribute('href', url);
};

export default SEO;

