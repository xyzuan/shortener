import "./globals.css";

import { Metadata } from "next";
import { Manrope } from "next/font/google";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/providers/theme-provider";
import { METADATA } from "@/commons/constants/metadata";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "",
  metadataBase: new URL(
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : process.env.DOMAIN || ""
  ),
  description: METADATA.description,
  keywords: METADATA.keyword,
  creator: METADATA.creator,
  authors: {
    name: METADATA.creator,
    url: METADATA.openGraph.url,
  },
  openGraph: {
    title: "",
    images: METADATA.profile,
    url: METADATA.openGraph.url,
    siteName: METADATA.openGraph.siteName,
    locale: METADATA.openGraph.locale,
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning={true} lang="en">
      <body className={`${manrope.className} flex justify-center`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Toaster position="top-right" richColors />
          <TooltipProvider>{children}</TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
