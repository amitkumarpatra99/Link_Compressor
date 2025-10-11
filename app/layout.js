import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Link Compressor",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
        <Navbar />
        {children}
      </body>

    </html>
  );
}
