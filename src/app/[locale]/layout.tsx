import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Montserrat } from "next/font/google";

import { NextIntlClientProvider, useMessages } from "next-intl";

import { locales } from "@/navigation";
import { Header } from "@/components/header/header";
import { Footer } from "@/components/footer/footer";

import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: {
    locale: string;
  };
}>) {
  if (!locales.includes(locale)) {
    notFound();
  }

  const messages = useMessages();

  return (
    <html lang={locale}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <body className={`${montserrat.className} flex flex-col`}>
          <Header locale={locale} />
          <main className="grow">{children}</main>
          <Footer />
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
