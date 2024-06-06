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
            <div className='relative w-full z-50 h-fit'>
              <div className='absolute top-0 p-4 lg:px-24 md:px-8 px-2 w-full h-fit'>
                    <Header />
            </div>
          </div>

            {children}
        </div>
        
        </body>
    </html>
  );
}
