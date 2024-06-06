import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import EntryLayout from "@/components/layout/EntryLayout";

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
        <div className="w-full h-full">
            <EntryLayout title={'Portfolio'}>
                {children}
            </EntryLayout>

        </div>
    
  );
}
