import Link from "next/link";
import SafetyBox from "../components/SafetyBox";
import { SITE } from "../lib/siteData";

export const metadata={title:"Independent Hardware Wallet & Ledger Security Guides",description:"Independent hardware wallet guides covering Ledger devices, Ledger Wallet, setup, recovery, downloads and security.",alternates:{canonical:"/"}};

export default function Home(){
 const schema={"@context":"https://schema.org","@type":"WebSite",name:SITE.name,url:SITE.url,description:SITE.description};
 return <main><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/><section className="hero homeHero"><div className="wrap narrow"><p className="eyebrow">Independent · Security-first · No wallet access</p><h1>Hardware wallet guides that put verification first</h1><p className="lede">Learn how Ledger devices, wallet software, recovery methods and security practices work—without pretending to be the manufacturer and without asking for wallet secrets.</p><div className="heroActions"><Link className="button" href="/ledger/">Explore Ledger guide →</Link><Link className="button ghost" href="/hardware-wallets/">Hardware wallet basics</Link></div></div></section><section className="wrap section"><SafetyBox/><div className="sectionHead"><p className="eyebrow">Featured topic</p><h2>Ledger knowledge hub</h2><p>Start broad, then move into the exact task you need.</p></div><div className="featureGrid">
 <Link href="/ledger/"><strong>Ledger</strong><span>Overview of devices, software, setup and security.</span></Link>
 <Link href="/ledger-live/"><strong>Ledger Live</strong><span>Understand the Ledger Live → Ledger Wallet naming change.</span></Link>
 <Link href="/ledger-live-download/"><strong>Ledger Live Download</strong><span>How to reach the official download safely.</span></Link>
 <Link href="/ledger-setup/"><strong>Ledger Setup</strong><span>First-time initialization and recovery backup checklist.</span></Link>
 <Link href="/ledger-security/"><strong>Ledger Security</strong><span>Phishing, seed phrase and transaction verification.</span></Link>
 <Link href="/ledger-support/"><strong>Ledger Support</strong><span>Find official help and avoid fake support agents.</span></Link>
 </div></section><section className="band"><div className="wrap"><div className="sectionHead"><p className="eyebrow">Device guides</p><h2>Ledger hardware models</h2></div><div className="cards big"><Link href="/ledger-nano-x/">Ledger Nano X</Link><Link href="/ledger-nano-s-plus/">Ledger Nano S Plus</Link><Link href="/ledger-flex/">Ledger Flex</Link><Link href="/ledger-stax/">Ledger Stax</Link></div></div></section></main>
}
