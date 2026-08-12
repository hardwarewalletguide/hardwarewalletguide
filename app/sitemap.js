import { SITE, pages } from "../lib/siteData";
export default function sitemap(){const now=new Date();return [{url:`${SITE.url}/`,lastModified:now,changeFrequency:"weekly",priority:1},...Object.keys(pages).map(slug=>({url:`${SITE.url}/${slug}/`,lastModified:now,changeFrequency:"monthly",priority:slug==="ledger"?0.95:0.8}))];}
