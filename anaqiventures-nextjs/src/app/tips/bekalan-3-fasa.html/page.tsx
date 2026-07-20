import { metadataForRoute, renderStaticPage } from "../../static-page";

export const generateMetadata = () => metadataForRoute("/tips/bekalan-3-fasa.html");

export default function Page() {
  return renderStaticPage("/tips/bekalan-3-fasa.html");
}

