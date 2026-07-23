import type { SVGProps } from "react";
import { cn } from "@/lib/utils";

export type ContinuumMarkProps = Omit<SVGProps<SVGSVGElement>, "title"> & {
  decorative?: boolean;
  title?: string;
};

const masterGeometry = [
  "M101 22H40L22 40V88L40 106H101",
  "M101 46H51L44 53V75L51 82H101",
  "M101 64H63",
] as const;

export function ContinuumMark({ className, decorative = false, title = "Continuum Ventures geometric mark", ...props }: ContinuumMarkProps) {
  return (
    <svg viewBox="0 0 128 128" fill="none" className={cn("shrink-0", className)} aria-hidden={decorative || undefined} role={decorative ? undefined : "img"} aria-label={decorative ? undefined : title} xmlns="http://www.w3.org/2000/svg" {...props}>
      {!decorative && <title>{title}</title>}
      <g stroke="currentColor" strokeWidth="12" strokeLinecap="round" strokeLinejoin="miter">
        {masterGeometry.map((path) => <path key={path} d={path} />)}
      </g>
    </svg>
  );
}
