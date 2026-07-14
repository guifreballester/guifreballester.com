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

const TITLE = "Guifré Ballester — Technical PM building API & AI-agent products";
const DESCRIPTION =
  "Senior Technical Product Manager who builds API and AI-agent products. I shipped SE Ranking's remote MCP server (now ~30% of signups) and own the Data API business unit end-to-end. Previously Eventbrite, Getir, and Twilio.";

export const metadata: Metadata = {
  metadataBase: new URL("https://guifreballester.com"),
  title: {
    default: TITLE,
    template: "%s | Guifré Ballester",
  },
  description: DESCRIPTION,
  keywords: [
    "Guifré Ballester",
    "Technical Product Manager",
    "API Product Manager",
    "Model Context Protocol",
    "MCP",
    "AI agents",
    "AI Search",
    "AEO",
    "Developer Platforms",
    "Platform Engineering",
    "SE Ranking",
  ],
  authors: [{ name: "Guifré Ballester" }],
  creator: "Guifré Ballester",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://guifreballester.com",
    siteName: "Guifré Ballester",
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 669,
        alt: "Guifré Ballester — Technical PM building API & AI-agent products",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Guifré Ballester",
  url: "https://guifreballester.com",
  jobTitle: "Senior Technical Product Manager",
  worksFor: { "@type": "Organization", name: "SE Ranking" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Barcelona",
    addressCountry: "ES",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Universitat Politècnica de Catalunya",
  },
  knowsAbout: [
    "API Product Management",
    "Model Context Protocol (MCP)",
    "AI Search / Answer Engine Optimization",
    "Developer Platforms",
    "Platform Engineering",
  ],
  sameAs: ["https://theimpostor.app"],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Guifré Ballester",
  url: "https://guifreballester.com",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([personJsonLd, websiteJsonLd]),
          }}
        />
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-(--color-accent) focus:px-4 focus:py-2 focus:text-white"
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
