import { metadataForRoute, renderStaticPage } from "../static-page";

export const generateMetadata = () => metadataForRoute("/tips.html");

export default function Page() {
  return renderStaticPage("/tips.html");
}

