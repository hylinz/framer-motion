import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "@/components/providers/theme-provider";
import TopNav from "@/components/TopNav";
import Footer from "@/components/Footer";
export const metadata: Metadata = {
  title: "Hylins :)",
  description: "Simple, creative, accessible and portable web development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          <TopNav />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
