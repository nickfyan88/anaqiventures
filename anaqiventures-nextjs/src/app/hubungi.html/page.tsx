import { metadataForRoute, renderStaticPage } from "../static-page";

export const generateMetadata = () => metadataForRoute("/hubungi.html");

export default function Page() {
  return renderStaticPage("/hubungi.html");
}

