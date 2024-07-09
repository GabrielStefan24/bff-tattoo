import "../../globals.css";
import { Inter } from "next/font/google";

import { NextIntlClientProvider } from "next-intl";
const inter = Inter({ subsets: ["latin"] });
import { notFound } from "next/navigation";
import { headers } from "next/headers";
import { useLocale, useMessages } from "next-intl";
import Navbar from "../Components/Navbar";
import Contact from "../Components/Contact";

export const metadata = {
  title: "Black Flag Tatto Studio",
  description: "Description",
};

export default function RootLayout({ children, params }) {
  const header = headers();
  const localeHeader = header.get("x-next-intl-locale");
  if (localeHeader === null) {
    notFound();
  }

  const locale = useLocale();
  const messages = useMessages();

  // Validate that the incoming `locale` parameter is a valid locale
  if (params.locale !== locale) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          {children}
          <Contact />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
