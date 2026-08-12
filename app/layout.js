import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { SITE } from "../lib/siteData";

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: "Hardware Wallet Guide | Independent Wallet Security Guides", template: "%s | Hardware Wallet Guide" },
  description: SITE.description,
  alternates: { canonical: "/" },
  openGraph: { title: "Hardware Wallet Guide", description: SITE.description, url: SITE.url, siteName: SITE.name, type:"website" },
  robots: { index:true, follow:true },
};

export default function RootLayout({children}){
  return <html lang="en"><body><Header/>{children}<Footer/></body></html>
}
