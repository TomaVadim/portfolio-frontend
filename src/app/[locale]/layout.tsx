import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { locales } from "@/navigation";
import { Header } from "@/components/header/header";
import { Footer } from "@/components/footer/footer";
import { LayoutProps } from "@/shared/interfaces/layout-props";
import { montserrat } from "@/public/styles/fonts";
import { NextIntlClientProvider } from "@/providers/next-intl-client-provider";

import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio",
};

export default function RootLayout({ children, params: { locale } }: Readonly<LayoutProps>) {
  if (!locales.includes(locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <NextIntlClientProvider locale={locale}>
        <body className={montserrat.className}>
          <Header locale={locale} />
          <main>{children}</main>
          <Footer />
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
