import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Link Compressor",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-[#90D1CA] text-black`}>


        <Navbar />
        {children}
      </body>

    </html>
  );
}
