import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import Link from "next/link"
import "./globals.css"

export const metadata: Metadata = {
  title: "Simple Next.js App",
  description: "A clean and minimal Next.js application",
}

const Navigation = () => {
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-xl font-semibold text-gray-900">
              Simple App
            </Link>
            <div className="hidden md:flex space-x-6">
              <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                Home
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                About
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center text-gray-600">
          <p>&copy; 2024 Simple Next.js App. Built with Next.js 15+ and TypeScript.</p>
        </div>
      </div>
    </footer>
  )
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} min-h-screen flex flex-col`}>
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}