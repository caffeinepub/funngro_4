import { Role } from "@/backend.d";
import SignupModal from "@/components/SignupModal";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
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
  Users,
  Zap,
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
    subtitle: "Post in 2 Minutes",
    description:
      "Describe your project in under 2 minutes — skills needed, timeline, budget. No complicated forms, no gatekeeping. Our streamlined process gets your project live instantly.",
  },
  {
    number: "02",
    icon: UserCheck,
    title: "Match",
    subtitle: "We Find Your Talent",
    description:
      "Our team hand-picks the best student freelancers for your project within 48 hours. Every candidate is pre-vetted and assessed from our 45L+ user pool.",
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Scale",
    subtitle: "Build Your Pipeline",
    description:
      "Review work, request revisions, and build a reliable talent pipeline. Grow fast with fresh, motivated contributors from India's largest student talent network.",
  },
];

const features = [
  {
    icon: DollarSign,
    title: "Cost-Effective Solutions",
    description:
      "Get up to 60% savings compared to traditional agencies. Hire smart talent from our 45L+ user pool without compromising quality.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description:
      "Post a project in 2 minutes. Most projects are matched within 48 hours and delivered in days, not weeks.",
  },
  {
    icon: Lightbulb,
    title: "Fresh, Innovative Thinking",
    description:
      "Student freelancers bring native digital thinking, trend awareness, and creative energy that seasoned pros often lack.",
  },
  {
    icon: ShieldCheck,
    title: "Pre-Vetted Talent Pool",
    description:
      "Every student freelancer is screened for skills and professionalism from our 45L+ network. You only see the best — no time wasted on bad fits.",
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
      "Our social media content has never been more on-point. These student freelancers literally live on the platforms we're trying to grow. It's an unfair advantage.",
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

  useEffect(() => {
    document.title =
      "Hire Smart Talent | Student Freelancers for Your Business | Funngro";
  }, []);

  const scrollToProcess = () => {
    document.getElementById("process")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-16 overflow-hidden hero-gradient">
        <div className="container relative mx-auto px-4 sm:px-6 py-20 md:py-28">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/8 border border-primary/20 mb-6 animate-float">
              <Users className="w-3.5 h-3.5 text-primary" />
              <span className="text-sm font-semibold text-primary">
                500+ Companies Trust Funngro
              </span>
            </div>

            {/* H1 — one per page */}
            <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground tracking-tight leading-[1.05] mb-6">
              Smart Talent Solutions —{" "}
              <span className="text-primary">
                Hire Smart Talent for Your Business
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              Post a project in 2 minutes and tap into 45L+ motivated student
              freelancers. Get cost-effective, innovative work done by India's
              best young talent.
            </p>

            {/* Stats strip */}
            <div className="flex flex-wrap items-center justify-center gap-6 mb-10">
              {[
                { value: "45L+", label: "Users" },
                { value: "2 Min", label: "to Post" },
                { value: "60%", label: "Cost Savings" },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center gap-2">
                  <span className="font-display font-bold text-2xl text-primary">
                    {stat.value}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                onClick={() => setModalOpen(true)}
                size="lg"
                className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-base px-8 h-12 transition-all duration-200 shadow-orange-sm hover:shadow-orange"
              >
                Post a Project
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button
                onClick={scrollToProcess}
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-border text-foreground hover:border-primary hover:text-primary bg-white font-semibold text-base px-8 h-12 transition-all duration-200"
              >
                See How It Works
                <Zap className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative bottom edge */}
        <div
          className="h-8 bg-white"
          style={{ clipPath: "ellipse(60% 100% at 50% 100%)" }}
          aria-hidden="true"
        />
      </section>

      {/* Stats Bar */}
      <section
        ref={statsSection.ref as React.RefObject<HTMLElement>}
        className={`border-y border-border section-alt transition-all duration-700 ${
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
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                Simple Process
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground tracking-tight mb-4">
              Post a Project in 2 Minutes
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
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
                      <div className="w-16 h-16 rounded-full border-2 border-primary bg-primary/10 flex items-center justify-center flex-shrink-0 relative">
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
                    <div className="light-card rounded-xl p-5 flex-1">
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
        className={`py-24 section-alt transition-all duration-700 delay-100 ${
          featuresSection.isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 mb-4">
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                Why Funngro
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground tracking-tight mb-4">
              Why Businesses Choose Funngro
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              Funngro isn't just cost-effective labor — it's a strategic
              advantage for companies that move fast and hire smart talent.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="light-card rounded-xl p-6 group hover:border-primary/40 hover:shadow-card-hover transition-all duration-300"
                  style={{ animationDelay: `${idx * 80}ms` }}
                >
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
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
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                Client Reviews
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground tracking-tight mb-4">
              What Our Clients Say
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              Hundreds of businesses have hired smart talent through Funngro and
              never looked back.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial, idx) => (
              <div
                key={testimonial.name}
                className="light-card rounded-xl p-6 flex flex-col gap-4 hover:border-primary/30 hover:shadow-card-hover transition-all duration-300"
                style={{ animationDelay: `${idx * 80}ms` }}
              >
                <Quote className="w-6 h-6 text-primary/40 flex-shrink-0" />
                <p className="text-sm text-muted-foreground leading-relaxed italic flex-1">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3 pt-2 border-t border-border">
                  {/* Avatar */}
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
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
                        className="w-3 h-3 text-yellow-400"
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
        className={`py-24 section-alt transition-all duration-700 delay-100 ${
          ctaSection.isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="relative max-w-4xl mx-auto text-center rounded-2xl p-12 md:p-16 overflow-hidden bg-white border border-border shadow-card">
            {/* Orange accent top line */}
            <div
              className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-primary"
              aria-hidden="true"
            />
            <div className="relative">
              <div className="text-5xl mb-6">⚡</div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground tracking-tight mb-4">
                Hire Smart Talent Today
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-8 text-lg">
                Join 500+ forward-thinking companies using Funngro's 45L+ user
                pool to access cost-effective, innovative work. Post a project
                in 2 minutes.
              </p>
              <Button
                onClick={() => setModalOpen(true)}
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-base px-10 h-12 transition-all duration-200 shadow-orange-sm hover:shadow-orange"
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
