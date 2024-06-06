import Header from "@/components/Sub/Header";
import EntryLayout from "@/components/layout/EntryLayout";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

export const metadata: Metadata = {
  title: "Services - Zenith Construction",
  description: "Zenith construction is a construction company that aims to revolutionize Somalia's construction landscape.",
  };
const poppins = Poppins({ subsets: ["latin"], weight: '300' });

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <div className= {`${poppins.className} relative   w-full h-full`}>
              <div className='absolute z-50 top-0 p-4 lg:px-24 md:px-8 px-2 w-full h-fit'>
                    <Header  />
              </div>
          {/* <EntryLayout h={270} title={'Our Services'}> */}
                {children}
          {/* </EntryLayout> */}


        </div>
    
  );
}
