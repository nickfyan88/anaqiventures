import { metadataForRoute, renderStaticPage } from "../../static-page";

export const generateMetadata = () => metadataForRoute("/tips/upgrade-meter-3phase.html");

export default function Page() {
  return renderStaticPage("/tips/upgrade-meter-3phase.html");
}

