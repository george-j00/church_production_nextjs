import Header from "@/components/pages/landing/Header";
import Navbar from "@/components/shared/navbar/Navbar";
import { Toaster } from "@/components/ui/toaster";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Toaster />
    </div>
  );
}
