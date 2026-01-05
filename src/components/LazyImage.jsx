import PropTypes from 'prop-types';
import { useState } from 'react';

const LazyImage = ({ src, alt, className, ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(true);
  };

  return (
    <div className={`relative overflow-hidden ${className || ''}`}>
      {!isLoaded && (
        <div className="absolute inset-0 animate-pulse bg-gray-200 dark:bg-gray-700" />
      )}
      {hasError ? (
        <div className="flex h-full w-full items-center justify-center bg-gray-100 text-gray-400 dark:bg-gray-800 dark:text-gray-600">
          <span className="text-xs">Failed to load image</span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
          loading="lazy"
          className={`h-full w-full object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          {...props}
        />
      )}
    </div>
  );
};

LazyImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default LazyImage;

