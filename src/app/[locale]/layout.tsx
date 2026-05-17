import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { LenisProvider } from "@/providers/LenisProvider";
import { F1LoaderOverlay } from "@/components/F1LoaderOverlay";
import { DRSProvider } from "@/components/DRSContext";
import "../globals.css";

const inter = Inter({
  variable: "--font-sans-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const robotoMono = Roboto_Mono({
  variable: "--font-mono-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Michael Quispe — Software Developer",
  description:
    "Portfolio of Michael Quispe. Software Developer focused on performance, scalable architecture, and Motorsport enthusiast.",
  metadataBase: new URL("https://example.com"),
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "es" | "en")) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${inter.variable} ${robotoMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <NextIntlClientProvider messages={messages}>
          <F1LoaderOverlay />
          <DRSProvider>
            <LenisProvider>{children}</LenisProvider>
          </DRSProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
