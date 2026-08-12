import Link from "next/link";
import { navPages } from "../lib/siteData";

export default function Header() {
  return (
    <header className="siteHeader">
      <div className="wrap headerInner">
        <Link className="brand" href="/" aria-label="Hardware Wallet Guide home">
          <span className="brandMark">HWG</span>
          <span><strong>Hardware Wallet Guide</strong><small>Independent security guides</small></span>
        </Link>
        <nav aria-label="Primary navigation">
          {navPages.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
        </nav>
      </div>
    </header>
  );
}
