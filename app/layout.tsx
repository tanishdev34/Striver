import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Strover's A2Z DSA Course | Complete DSA Roadmap",
  description:
    "Master Data Structures and Algorithms with Strover's comprehensive A2Z DSA sheet. Covers basics to advanced topics with LeetCode problems, video tutorials, and articles.",
  keywords: [
    "DSA",
    "Data Structures",
    "Algorithms",
    "Strover",
    "A2Z",
    "LeetCode",
    "Coding Interview",
    "Programming",
  ],
  authors: [{ name: "Strover" }],
  openGraph: {
    title: "Strover's A2Z DSA Course",
    description: "Master Data Structures and Algorithms with the complete A2Z DSA sheet",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Script
        src="https://umami34.vercel.app/script.js"
        data-website-id="5ee9a7fd-09ac-41c6-9418-00c90b817d4a"
        strategy="afterInteractive"
        defer
      />
      </body>
    </html>
  );
}
