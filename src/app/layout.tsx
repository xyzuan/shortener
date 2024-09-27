import "./globals.css";

import { Manrope } from "next/font/google";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/providers/theme-provider";

const manrope = Manrope({ subsets: ["latin"] });

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
