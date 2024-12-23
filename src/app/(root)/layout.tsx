import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "src/components/header";
import { Footer } from "src/components/footer";
import { Providers } from "src/app/providers";
import "public/styles/globals.css";
import { headers } from "next/headers";
import { permanentRedirect } from "next/navigation";
import { getSelectorsByUserAgent } from "react-device-detect";
import { Toast } from "src/components/toast";
import { Broadcast } from "src/viewModels/broadcast";
import { Chat } from "src/components/chat";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HHUUYYLLEE",
  description: "Generated by create next app",
};
async function checkMobile() {
  const { isMobile } = getSelectorsByUserAgent(
    (await headers()).get("user-agent") ?? ""
  );
  return isMobile;
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  if (await checkMobile()) permanentRedirect("about:blank");

  return (
    <html lang="en">
      <body className={inter.className + " bg-[#12101b] "}>
        <Header />
        <main>
          <Providers>
            {children}
            <Chat />
          </Providers>
        </main>

        <Footer />
        <Toast />
        <Broadcast />
      </body>
    </html>
  );
}
