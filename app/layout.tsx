import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://dawnwalker.cc"),
  title: "DawnArchive | The Blood of Dawnwalker 中文攻略",
  description: "围绕时间资源、昼夜身份与剧情分支打造的《The Blood of Dawnwalker》中文攻略资料库。",
  openGraph: {
    title: "DawnArchive | The Blood of Dawnwalker 中文攻略",
    description: "昼夜之间，做出值得的选择。",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "DawnArchive | The Blood of Dawnwalker 中文攻略",
    description: "昼夜之间，做出值得的选择。",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
