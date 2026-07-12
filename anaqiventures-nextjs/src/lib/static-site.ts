import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";

const contentRoot = path.join(process.cwd(), "src/content/static");
const siteUrl = "https://anaqiventures.com.my";

export type StaticPage = {
  route: string;
  filePath: string;
  html: string;
  body: string;
  inlineStyles: string[];
  jsonLd: string[];
  metadata: Metadata;
};

type MetaTag = {
  name?: string;
  property?: string;
  content: string;
};

function walkHtmlFiles(dir: string): string[] {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) return walkHtmlFiles(fullPath);
    return entry.isFile() && entry.name.endsWith(".html") ? [fullPath] : [];
  });
}

function filePathToRoute(filePath: string): string {
  const relativePath = path.relative(contentRoot, filePath).replaceAll(path.sep, "/");
  return relativePath === "index.html" ? "/" : `/${relativePath}`;
}

export function getStaticRoutes() {
  return walkHtmlFiles(contentRoot)
    .map((filePath) => ({
      route: filePathToRoute(filePath),
      filePath,
    }))
    .sort((a, b) => a.route.localeCompare(b.route));
}

function slugToRoute(slug?: string[]) {
  if (!slug || slug.length === 0) return "/";
  return `/${slug.join("/")}`;
}

export function routeToSlug(route: string) {
  if (route === "/") return [];
  return route.slice(1).split("/");
}

function extractFirst(source: string, pattern: RegExp) {
  return source.match(pattern)?.[1]?.trim();
}

function extractMetaTags(head: string): MetaTag[] {
  const tags = head.match(/<meta\b[^>]*>/gi) ?? [];
  const parsedTags: MetaTag[] = [];

  tags.forEach((tag) => {
    const name = extractFirst(tag, /\bname=["']([^"']+)["']/i);
    const property = extractFirst(tag, /\bproperty=["']([^"']+)["']/i);
    const content = extractFirst(tag, /\bcontent=["']([^"']*)["']/i);
    if (content) parsedTags.push({ name, property, content });
  });

  return parsedTags;
}

function metaContent(tags: MetaTag[], key: string) {
  return tags.find((tag) => tag.name === key || tag.property === key)?.content;
}

function toMetadata(head: string): Metadata {
  const title = extractFirst(head, /<title>([\s\S]*?)<\/title>/i);
  const tags = extractMetaTags(head);
  const canonical = extractFirst(
    head,
    /<link\b[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["'][^>]*>/i,
  );
  const ogImage = metaContent(tags, "og:image");
  const twitterImage = metaContent(tags, "twitter:image");

  return {
    title,
    description: metaContent(tags, "description"),
    alternates: canonical ? { canonical } : undefined,
    openGraph: {
      type: metaContent(tags, "og:type") === "article" ? "article" : "website",
      locale: metaContent(tags, "og:locale"),
      siteName: metaContent(tags, "og:site_name"),
      title: metaContent(tags, "og:title") ?? title,
      description: metaContent(tags, "og:description") ?? metaContent(tags, "description"),
      url: metaContent(tags, "og:url") ?? canonical,
      images: ogImage ? [{ url: ogImage }] : undefined,
    },
    twitter: {
      card: metaContent(tags, "twitter:card") === "summary" ? "summary" : "summary_large_image",
      title: metaContent(tags, "twitter:title") ?? title,
      description: metaContent(tags, "twitter:description") ?? metaContent(tags, "description"),
      images: twitterImage ?? ogImage ? [twitterImage ?? ogImage ?? ""] : undefined,
    },
    icons: {
      icon: `${siteUrl}/anaqi-ventures-icon.png`,
      apple: `${siteUrl}/anaqi-ventures-icon.png`,
    },
  };
}

function stripRuntimeScripts(body: string) {
  return body
    .replace(/<script\b[^>]*src=["'][^"']*(components|main)\.js["'][\s\S]*?<\/script>/gi, "")
    .replace(/<script>\s*loadComponents\(['"][^'"]*['"]\);\s*<\/script>/gi, "")
    .replaceAll('href="../index.html#', 'href="/#')
    .replaceAll('href="../index.html"', 'href="/"')
    .replaceAll('href="index.html#', 'href="/#')
    .replaceAll('href="index.html"', 'href="/"');
}

export function getPageBySlug(slug?: string[]): StaticPage | null {
  const route = slugToRoute(slug);
  const routeMatch = getStaticRoutes().find((item) => item.route === route);
  if (!routeMatch) return null;

  const html = fs.readFileSync(routeMatch.filePath, "utf8");
  const head = extractFirst(html, /<head>([\s\S]*?)<\/head>/i) ?? "";
  const rawBody = extractFirst(html, /<body>([\s\S]*?)<\/body>/i) ?? "";

  return {
    route,
    filePath: routeMatch.filePath,
    html,
    body: stripRuntimeScripts(rawBody),
    inlineStyles: Array.from(head.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)).map(
      (match) => match[1],
    ),
    jsonLd: Array.from(
      head.matchAll(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi),
    ).map((match) => match[1].trim()),
    metadata: toMetadata(head),
  };
}
