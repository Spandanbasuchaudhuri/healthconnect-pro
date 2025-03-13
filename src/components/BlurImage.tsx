
import { useState, useEffect } from "react";

interface BlurImageProps {
  src: string;
  alt: string;
  className?: string;
}

const BlurImage = ({ src, alt, className = "" }: BlurImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setIsLoaded(true);
    };
  }, [src]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div
        className={`transition-opacity duration-500 ${
          isLoaded ? "opacity-0" : "opacity-100"
        } absolute inset-0 bg-gray-200 animate-pulse`}
      />
      <img
        src={src}
        alt={alt}
        className={`transition-opacity duration-500 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } w-full h-full object-cover`}
      />
    </div>
  );
};

export default BlurImage;
