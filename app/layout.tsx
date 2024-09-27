import type { Metadata } from "next";
import { AntdRegistry } from "@ant-design/nextjs-registry";

import "./globals.css";

export const metadata: Metadata = {
  title: "Zynk",
  description: "Secure chat with end to end encryption",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body id="body" className={`antialiased`}>
        <AntdRegistry hashPriority="high">{children}</AntdRegistry>
      </body>
    </html>
  );
}
