/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";
import "./globals.css";
import "./anaqi-static.css";
import Script from "next/script";

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
                          <Script src="https://www.googletagmanager.com/gtag/js?id=G-9GQ0PDKHDW" strategy="afterInteractive" />
                          <Script id="ga4-init" strategy="afterInteractive">{`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-9GQ0PDKHDW');`}</Script>
                    </head>
                    <body suppressHydrationWarning>{children}
                    </body>
              </html>
            );
}
