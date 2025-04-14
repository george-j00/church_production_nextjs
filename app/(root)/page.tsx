import Contact from "@/components/pages/contact/Contact"
import EventPage from "@/components/pages/event/Events"
import Header from "@/components/pages/landing/Header"
import Hero from "@/components/pages/hero/Hero"
import StAntonyPage from "@/components/pages/st-antony/StAntonyPage"

export default function Home() {
  return (
    <>
      <section className="flex flex-col gap-8">
        <Header />
        <StAntonyPage />
        <EventPage />
        <Hero />
        <Contact />
      </section>
    </>
  )
}
