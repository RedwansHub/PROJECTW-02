import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import EntryLayout from "@/components/layout/EntryLayout";
import Header from "@/components/Sub/Header";

const poppins = Poppins({ subsets: ["latin"], weight: '400' });

export const metadata: Metadata = {
  title: "Portfolio - Zenith Construction",
  description: "Zenith Construction's Portfolio. Where are some of our best work.  .",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <div className="w-full h-full relative">
           <div className='relative w-full z-50 h-fit'>
              <div className='absolute top-0 p-4 lg:px-24 md:px-8 px-2 w-full h-fit'>
                    <Header  />
            </div>
          </div>
            <EntryLayout h={500} title={'Portfolio'}>
                {children}
            </EntryLayout>

        </div>
    
  );
}
