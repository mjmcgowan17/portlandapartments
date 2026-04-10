import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portland Apartments - Find Your Next Home",
  description:
    "Browse apartments for rent across Portland, OR. Explore neighborhoods on an interactive map and find your perfect home.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
