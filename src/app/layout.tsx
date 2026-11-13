import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "@/assets/styles/globals.css";
import "@/assets/styles/home.css";
import "@/assets/styles/navbar.css";
import "@/assets/styles/hero.css";
import "@/assets/styles/security.css";
import "@/assets/styles/platform.css";
import "@/assets/styles/architecture.css";
import "@/assets/styles/capabilities.css";
import "@/assets/styles/team.css";
import "@/assets/styles/whySkieSecure.css";
import "@/assets/styles/pricing.css";
import "@/assets/styles/faqs.css";
import "@/assets/styles/footer.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SkieSecure — Enterprise Security, Built for SMBs",
  description:
    "Autonomous AI-native SOC, SIEM, FIM & 24/7 human security analyst protection for small and mid-size businesses.",
};

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || "G-BPBCX1ZSZV";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="bg-white text-gray-900">
        {children}

        {GA_MEASUREMENT_ID && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
            >
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
