import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Nunito } from "next/font/google";



export const metadata: Metadata = {
  title: 'Nexora Studio | Premium Digital Agency for Business Growth',
  description: 'Nexora Studio crafts world-class websites, landing pages, and AI automation for businesses seeking exponential growth, qualified leads, and a premium online presence.',
  keywords: ["digital agency, website design, no-code development, AI automation, landing pages, web redesign, business growth, Nexora Studio, premium web, elite design"],
  openGraph: {
    "title": "Nexora Studio | Premium Digital Agency for Business Growth",
    "description": "Nexora Studio crafts world-class websites, landing pages, and AI automation for businesses seeking exponential growth, qualified leads, and a premium online presence.",
    "url": "https://www.nexorastudio.com",
    "siteName": "Nexora Studio",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/man-pointing-important-papers-cork-board_329181-15333.jpg",
        "alt": "Nexora Studio digital agency dashboard"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Nexora Studio | Premium Digital Agency for Business Growth",
    "description": "Nexora Studio crafts world-class websites, landing pages, and AI automation for businesses seeking exponential growth, qualified leads, and a premium online presence.",
    "images": [
      "http://img.b2bpic.net/free-photo/man-pointing-important-papers-cork-board_329181-15333.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${nunito.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
