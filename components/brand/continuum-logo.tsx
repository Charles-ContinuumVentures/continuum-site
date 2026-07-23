import type { HTMLAttributes } from "react";
import { inter, manrope } from "@/app/fonts";
import { cn } from "@/lib/utils";
import { ContinuumMark } from "./continuum-mark";

type LogoProps = HTMLAttributes<HTMLDivElement> & { decorative?: boolean; title?: string };

function Wordmark({ centered = false }: { centered?: boolean }) {
  return <span className={cn("flex min-w-0 flex-col gap-[0.34em]", centered && "items-center text-center")}><span className={cn(manrope.className, "font-bold leading-[.86] tracking-[0.165em]")}>CONTINUUM</span><span className={cn(inter.className, "font-medium leading-none tracking-[0.37em] text-current/64")}>VENTURES</span></span>;
}

export function ContinuumLogoHorizontal({ className, decorative = false, title = "Continuum Ventures", ...props }: LogoProps) {
  return <div className={cn("inline-flex items-center gap-[0.78em]", className)} role={decorative ? undefined : "img"} aria-label={decorative ? undefined : title} {...props}><ContinuumMark className="h-[2.9em] w-[2.9em]" decorative/><Wordmark/></div>;
}

export function ContinuumLogoStacked({ className, decorative = false, title = "Continuum Ventures", ...props }: LogoProps) {
  return <div className={cn("inline-flex flex-col items-center gap-[0.72em]", className)} role={decorative ? undefined : "img"} aria-label={decorative ? undefined : title} {...props}><ContinuumMark className="h-[4.2em] w-[4.2em]" decorative/><Wordmark centered/></div>;
}
