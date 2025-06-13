import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronDown, Menu } from "lucide-react"

import { Button } from "primereact/button"
import { ServiceCard } from "@/components/service-card"
import { GallerySection } from "@/components/gallery-section"
import { QuoteForm } from "@/components/quote-form"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="JEM Aviation Detailing" width={40} height={40} className="h-10 w-auto" />
            <span className="text-xl font-bold tracking-tight">JEM Aviation</span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="#services" className="text-sm font-medium hover:text-primary">
              Services
            </Link>
            <Link href="#gallery" className="text-sm font-medium hover:text-primary">
              Gallery
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-primary">
              About
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link href="#quote" className="hidden md:flex">
              <Button className="flex items-center">
                Get a Quote <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Button
              outlined
              rounded
              className="md:hidden"
              icon={<Menu className="h-5 w-5" />}
              aria-label="Toggle menu"
            />
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[90vh] overflow-hidden bg-black">
          <div className="absolute inset-0 z-10 bg-black/50" />
          <Image src="/hero-image.jpg" alt="Detailed private jet" fill priority className="object-cover" />
          <div className="container relative z-20 flex h-full flex-col items-center justify-center text-center text-white">
            <div className="flex items-center justify-center mb-6">
              <Image
                src="/logo.png"
                alt="JEM Aviation Detailing Logo"
                width={120}
                height={120}
                className="h-24 w-auto"
              />
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              JEM Aviation Detailing
            </h1>
            <p className="mt-4 max-w-3xl text-xl font-light italic">"Cut like a Diamond, Cleaned to Fly"</p>
            <p className="mt-6 max-w-2xl text-lg">
              Premium detailing services for private aircraft owners. We treat your plane with the care it deserves.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link href="#services">
                <Button size="large" label="Our Services" />
              </Link>
              <Link href="#quote">
                <Button size="large" outlined label="Request a Quote" />
              </Link>
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2">
            <ChevronDown className="h-10 w-10 animate-bounce text-white" />
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-white">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Our Detailing Packages</h2>
              <p className="mt-4 text-lg text-muted-foreground">Tailored services for every type of aircraft</p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <ServiceCard
                title="Essential Detail"
                description="Complete exterior wash, dry and polish. Basic interior cleaning including vacuuming, dusting, and glass cleaning."
                price="Starting at $299"
                features={[
                  "Exterior hand wash",
                  "Dry and polish",
                  "Interior vacuuming",
                  "Glass cleaning",
                  "Basic surface wipe-down",
                ]}
                icon="single-engine"
                recommended={false}
              />

              <ServiceCard
                title="Premium Detail"
                description="Comprehensive exterior and interior detailing with paint protection and leather conditioning."
                price="Starting at $599"
                features={[
                  "Everything in Essential",
                  "Paint correction",
                  "Ceramic coating",
                  "Leather conditioning",
                  "Metal polishing",
                  "Carpet shampooing",
                ]}
                icon="twin-engine"
                recommended={true}
              />

              <ServiceCard
                title="Diamond Detail"
                description="The ultimate in aircraft detailing. Complete restoration and protection inside and out."
                price="Starting at $999"
                features={[
                  "Everything in Premium",
                  "Full paint correction",
                  "Long-lasting ceramic protection",
                  "Complete interior restoration",
                  "Engine bay detailing",
                  "Landing gear detailing",
                  "12-month protection guarantee",
                ]}
                icon="jet"
                recommended={false}
              />
            </div>

            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-6">
                Custom packages available for all aircraft types and specific needs
              </p>
              <Link href="#quote">
                <Button label="Request Custom Quote" />
              </Link>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <GallerySection />

        {/* About Section */}
        <section id="about" className="py-20 bg-navy-50">
          <div className="container">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About JEM Aviation Detailing</h2>
                <p className="mt-4 text-lg">
                  At JEM Aviation Detailing, we understand that your aircraft is more than just a mode of
                  transportation—it's an investment and a reflection of your standards.
                </p>
                <p className="mt-4">
                  Founded by aviation enthusiasts with years of experience in both aircraft maintenance and premium
                  detailing, we bring specialized knowledge and techniques to every job.
                </p>
                <p className="mt-4">
                  We use only aviation-approved, environmentally friendly products that are safe for your aircraft's
                  surfaces while delivering exceptional results.
                </p>
                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4">Why Choose Us?</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 h-5 w-5 flex-shrink-0 rounded-full bg-primary text-white flex items-center justify-center">
                        ✓
                      </div>
                      <span>Aviation-specific expertise and training</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 h-5 w-5 flex-shrink-0 rounded-full bg-primary text-white flex items-center justify-center">
                        ✓
                      </div>
                      <span>Aircraft-safe, premium products</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 h-5 w-5 flex-shrink-0 rounded-full bg-primary text-white flex items-center justify-center">
                        ✓
                      </div>
                      <span>Fully insured and professional service</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 h-5 w-5 flex-shrink-0 rounded-full bg-primary text-white flex items-center justify-center">
                        ✓
                      </div>
                      <span>Service at your hangar or preferred location</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative h-[500px] rounded-lg overflow-hidden">
                <Image src="/about-image.jpg" alt="JEM Aviation Detailing team at work" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What Our Clients Say</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Trusted by private aircraft owners across the country
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                      JD
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold">John D.</h4>
                    <p className="text-sm text-muted-foreground">Cessna 172 Owner</p>
                  </div>
                </div>
                <p className="italic">
                  "JEM transformed my Cessna. Their attention to detail is remarkable, and my plane looks better than
                  when I first bought it. Highly recommended!"
                </p>
              </div>

              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                      SM
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold">Sarah M.</h4>
                    <p className="text-sm text-muted-foreground">Cirrus SR22 Owner</p>
                  </div>
                </div>
                <p className="italic">
                  "The Diamond Detail package was worth every penny. My Cirrus hasn't looked this good since it left the
                  factory. The ceramic coating has made maintenance so much easier."
                </p>
              </div>

              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                      RB
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold">Robert B.</h4>
                    <p className="text-sm text-muted-foreground">Phenom 300 Owner</p>
                  </div>
                </div>
                <p className="italic">
                  &quot;JEM&apos;s team understands jets. They handled my Phenom with expertise and delivered exceptional results.
                  Their service is prompt, professional, and thorough.&quot;
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quote Form Section */}
        <QuoteForm />
      </main>

      <Footer />
    </div>
  )
}
