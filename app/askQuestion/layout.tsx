import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import EntryLayout from "@/components/layout/EntryLayout";


export const metadata: Metadata = {
  title: "FAQ - Zenith Construction.",
  description: "About Zenith Construction. Let us know if you have any questions for us.",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <div className="w-full h-full">
            <EntryLayout title={'Frequently Asked Questions'}>
                {children}
            </EntryLayout>

        </div>
    
  );
}
