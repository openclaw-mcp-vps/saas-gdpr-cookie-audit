import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GDPR Cookie Audit — Automated Compliance Scanner for SaaS",
  description: "Scan your SaaS app for GDPR cookie violations. Get detailed audit reports and fix compliance issues fast."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="bccb9a92-7cd2-4b6c-aece-24313654b96a"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
