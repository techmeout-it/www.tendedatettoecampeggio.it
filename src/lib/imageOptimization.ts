/**
 * Image Optimization Utilities
 * Provides helpers for responsive images, lazy loading, and WebP support
 */

export interface ImageConfig {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
  className?: string;
  priority?: boolean;
}

/**
 * Generate responsive image srcset for different screen sizes
 * Assumes images are available in dist/assets/ with naming convention
 */
export function generateImageSrcSet(imagePath: string): string {
  // For now, return single source since Vite bundles at build time
  // In production, this would reference CDN versions at different sizes
  return imagePath;
}

/**
 * Get optimized image loading priority based on viewport
 */
export function getImageLoadingPriority(isCritical: boolean): 'eager' | 'lazy' {
  return isCritical ? 'eager' : 'lazy';
}

/**
 * Format image dimensions for responsive design
 */
export function getResponsiveImageSizes(width: number): string {
  return `(max-width: 640px) ${width * 0.5}px, (max-width: 1024px) ${width * 0.75}px, ${width}px`;
}

/**
 * Preload critical images for LCP optimization
 */
export function preloadImage(imagePath: string): void {
  if (typeof document !== 'undefined') {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = imagePath;
    link.type = 'image/jpeg';
    document.head.appendChild(link);
  }
}

/**
 * Check if WebP is supported and return appropriate image source
 */
export function getOptimizedImageSource(
  jpgPath: string,
  webpPath?: string
): { source: string; srcSet: string } {
  // For production, use the jpg path (Vite handles optimization)
  // In future, could detect WebP support and serve .webp files
  return {
    source: jpgPath,
    srcSet: jpgPath,
  };
}
