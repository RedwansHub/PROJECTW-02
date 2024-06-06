import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Sub/Header";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({ subsets: ["latin"], weight: '400' });

export const metadata: Metadata = {
  title: "Zenith Construction",
  description: "Zenith construction is a construction company that aims to revolutionize Somalia's construction landscape.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        

        <div className="w-full h-full">
          <Toaster />
            
            {children}
        </div>
        
        </body>
    </html>
  );
}
