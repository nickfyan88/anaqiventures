import { metadataForRoute, renderStaticPage } from "./static-page";

export const generateMetadata = () => metadataForRoute("/");

export default function Page() {
  return renderStaticPage("/");
}

