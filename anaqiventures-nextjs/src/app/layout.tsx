/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import "./anaqi-static.css";

export const metadata: Metadata = {
    metadataBase: new URL("https://anaqiventures.com.my"),
    title: "Anaqi Ventures",
    description: "Kontraktor elektrik di Lembah Klang.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
          <html lang="ms" suppressHydrationWarning>
                <head>
                        <link rel="preconnect" href="https://fonts.googleapis.com" />
                        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                        <link
                                    href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap"
                                    rel="stylesheet"
                                  />
                        <Script id="gtm-script" strategy="afterInteractive">
                          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                                              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                                                        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                                                                  })(window,document,'script','dataLayer','GTM-T2TG2HQ2');`}
                        </Script>
                </head>
                <body suppressHydrationWarning>
                        <noscript>
                                  <iframe
                                                src="https://www.googletagmanager.com/ns.html?id=GTM-T2TG2HQ2"
                                                height="0"
                                                width="0"
                                                style={{ display: "none", visibility: "hidden" }}
                                              ></iframe>
                        </noscript>
                  {children}
                </body>
          </html>
        );
}
</html>
