import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { BackToTop } from "@/components/ui/back-to-top";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://guifreballester.com"),
  title: {
    default: "Guifré Ballester — Senior Technical Product Manager",
    template: "%s | Guifré Ballester",
  },
  description:
    "Senior Technical Product Manager building API products and developer platforms. 6+ years shipping cloud infrastructure and 0-to-1 products.",
  keywords: [
    "Product Manager",
    "Technical Product Manager",
    "API",
    "Developer Platform",
    "Platform Engineering",
    "Cloud Infrastructure",
  ],
  authors: [{ name: "Guifré Ballester" }],
  creator: "Guifré Ballester",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://guifreballester.com",
    siteName: "Guifré Ballester",
    title: "Guifré Ballester — Senior Technical Product Manager",
    description:
      "Building API products and developer platforms. 6+ years shipping cloud infrastructure and 0-to-1 products.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 675,
        alt: "Guifré Ballester — Senior Technical Product Manager",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Guifré Ballester — Senior Technical Product Manager",
    description:
      "Building API products and developer platforms. 6+ years shipping cloud infrastructure and 0-to-1 products.",
    images: ["/og-image.png"],
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
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen font-sans antialiased">
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-[--color-accent] focus:px-4 focus:py-2 focus:text-white"
            >
              Skip to main content
            </a>
            <Header />
            <main id="main-content" className="flex-1">
              {children}
            </main>
            <Footer />
            <BackToTop />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
