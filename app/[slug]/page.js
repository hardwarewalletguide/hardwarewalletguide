import { notFound } from "next/navigation";
import PageTemplate from "../../components/PageTemplate";
import { pages, SITE } from "../../lib/siteData";

export function generateStaticParams(){return Object.keys(pages).map(slug=>({slug}));}

export async function generateMetadata({params}){
  const {slug}=await params; const page=pages[slug]; if(!page) return {};
  return {title:page.title,description:page.description,alternates:{canonical:`/${slug}/`},openGraph:{title:page.title,description:page.description,url:`${SITE.url}/${slug}/`,type:"article"}};
}

export default async function GuidePage({params}){const {slug}=await params; const page=pages[slug]; if(!page) notFound(); return <PageTemplate page={page} slug={slug}/>;}
