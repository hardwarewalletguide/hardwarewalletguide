import Link from "next/link";
import SafetyBox from "./SafetyBox";
import { SITE } from "../lib/siteData";

export default function PageTemplate({ page, slug }) {
  const official = page.cta[1].startsWith("http");
  const schema = {
    "@context":"https://schema.org",
    "@type":"WebPage",
    name: page.title,
    description: page.description,
    url: `${SITE.url}/${slug}/`,
    isPartOf: {"@type":"WebSite", name:SITE.name, url:SITE.url},
    breadcrumb: {"@type":"BreadcrumbList", itemListElement:[
      {"@type":"ListItem", position:1, name:"Home", item:SITE.url},
      {"@type":"ListItem", position:2, name:page.h1, item:`${SITE.url}/${slug}/`}
    ]}
  };
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}} />
    <main>
      <section className="hero"><div className="wrap narrow"><p className="eyebrow">{page.eyebrow}</p><h1>{page.h1}</h1><p className="lede">{page.intro}</p><div className="heroActions">{official ? <a className="button" href={page.cta[1]} target="_blank" rel="noopener noreferrer">{page.cta[0]} ↗</a> : <Link className="button" href={page.cta[1]}>{page.cta[0]} →</Link>}<Link className="button ghost" href="/ledger-security/">Security guide</Link></div></div></section>
      <div className="wrap contentGrid"><article className="article">
        <SafetyBox/>
        {page.sections.map(([h, body]) => <section key={h}><h2>{h}</h2><p>{body}</p></section>)}
        <section><h2>Common questions</h2><div className="faq">{page.faq.map(([q,a])=><details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></section>
        <section className="nextLinks"><h2>Continue reading</h2><div className="cards"><Link href="/ledger/">Ledger overview</Link><Link href="/ledger-live-download/">Ledger Live download safety</Link><Link href="/ledger-setup/">Ledger setup</Link><Link href="/ledger-support/">Ledger support</Link></div></section>
      </article><aside className="sidebar"><div className="sideCard"><strong>Independent guide</strong><p>This site is not affiliated with Ledger. Product details can change; verify current information with the manufacturer.</p></div><div className="sideCard"><strong>Official resources</strong><a href={SITE.officialLedger} target="_blank" rel="noopener noreferrer">Ledger.com ↗</a><a href={SITE.officialStart} target="_blank" rel="noopener noreferrer">Official setup/download ↗</a><a href={SITE.officialSupport} target="_blank" rel="noopener noreferrer">Official support ↗</a></div></aside></div>
    </main>
  </>
}
