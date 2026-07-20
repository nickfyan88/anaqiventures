import { metadataForRoute, renderStaticPage } from "../../static-page";

export const generateMetadata = () => metadataForRoute("/tips/meter-tnb-baru.html");

export default function Page() {
  return renderStaticPage("/tips/meter-tnb-baru.html");
}

