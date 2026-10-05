import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#050A12" },
    { media: "(prefers-color-scheme: light)", color: "#F7F9FC" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://imranhasan.vercel.app"),
  title: {
    default: "MD. Imran Hasan — Software Developer",
    template: "%s | MD. Imran Hasan",
  },
  description:
    "Portfolio of MD. Imran Hasan, a Software Developer focused on Flutter, UI/UX, and product development.",
  keywords: [
    "MD. Imran Hasan",
    "Imran Hasan",
    "Software Developer",
    "Flutter Developer",
    "Flutter",
    "Dart",
    "UI/UX",
    "Figma",
    "Product Development",
    "Bangladesh",
    "EzzeWash",
    "Mobile App Developer",
  ],
  authors: [{ name: "MD. Imran Hasan", url: "https://github.com/ImranHasan13421" }],
  creator: "MD. Imran Hasan",
  publisher: "MD. Imran Hasan",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://imranhasan.vercel.app/",
    siteName: "MD. Imran Hasan Portfolio",
    title: "MD. Imran Hasan — Software Developer",
    description:
      "Portfolio of MD. Imran Hasan, a Software Developer focused on Flutter, UI/UX, and product development.",
    images: [
      {
        url: "/assets/profile/og-image.png",
        width: 1200,
        height: 630,
        alt: "MD. Imran Hasan — Software Developer • Flutter • UI/UX",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MD. Imran Hasan — Software Developer",
    description:
      "Portfolio of MD. Imran Hasan, a Software Developer focused on Flutter, UI/UX, and product development.",
    images: ["/assets/profile/og-image.png"],
    creator: "@ImranHasan13421",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/assets/profile/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/assets/profile/favicon.svg" }],
  },
  alternates: {
    canonical: "https://imranhasan.vercel.app",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('portfolio-theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (saved === 'dark' || (!saved && prefersDark) || !saved) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
