import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import EntryLayout from "@/components/layout/EntryLayout";
import Header from "@/components/Sub/Header";


export const metadata: Metadata = {
  title: "About - Zenith Construction",
  description: "About Zenith Construction. Our Motto is Building today, empowering tomorrow. Learn More about us.  .",
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
            <EntryLayout h={300} title={'About'}>
                {children}
            </EntryLayout>

        </div>
    
  );
}
