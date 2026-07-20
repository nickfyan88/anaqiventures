import { metadataForRoute, renderStaticPage } from "../../static-page";

export const generateMetadata = () => metadataForRoute("/tips/tambah-beban-tnb.html");

export default function Page() {
  return renderStaticPage("/tips/tambah-beban-tnb.html");
}

