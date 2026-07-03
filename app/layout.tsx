import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sterling Oak | B2B Cold Email & AI Outbound Automation",
  description:
    "Sterling Oak helps B2B companies generate qualified meetings through cold email, outbound automation, and AI-powered prospecting.",

  metadataBase: new URL("https://sterlingoak.net"),

  openGraph: {
    title: "Sterling Oak",
    description:
      "Generate more qualified meetings through AI-powered outbound systems.",
    url: "https://sterlingoak.net",
    siteName: "Sterling Oak",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sterling Oak",
    description:
      "Generate more qualified meetings through AI-powered outbound systems.",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
  {children}
  <GoogleAnalytics gaId="G-0HLYNPJ8C3" />
</body>
    </html>
  );
}
