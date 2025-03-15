import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import { Providers } from "@/providers/ThemeProvider";
import NavBar from "@/components/NavBar";
import ReduxProvider from "@/providers/redux-provider";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Country Search",
  description:
    "A simple web application to search for countries and view their details.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} relative font-poppins antialiased max-w-[90rem] mx-auto w-full h-full bg-light-900 dark:bg-dark-200`}
      >
        <ReduxProvider>
          <Providers>
            <div className="w-full flex flex-col relative h-full ">
              <NavBar />
              <main className="p-4">{children}</main>
            </div>
          </Providers>
        </ReduxProvider>
      </body>
    </html>
  );
}
