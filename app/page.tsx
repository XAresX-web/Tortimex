import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Products } from "@/components/products"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Process } from "@/components/process"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { LocalBusinessSchema } from "@/components/LocalBusinessSchema"

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Products />
      <WhyChooseUs />
      <Process />
      <Contact />
      <Footer />
      <LocalBusinessSchema />
    </main>
  )
}
