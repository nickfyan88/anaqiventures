import { metadataForRoute, renderStaticPage } from "../../static-page";

export const generateMetadata = () => metadataForRoute("/servis/bekalan-sementara.html");

export default function Page() {
  return renderStaticPage("/servis/bekalan-sementara.html");
}

