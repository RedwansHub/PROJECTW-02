import type { Metadata } from "next";
import EntryLayout from "@/components/layout/EntryLayout";
import Header from "@/components/Sub/Header";


export const metadata: Metadata = {
  title: "Contact us - Zenith Construction",
  description: "Contact us if you would like to work wiht us or have any questions for us.",
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
            <EntryLayout h={280} title={'Contact'}>
                {children}
            </EntryLayout>

    </div>
    
  );
}
