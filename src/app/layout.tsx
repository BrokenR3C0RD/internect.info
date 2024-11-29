import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

import { cn } from "~/lib/utils";

import "./globals.css";

import { Toaster } from "~/components/ui/sonner";
import { Providers } from "./providers";

const font = Open_Sans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "inter.epqu.ca - Resolve a Bluesky handle",
  description:
    "internect.info, but with did:web support",
  metadataBase: new URL("https://inter.epqu.ca")
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "bg-background min-h-screen font-sans antialiased",
          font.variable,
        )}
      >
        <Providers>{children}</Providers>
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
