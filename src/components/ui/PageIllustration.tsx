/**
 * PageIllustration — consistent illustration wrapper for key product moments.
 *
 * Wraps next/image with a standardised visual treatment (optional panel,
 * rounded corners, generous whitespace, responsive sizing) so every
 * illustration in the flow feels like part of one unified product.
 */

import Image from "next/image";

type PageIllustrationProps = {
  src: string;
  alt: string;
  /** Intrinsic width of the source image in pixels. */
  width: number;
  /** Intrinsic height of the source image in pixels. */
  height: number;
  /**
   * Extra classes applied to the <Image> element.
   * Use `max-w-*` or `w-*` to control rendered width.
   */
  className?: string;
  /**
   * When true, wraps the image in a soft panel with a
   * light background, border, and padding — for placement
   * inside cards or next to content blocks.
   */
  withPanel?: boolean;
  /** Load the image eagerly (use for above-the-fold illustrations). */
  priority?: boolean;
};

export default function PageIllustration({
  src,
  alt,
  width,
  height,
  className = "",
  withPanel = false,
  priority = false,
}: PageIllustrationProps) {
  const image = (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      className={`h-auto w-full object-contain ${className}`}
    />
  );

  if (withPanel) {
    return (
      <figure className="flex items-center justify-center overflow-hidden rounded-2xl border border-slate-100 bg-slate-50 p-6">
        {image}
      </figure>
    );
  }

  return image;
}
