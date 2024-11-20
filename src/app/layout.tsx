import type { Metadata } from "next";
import { TolgeeNextProvider } from "@/tolgee/client";
import { getStaticData } from "@/tolgee/shared";
import { getLanguage } from "@/tolgee/language";
import localFont from "next/font/local";

import "./globals.css";
import "@copilotkit/react-ui/styles.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Healthy Together",
  description: "Health Application for manage happy life.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLanguage();
  const staticData = await getStaticData([locale]);
  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TolgeeNextProvider language={locale} staticData={staticData}>
          {children}
        </TolgeeNextProvider>
      </body>
    </html>
  );
}
