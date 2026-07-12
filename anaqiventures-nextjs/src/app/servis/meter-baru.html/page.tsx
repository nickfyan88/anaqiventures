import { metadataForRoute, renderStaticPage } from "../../static-page";

export const generateMetadata = () => metadataForRoute("/servis/meter-baru.html");

export default function Page() {
  return renderStaticPage("/servis/meter-baru.html");
}

