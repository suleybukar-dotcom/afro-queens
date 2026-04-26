import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/layout/CartDrawer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { CartProvider } from "@/lib/cart-context";

export const metadata: Metadata = {
  title: "Afro Queens — La Couronne de vos Cheveux Naturels",
  description: "Découvrez nos soins capillaires naturels et premium conçus pour les cheveux afro, bouclés et crépus. Shampoing, sérum, crème, masque et spray capillaire.",
  keywords: "cheveux naturels, afro, bouclés, crépus, soins capillaires, naturel, premium, fenugrec, aloe vera",
  openGraph: {
    title: "Afro Queens — La Couronne de vos Cheveux Naturels",
    description: "Des formules naturelles et puissantes pour sublimer votre couronne.",
    siteName: "Afro Queens",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="grain">
        <CartProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <CartDrawer />
          <WhatsAppButton />
        </CartProvider>
      </body>
    </html>
  );
}
