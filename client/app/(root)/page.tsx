import Header from "@/components/shared/Header";
import Hero from "@/components/shared/Hero";
import Navbar from "@/components/shared/Navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="flex flex-col gap-8">
          <Hero />
      </section>
    </>
  );
}
