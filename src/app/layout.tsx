import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { VisualEditsMessenger } from "orchids-visual-edits";
import { SecurityWrapper } from "@/components/SecurityWrapper";
import { FloatingPopup } from "@/components/FloatingPopup";
import { Toaster } from "sonner";
import Script from "next/script";
import { Pirata_One, Cinzel_Decorative } from "next/font/google";

const pirataOne = Pirata_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pirata",
});

const cinzelDecorative = Cinzel_Decorative({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-cinzel",
});

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.roastntoastclub.com"),
  title: {
    default: "Roast N Toast | Best Restaurant & Nightclub in Hyderabad",
    template: "%s | Roast N Toast",
  },
  description: "Roast N Toast Hyderabad - A unique blend of fine dining and vibrant nightlife. Best multicuisine restaurant and premium club in Madinaguda.",
  keywords: ["Roast N Toast", "Hyderabad Restaurant", "Nightclub Hyderabad", "Madinaguda Dining", "Best Pub in Hyderabad", "Fine Dining Hyderabad"],
  authors: [{ name: "Roast N Toast" }],
  creator: "Roast N Toast",
  publisher: "Roast N Toast",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.roastntoastclub.com",
    siteName: "Roast N Toast",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Roast N Toast Hyderabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Roast N Toast | Best Restaurant & Nightclub in Hyderabad",
    description: "Roast N Toast Hyderabad - A unique blend of fine dining and vibrant nightlife.",
    images: ["/og-image.png"],
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
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en" suppressHydrationWarning>
        <body className={`${pirataOne.variable} ${cinzelDecorative.variable} antialiased`}>
          <Script
          id="orchids-browser-logs"
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/orchids-browser-logs.js"
          strategy="afterInteractive"
          data-orchids-project-id="1ce5c9de-8ddd-4715-9c1b-b453bb62ccf7"
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
            >
            <SecurityWrapper />
            <FloatingPopup />
            <Toaster position="bottom-right" />
            {children}

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Roast N Toast",
                "image": "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1ce5c9de-8ddd-4715-9c1b-b453bb62ccf7/55D7DFDB-95A1-4994-9227-044842B9795E-1767713898800.png",
                "@id": "https://www.roastntoastclub.com",
                "url": "https://www.roastntoastclub.com",
                "telephone": "9105550999",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Above Westside Showroom, 4th Floor, Land Mark - Madinaguda, Main Road",
                  "addressLocality": "Hyderabad",
                  "postalCode": "500049",
                  "addressCountry": "IN"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 17.4933,
                  "longitude": 78.3409
                },
                "openingHoursSpecification": [
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": [
                      "Sunday",
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday"
                    ],
                    "opens": "11:00",
                    "closes": "23:30"
                  },
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": [
                      "Friday",
                      "Saturday"
                    ],
                    "opens": "11:00",
                    "closes": "00:30"
                  }
                ],
                "sameAs": [
                  "https://www.instagram.com/roastntoasthyd/"
                ]
              })
            }}
          />
        </ThemeProvider>
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
