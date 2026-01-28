import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Striver's A2Z DSA Course | Complete DSA Roadmap",
  description:
    "Master Data Structures and Algorithms with Striver's comprehensive A2Z DSA sheet. Covers basics to advanced topics with LeetCode problems, video tutorials, and articles.",
  keywords: [
    "DSA",
    "Data Structures",
    "Algorithms",
    "Striver",
    "A2Z",
    "LeetCode",
    "Coding Interview",
    "Programming",
  ],
  authors: [{ name: "Striver" }],
  openGraph: {
    title: "Striver's A2Z DSA Course",
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
      </body>
    </html>
  );
}
