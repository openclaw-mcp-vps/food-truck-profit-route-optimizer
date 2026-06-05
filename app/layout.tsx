import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Food Truck Route Optimizer – Maximize Daily Profit",
  description: "Analyze location data, weather, events, and sales history to find the most profitable routes and timing for your food truck."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="54ff71d7-7478-46a4-a60f-b1e40f3a9993"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
