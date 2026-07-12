import { notFound } from "next/navigation";
import { getPageBySlug, getStaticRoutes, routeToSlug } from "@/lib/static-site";
import { SiteRuntime } from "../site-runtime";

export function generateStaticParams() {
  return getStaticRoutes().map(({ route }) => ({
    slug: routeToSlug(route),
  }));
}

export function generateMetadata({ params }: { params: Promise<{ slug?: string[] }> }) {
  return params.then(({ slug }) => getPageBySlug(slug)?.metadata ?? {});
}

export default async function StaticPage({ params }: { params: Promise<{ slug?: string[] }> }) {
  const { slug } = await params;
  const page = getPageBySlug(slug);

  if (!page) notFound();

  return (
    <>
      {page.inlineStyles.map((css, index) => (
        <style key={index} dangerouslySetInnerHTML={{ __html: css }} />
      ))}
      {page.jsonLd.map((json, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: json }}
        />
      ))}
      <div dangerouslySetInnerHTML={{ __html: page.body }} />
      <SiteRuntime route={page.route} />
    </>
  );
}

