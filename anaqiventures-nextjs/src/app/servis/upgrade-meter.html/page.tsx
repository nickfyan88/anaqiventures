import { metadataForRoute, renderStaticPage } from "../../static-page";

export const generateMetadata = () => metadataForRoute("/servis/upgrade-meter.html");

export default function Page() {
  return renderStaticPage("/servis/upgrade-meter.html");
}

