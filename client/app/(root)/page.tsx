import Contact from "@/components/shared/Contact";
import Header from "@/components/shared/Header";
import Hero from "@/components/shared/Hero";

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
