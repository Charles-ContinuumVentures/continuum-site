import type { Metadata } from "next";
import { inter, manrope } from "./fonts";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import "./globals.css";
const title = "Continuum Ventures | Building Businesses That Solve Real Problems";
const description = "Continuum Ventures creates and develops practical businesses, digital platforms, and technology-enabled services designed to solve meaningful problems and create lasting value.";
export const metadata: Metadata = { metadataBase: new URL("https://continuumventuresco.com"), title, description, openGraph: { title, description, url: "/", siteName: "Continuum Ventures", locale: "en_US", type: "website" }, twitter: { card: "summary_large_image", title, description } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en" className={`${manrope.variable} ${inter.variable} h-full antialiased`}><body className="flex min-h-full flex-col"><Navbar/><main className="flex-1">{children}</main><Footer/></body></html>; }
