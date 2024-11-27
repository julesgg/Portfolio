import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/navbar";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio | Jules Gueguen",
  description:
    "A clean looking portfolio presenting my experiences and my skills. Built with NextJS & TailwindCSS",
    icons: {
      icon: '/jLogo.ico', 
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/jLogo.ico" />
      </Head>
      <body className={inter.className}>
        <Navbar />
        <div className="h-20"></div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
