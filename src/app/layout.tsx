import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { headers } from "next/headers";
import { getSelectorsByUserAgent } from "react-device-detect";
import Header from "src/components/header";
import Footer from "src/components/footer";
import Providers from "src/app/providers";
import "public/styles/globals.css";
import { redirect } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HHUUYYLLEE",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: [React.ReactNode];
}>) {
  const { isMobile } = getSelectorsByUserAgent(
    (await headers()).get("user-agent") ?? ""
  );
  if (isMobile) redirect("/error");
  else
    return (
      <html lang="en">
        <body className={inter.className + " bg-[#12101b] "}>
          <div className="">
            <Header />
          </div>
          <div className="">
            <Providers>{children}</Providers>
          </div>
          <div className="bg-gray-800">
            <Footer />
          </div>
        </body>
      </html>
    );
}
