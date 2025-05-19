import type { Metadata } from "next";
import localFont from "next/font/local";
import { Roboto, Inter, Poppins, Source_Sans_3 } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/common/footer";
import { ClerkProvider } from "@clerk/nextjs";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-poppins",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-source-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

// const sono = localFont({
//   src: [
//     {
//       path: "/OTSono-Medium.woff2",
//       weight: "400",
//       style: "normal",
//     },
//     {
//       path: "/OTSono-Medium.woff2",
//       weight: "500",
//       style: "normal",
//     },
//   ],
//   variable: "--font-sono",
//   display: "swap",
// });

export const metadata: Metadata = {
  title: "Blink AI - Best AI PDF Summarizer & Document Analysis Tool",
  description:
    "Transform any PDF into detailed, accurate summaries with Blink AI. Advanced AI-powered PDF analysis, instant summaries, and key insights extraction. Try our free PDF summarizer today.",
  keywords: [
    "AI PDF summarizer",
    "PDF summary tool",
    "AI document analysis",
    "PDF summarizer online",
    "Blink AI summarizer",
    "automatic PDF summary",
    "document summarization AI",
    "best PDF summary tool",
    "AI text extraction",
    "PDF analysis software",
    "GPT PDF summarizer",
    "quick PDF summary",
    "professional PDF summary",
    "PDF key points extractor",
    "smart document summary",
    "Easy PDF summary",
    "Simple PDF summary",
    "Hinglish PDF summary",
    "GPT-4 summarizer",
    "Langchain PDF parser",
    "summarize PDFs online",
    "markdown export summary",
    "Hinglish",
    "Blink AI",
  ],
  icons: {
    icon: "./eyes.gif",
  },
  authors: [{ name: "Blink AI", url: "https://blinkai.app" }],
  openGraph: {
    title: "Blink AI - Advanced AI PDF Summarizer & Analysis Tool",
    description:
      "Get instant, accurate PDF summaries powered by cutting-edge AI. Perfect for professionals, researchers, and students. Fast, secure, and incredibly accurate.",
    url: "https://blinkai.app",
    siteName: "Blink AI",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 640,
        alt: "Blink AI - Professional PDF Summarizer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blink AI - Smart PDF Summarizer & Analysis Tool",
    description:
      "Transform PDFs into concise, accurate summaries instantly. Powered by advanced AI for perfect results every time.",
    images: ["/og-image.png"],
    creator: "@BlinkAI",
  },
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
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <ClerkProvider
      appearance={{
        elements: {
          formButtonPrimary: "bg-black hover:bg-gray-800 text-white",
          footerActionLink: "text-black hover:text-gray-600",
        },
      }}
    >
    <html lang="en">
      <body
        className={`
          ${roboto.variable} 
          ${inter.variable} 
          ${poppins.variable} 
          ${sourceSans.variable} 
          ${geistMono.variable}
        `}
      >
        <div className="relative flex flex-col min-h-screen bg-[#F5F5EB]">
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
    </ClerkProvider>
  );
}
