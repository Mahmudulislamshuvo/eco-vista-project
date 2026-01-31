import "../globals.css";

export const metadata = {
  title: "Eco Vista",
  description: "Eco Vista - Your Gateway to Sustainable Living",
};

export default function RootLayout({
  children,
  aqi,
  temparature,
  wind,
  weather,
}) {
  return (
    <main className="!z-50 w-full">
      <div className="container">
        <div className="grid grid-cols-12 gap-y-8 py-16 lg:gap-8 2xl:gap-20 2xl:py-20">
          {children}
          {aqi}
          {temparature}
          {wind}
          {weather}
        </div>
      </div>
    </main>
  );
}
