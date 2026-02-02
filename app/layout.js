import Image from "next/image";
import "./globals.css";

export const metadata = {
  title: "Eco Vista",
  description: "Eco Vista - Your Gateway to Sustainable Living",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="wrapper">
          <Image
            src="/background.png"
            alt="background"
            fill
            priority
            className="bg-img"
          />
          <div className="overlay"></div>
          <main className="relative z-30">{children}</main>
        </div>
      </body>
    </html>
  );
}
