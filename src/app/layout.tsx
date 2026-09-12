import type { Metadata } from "next";
import { Roboto, Inter, Montserrat } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-family-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-family-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-family-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Forge Studio — Engineering Digital Excellence",
    template: "%s | Forge Studio",
  },
  description:
    "Forge Studio is a creative digital agency offering UI/UX Design, Website Development, Branding, and Product Design services for visionary brands.",
  openGraph: {
    title: "Forge Studio — Engineering Digital Excellence",
    description:
      "We craft precision-engineered digital experiences for visionary brands.",
    siteName: "Forge Studio",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${inter.variable} ${montserrat.variable}`}
    >
      <body>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
