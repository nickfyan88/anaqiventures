import { metadataForRoute, renderStaticPage } from "../../static-page";

export const generateMetadata = () => metadataForRoute("/tips/single-phase-vs-3-fasa.html");

export default function Page() {
  return renderStaticPage("/tips/single-phase-vs-3-fasa.html");
}

