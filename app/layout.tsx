import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "💜",
  description: "Something made with love",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* iOS & mobile safety */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />

        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Pacifico&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
    <body>
  <div className="relative min-h-screen overflow-hidden">
    {/* Enhanced gradient background */}
    <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#E6DFF1] via-[#FFE5EC] to-[#E9F3EF]" />

    {/* Animated floating blobs */}
    <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#FFB5C2]/20 rounded-full blur-3xl animate-pulse" />
    <div className="absolute top-1/3 right-0 w-72 h-72 bg-[#D4A5D9]/25 rounded-full blur-3xl" style={{ animation: "float 8s ease-in-out infinite" }} />
    <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#E8B4B8]/20 rounded-full blur-3xl" style={{ animation: "float 10s ease-in-out infinite reverse" }} />

    {children}
  </div>
</body>

    </html>
  );
}
