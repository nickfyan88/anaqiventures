import { metadataForRoute, renderStaticPage } from "../../static-page";

export const generateMetadata = () => metadataForRoute("/tips/ev-charger.html");

export default function Page() {
  return renderStaticPage("/tips/ev-charger.html");
}

