import { Role } from "@/backend.d";
import SignupModal from "@/components/SignupModal";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ChevronDown,
  Clipboard,
  Clock,
  DollarSign,
  Lightbulb,
  Quote,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingUp,
  UserCheck,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

// Intersection Observer hook for fade-in animations
function useFadeIn() {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

const processSteps = [
  {
    number: "01",
    icon: Clipboard,
    title: "Post",
    subtitle: "Describe Your Project",
    description:
      "Tell us what you need — skills required, timeline, and budget. Takes just 5 minutes. No complicated forms, no gatekeeping.",
  },
  {
    number: "02",
    icon: UserCheck,
    title: "Match",
    subtitle: "We Find Your Talent",
    description:
      "Our team hand-picks the best Teenlancers for your project within 48 hours. Every candidate is pre-vetted and assessed.",
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Scale",
    subtitle: "Build Your Pipeline",
    description:
      "Review work, request revisions, and build a reliable talent pipeline. Grow fast with fresh, motivated contributors.",
  },
];

const features = [
  {
    icon: DollarSign,
    title: "Cost-Effective",
    description:
      "Get up to 60% savings compared to traditional agencies — without compromising on quality or creativity.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description:
      "Most projects are matched within 48 hours and delivered in days, not weeks. Speed is a competitive advantage.",
  },
  {
    icon: Lightbulb,
    title: "Fresh Perspective",
    description:
      "Gen-Z Teenlancers bring native digital thinking, trend awareness, and creative energy that seasoned pros often lack.",
  },
  {
    icon: ShieldCheck,
    title: "Pre-Vetted Talent",
    description:
      "Every Teenlancer is screened for skills and professionalism. You only see the best — no time wasted on bad fits.",
  },
];

const testimonials = [
  {
    quote:
      "We hired a Teenlancer to help with our AI prompting and the quality blew us away. Faster and more creative than any agency we've used. Will absolutely hire again.",
    name: "Sarah Chen",
    role: "Head of Product",
    company: "Nexus AI Labs",
    initials: "SC",
  },
  {
    quote:
      "Funngro connected us with a brilliant 19-year-old who rebuilt our landing page in 3 days. The cost savings were real — and the energy was infectious.",
    name: "Marcus Rivera",
    role: "Founder & CEO",
    company: "GrowthStack",
    initials: "MR",
  },
  {
    quote:
      "Our social media content has never been more on-point. These Teenlancers literally live on the platforms we're trying to grow. It's an unfair advantage.",
    name: "Priya Nair",
    role: "Marketing Director",
    company: "Orbit Commerce",
    initials: "PN",
  },
];

export default function CompanyPortal() {
  const [modalOpen, setModalOpen] = useState(false);

  const statsSection = useFadeIn();
  const processSection = useFadeIn();
  const featuresSection = useFadeIn();
  const testimonialsSection = useFadeIn();
  const ctaSection = useFadeIn();

  const scrollToProcess = () => {
    document.getElementById("process")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('/assets/generated/hero-bg.dim_1600x900.jpg')",
          }}
          aria-hidden="true"
        />
        {/* Overlay — slightly different tint for company page */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.147 0 0 / 0.95) 0%, oklch(0.15 0.01 135 / 0.8) 50%, oklch(0.147 0 0 / 0.93) 100%)",
          }}
          aria-hidden="true"
        />
        {/* Neon gradient accent */}
        <div
          className="absolute top-1/3 right-0 w-[500px] h-[500px] opacity-10 blur-[100px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse, oklch(0.87 0.28 135) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />

        <div className="container relative mx-auto px-4 sm:px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-8 animate-float">
              <Star className="w-3.5 h-3.5 text-primary" fill="currentColor" />
              <span className="text-sm font-medium text-primary">
                500+ Companies Trust Funngro
              </span>
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse-neon" />
            </div>

            {/* Headline */}
            <h1 className="font-display font-bold text-5xl sm:text-6xl md:text-7xl text-foreground tracking-tight leading-none mb-6">
              Scale Your Business with{" "}
              <span className="text-primary [text-shadow:0_0_40px_oklch(0.87_0.28_135_/_0.5)]">
                Gen-Z Talent.
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              Access a curated pool of motivated Teenlancers ready to tackle
              your projects — fast, affordable, and innovative. Move faster than
              your competition.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                onClick={() => setModalOpen(true)}
                size="lg"
                className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-base px-8 py-3 h-12 transition-all duration-200 hover:shadow-neon"
              >
                Post a Project
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button
                onClick={scrollToProcess}
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-border text-foreground hover:border-primary hover:text-primary bg-transparent font-semibold text-base px-8 py-3 h-12 transition-all duration-200"
              >
                Learn More
                <ChevronDown className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <ChevronDown className="w-5 h-5 text-muted-foreground animate-bounce" />
        </div>
      </section>

      {/* Stats Bar */}
      <section
        ref={statsSection.ref as React.RefObject<HTMLElement>}
        className={`border-y border-border bg-card transition-all duration-700 ${
          statsSection.isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 py-10">
          <div className="grid grid-cols-3 gap-4 md:gap-8">
            {[
              { value: "48h", label: "Average Match Time" },
              { value: "4.9/5", label: "Average Rating" },
              { value: "60%", label: "Cost Savings vs. Agencies" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display font-bold text-3xl sm:text-4xl text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3-Step Process */}
      <section
        id="process"
        ref={processSection.ref as React.RefObject<HTMLElement>}
        className={`py-24 transition-all duration-700 delay-100 ${
          processSection.isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-medium text-primary uppercase tracking-wider">
                Simple Process
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground tracking-tight mb-4">
              From Idea to Execution <br />
              <span className="text-primary">in 3 Steps</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              No lengthy onboarding, no guesswork. Post, match, and ship —
              that's it.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Connector line (desktop) */}
            <div
              className="hidden md:block absolute top-10 left-[16.67%] right-[16.67%] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
              aria-hidden="true"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {processSteps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.number}
                    className="flex flex-col gap-5"
                    style={{ animationDelay: `${idx * 120}ms` }}
                  >
                    {/* Step header */}
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full border-2 border-primary bg-primary/10 flex items-center justify-center shadow-neon-sm flex-shrink-0 relative">
                        <Icon className="w-6 h-6 text-primary" />
                        <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                          <span className="text-primary-foreground font-bold text-xs">
                            {idx + 1}
                          </span>
                        </div>
                      </div>
                      <div>
                        <div className="text-xs font-bold text-primary uppercase tracking-widest mb-0.5">
                          {step.title}
                        </div>
                        <h3 className="font-display font-bold text-lg text-foreground">
                          {step.subtitle}
                        </h3>
                      </div>
                    </div>

                    {/* Description card */}
                    <div className="glass-card rounded-lg p-5 flex-1">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why Funngro for Companies */}
      <section
        ref={featuresSection.ref as React.RefObject<HTMLElement>}
        className={`py-24 bg-card/30 transition-all duration-700 delay-100 ${
          featuresSection.isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 mb-4">
              <span className="text-xs font-medium text-primary uppercase tracking-wider">
                Why Funngro
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground tracking-tight mb-4">
              The Smarter Way to
              <br />
              <span className="text-primary">Get Work Done</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Funngro isn't just cheap labor — it's a strategic advantage for
              companies that move fast.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="glass-card rounded-lg p-6 group hover:border-primary/50 hover:shadow-neon transition-all duration-300"
                  style={{ animationDelay: `${idx * 80}ms` }}
                >
                  <div className="w-10 h-10 rounded-md bg-primary/15 flex items-center justify-center mb-4 group-hover:bg-primary/25 transition-colors">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-base text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        ref={testimonialsSection.ref as React.RefObject<HTMLElement>}
        className={`py-24 transition-all duration-700 delay-100 ${
          testimonialsSection.isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 mb-4">
              <Star className="w-3.5 h-3.5 text-primary" fill="currentColor" />
              <span className="text-xs font-medium text-primary uppercase tracking-wider">
                Social Proof
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground tracking-tight mb-4">
              Companies
              <br />
              <span className="text-primary">Love Funngro</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial, idx) => (
              <div
                key={testimonial.name}
                className="glass-card rounded-lg p-6 flex flex-col gap-4 hover:border-primary/30 hover:shadow-neon-sm transition-all duration-300"
                style={{ animationDelay: `${idx * 80}ms` }}
              >
                <Quote className="w-6 h-6 text-primary/50 flex-shrink-0" />
                <p className="text-sm text-muted-foreground leading-relaxed italic flex-1">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3 pt-2 border-t border-border">
                  {/* Avatar */}
                  <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-sm">
                      {testimonial.initials}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                  {/* Stars */}
                  <div className="ml-auto flex gap-0.5" aria-label="5 stars">
                    {["s1", "s2", "s3", "s4", "s5"].map((id) => (
                      <Star
                        key={id}
                        className="w-3 h-3 text-primary"
                        fill="currentColor"
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section
        ref={ctaSection.ref as React.RefObject<HTMLElement>}
        className={`py-24 transition-all duration-700 delay-100 ${
          ctaSection.isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="relative max-w-4xl mx-auto text-center glass-card rounded-2xl p-12 md:p-16 overflow-hidden">
            {/* Background accent */}
            <div
              className="absolute inset-0 opacity-5 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at center, oklch(0.87 0.28 135) 0%, transparent 70%)",
              }}
              aria-hidden="true"
            />
            <div className="relative">
              <div className="text-5xl mb-6">⚡</div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground tracking-tight mb-4">
                Ready to Hire Smarter?
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-8 text-lg">
                Join 500+ forward-thinking companies using Funngro to move
                faster, spend less, and tap into the most innovative generation
                yet.
              </p>
              <Button
                onClick={() => setModalOpen(true)}
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-base px-10 py-3 h-12 transition-all duration-200 hover:shadow-neon"
              >
                Post a Project
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <SignupModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        defaultRole={Role.company}
      />
    </>
  );
}
