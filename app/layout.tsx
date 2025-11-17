import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UMass Cybersec",
  description: "UMass Cybersecurity Club",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <nav className="navbar">
          <div className="nav-container">
            <a href="/" className="nav-brand">UMass Cybersecurity</a>
            <div className="nav-links">
              <a href="/">Home</a>
              <a href="/events">Events</a>
              <a href="/about">About</a>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}

