import Contact from "@/components/shared/Contact";
import Header from "@/components/shared/Header";
import Hero from "@/components/shared/Hero";
import Navbar from "@/components/shared/Navbar";
import Team from "@/components/shared/Team";
import { Button } from "@/components/ui/button";
import { Separator } from "@radix-ui/react-separator";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="flex  flex-col gap-8">
        <Header />
        <Hero />
        {/* <Team /> */}
        <Contact />
      </section>
    </>
  );
}
