import { IRootLayoutProps } from "@/types";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
  title: "Car Hub",
  desacription: "Best car in the world!",
};

const RootLayout = ({ children }: IRootLayoutProps) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
