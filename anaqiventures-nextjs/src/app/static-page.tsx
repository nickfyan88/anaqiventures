import { notFound } from "next/navigation";
import { getPageByRoute } from "@/lib/static-site";
import { SiteRuntime } from "./site-runtime";

export function metadataForRoute(route: string) {
  return getPageByRoute(route)?.metadata ?? {};
}

export function renderStaticPage(route: string) {
  const page = getPageByRoute(route);

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
      <div suppressHydrationWarning dangerouslySetInnerHTML={{ __html: page.body }} />
      <SiteRuntime route={page.route} />
    </>
  );
}

