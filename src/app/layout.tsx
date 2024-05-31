import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import cn from 'classnames';
import {Container} from "@/app/_components/container";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "React Component",
  description: "Presentation of React Component",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, 'flex flex-col h-screen')}>
        <header className="shadow">
          <Container>
            <div className="flex items-center justify-between py-4">
              <h1 className="font-bold">React Component</h1>
              <div className="text-sm font-medium">
                by Ivan Butakov
              </div>
            </div>
          </Container>
        </header>
        <main className="flex-1 my-4">
          <Container className="relative h-full">
            {children}
          </Container>
        </main>
        <footer>
          <Container>
            <div className="text-sm py-2 font-medium">
              &copy; 2024 Ivan Butakov
            </div>
          </Container>
        </footer>
      </body>
    </html>
  );
}
