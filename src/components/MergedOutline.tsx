import { cn } from '../lib/utils';

interface MergedOutlineProps {
  children: string;
  className?: string;
  strokeWidth?: string;
  strokeColor?: string;
  fillColor?: string;
}

/**
 * A component that creates a "merged outline" typography effect.
 * It layers a thick stroke behind a solid fill to create a single, 
 * continuous perimeter around overlapping letters.
 */
export default function MergedOutline({ 
  children, 
  className, 
  strokeWidth = '3px', 
  strokeColor = '#FFD700',
  fillColor = '#000000'
}: MergedOutlineProps) {
  return (
    <span className={cn("relative inline-block tracking-tighter px-[0.1em]", className)}>
      {/* Merged Outline Layer */}
      <span 
        className="absolute inset-0 flex items-center justify-center select-none pointer-events-none merged-outline-layer" 
        style={{ 
          '--desktop-stroke': strokeWidth,
          '--stroke-color': strokeColor,
          paintOrder: 'stroke fill',
          color: 'transparent'
        } as any}
        aria-hidden="true"
      >
        {children}
      </span>
      {/* Solid Fill Layer (Covers the inner half of the stroke to maintain font size) */}
      <span 
        className="relative block whitespace-nowrap"
        style={{ color: fillColor }}
      >
        {children}
      </span>
    </span>
  );
}
