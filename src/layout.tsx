import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Spline_Sans } from "next/font/google";
import { Inter } from "next/font/google";
const SplineSans = Spline_Sans({
  variable: "--font-spline-sans",
  subsets: ["latin"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Tawa",
  description: "v.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${SplineSans.variable} ${inter.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <main>{children}</main>
        </ThemeProvider>{" "}
      </body>
    </html>
  );
}
