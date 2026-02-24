import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/lib/theme";
import PageTransition from "@/components/shared/PageTransition";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { Toaster } from "sonner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Pleasant Chukwuderah | Frontend Developer",
    template: "%s | Pleasant Chukwuderah",
  },
  description:
    "Pleasant Chukwuderah is a frontend engineer based in Lagos Nigeria specializing in React, React Native, Next.js, and TypeScript. Explore projects, case studies, and modern web experiences.",
  keywords: [
    "Pleasant Chukwuderah",
    "Chukwuderah portfolio",
    "Frontend Developer Nigeria",
    "Next.js Developer",
    "React Developer",
    "TypeScript Engineer",
  ],
  authors: [{ name: "Pleasant Chukwuderah" }],
  creator: "Pleasant Chukwuderah",
  metadataBase: new URL("https://pleasant-chukwuderah.vercel.app"),
  icons: {
    icon: "/favicon_io/favicon.ico",
    shortcut: "/favicon_io/favicon-16x16.png",
    apple: "/favicon_io/apple-touch-icon.png",
  },
  manifest: "/favicon_io/site.webmanifest",
  openGraph: {
    title: "Pleasant Chukwuderah | Frontend Developer",
    description:
      "Frontend engineer building immersive, high-performance web applications.",
    url: "https://pleasant-chukwuderah.vercel.app",
    siteName: "Pleasant Chukwuderah",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pleasant Chukwuderah | Frontend Developer",
    description: "Frontend engineer building immersive web experiences.",
    images: ["/og-image.png"],
  },
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <PageTransition>
            <main className="min-h-screen">
              <ThemeToggle variant="orb" />
              {children}
              <Toaster position="top-right" />
            </main>
          </PageTransition>
        </ThemeProvider>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Pleasant Chukwuderah",
              url: "https://pleasant-chukwuderah.vercel.app",
              jobTitle: "Frontend Developer",
              sameAs: [
                "https://github.com/Chukwuderah",
                "https://www.linkedin.com/in/pleasant-chukwuderah-327149183/",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
