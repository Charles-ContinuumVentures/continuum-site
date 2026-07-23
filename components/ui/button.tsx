import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
type Props = ComponentPropsWithoutRef<typeof Link> & { variant?: "primary" | "secondary" | "light" };
export function ButtonLink({ className, children, variant = "primary", ...props }: Props) { return <Link className={cn("inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold transition duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-600 motion-reduce:transition-none", variant === "primary" && "bg-emerald-700 text-white hover:bg-emerald-800", variant === "secondary" && "border border-stone-300 bg-white text-stone-900 hover:bg-stone-50", variant === "light" && "bg-white text-stone-950 hover:bg-emerald-50", className)} {...props}>{children}<ArrowUpRight className="size-4" aria-hidden="true"/></Link>; }
