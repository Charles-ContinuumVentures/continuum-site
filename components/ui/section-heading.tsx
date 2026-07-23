import { cn } from "@/lib/utils";
type Props = { eyebrow: string; title: string; description?: string; className?: string };
export function SectionHeading({ eyebrow, title, description, className }: Props) { return <div className={cn("max-w-2xl", className)}><p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">{eyebrow}</p><h2 className="text-balance text-3xl font-semibold tracking-[-0.04em] text-stone-950 sm:text-4xl lg:text-5xl">{title}</h2>{description && <p className="mt-5 text-pretty text-base leading-7 text-stone-600 sm:text-lg">{description}</p>}</div>; }
