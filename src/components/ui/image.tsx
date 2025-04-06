import React from 'react';

interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

const Image: React.FC<ImageProps> = ({ src, alt, className, width, height }) => {
  return (
    <img 
      src={src} 
      alt={alt} 
      className={className}
      style={{ 
        maxWidth: width ? `${width}px` : undefined,
        maxHeight: height ? `${height}px` : undefined,
        objectFit: 'cover'
      }} 
    />
  );
};

export default Image;
