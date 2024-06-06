import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import EntryLayout from "@/components/layout/EntryLayout";


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
        <div className="w-full h-full">
            <EntryLayout title={'About'}>
                {children}
            </EntryLayout>

        </div>
    
  );
}
