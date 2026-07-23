import Link from "next/link";
import { ContinuumLogoHorizontal } from "@/components/brand";
import { cn } from "@/lib/utils";

export function BrandMark({ inverted = false }: { inverted?: boolean }) {
  return <Link href="/" aria-label="Continuum Ventures home" className={cn("inline-flex rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-600", inverted ? "text-white" : "text-stone-950")}><ContinuumLogoHorizontal decorative className="text-[14px]"/></Link>;
}
