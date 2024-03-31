import Header from "@/components/shared/Header";
import { Toaster } from "@/components/ui/toaster";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col">
      <main className="flex-1">{children}</main>
      <Toaster />

    </div>
  );
}
