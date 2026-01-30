import "./globals.css";

export const metadata = {
  title: "Eco Vista",
  description: "Eco Vista - Your Gateway to Sustainable Living",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
