import "../../globals.css";
import { Inter } from "next/font/google";

import { NextIntlClientProvider } from "next-intl";
const inter = Inter({ subsets: ["latin"] });
import { getMessages } from "next-intl/server";

export const metadata = {
  title: "Black Flag Tatto Studio",
  description: "Description",
};

export default async function RootLayout({ children, params: { locale } }) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
