import { Role } from "@/backend.d";
import SignupModal from "@/components/SignupModal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Brain,
  Code2,
  Download,
  Palette,
  PencilLine,
  Search,
  Share2,
  Sparkles,
  Star,
  Tv,
  UserCircle2,
  Video,
  Wallet,
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

const services = [
  {
    icon: Share2,
    title: "Social Media Management",
    description:
      "Manage accounts, craft viral campaigns, and grow audiences for brands targeting Gen-Z. Turn your scrolling habit into income.",
    wide: false,
  },
  {
    icon: Video,
    title: "Video Creation & Editing",
    description:
      "Create and edit short-form content, reels, YouTube videos, and branded video assets for companies.",
    wide: false,
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description:
      "Design logos, branding assets, social graphics, and visual content that turns heads and wins clients.",
    wide: false,
  },
  {
    icon: PencilLine,
    title: "Content Writing",
    description:
      "Create compelling blogs, copy, and scripts that drive real engagement for growing brands.",
    wide: false,
  },
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Build websites, apps, and digital tools using modern frameworks and real production codebases.",
    wide: false,
  },
  {
    icon: Brain,
    title: "AI Prompting & Research",
    description:
      "Shape the future of AI by crafting prompts, testing models, and evaluating outputs for cutting-edge companies.",
    wide: false,
  },
];

const steps = [
  {
    number: "01",
    icon: UserCircle2,
    title: "Create Your Profile",
    description:
      "Set up your Teenlancer profile in minutes. Showcase your skills, portfolio pieces, and what projects excite you most.",
  },
  {
    number: "02",
    icon: Search,
    title: "Browse Projects",
    description:
      "Explore real freelance jobs for students from verified companies. Filter by skill, duration, and pay — and apply with one click.",
  },
  {
    number: "03",
    icon: Wallet,
    title: "Get Paid",
    description:
      "Complete work, get reviewed, and receive secure payments directly. Build your professional reputation and earnings.",
  },
];

const faqs = [
  {
    q: "What is Funngro?",
    a: "Funngro is a platform that connects talented student freelancers (ages 14–22) — called Teenlancers — with real companies that need help with projects like social media management, video creation, graphic design, web development, and more. It's the fastest way for teens to get freelance jobs and turn skills into real income.",
  },
  {
    q: "What age do I need to be to join?",
    a: "You must be between 14 and 22 years old to join as a Teenlancer. We believe in giving young talent their first professional opportunity before they even graduate.",
  },
  {
    q: "How do I get paid?",
    a: "Payments are handled securely through our platform. Once a company approves your work, funds are released to your account. We support multiple payout methods including bank transfer and digital wallets.",
  },
  {
    q: "What kind of freelance jobs are available for students?",
    a: "You can find freelance jobs across 10+ categories including social media management, video creation & editing, graphic design, content writing, web development, and AI prompting & research. New project categories are added regularly based on industry demand.",
  },
  {
    q: "Do I need experience to get freelance jobs?",
    a: "No prior professional experience is required! Many Teenlancers start with just a passion and basic skills. Funngro is designed for beginners and intermediates alike — it's where you build your experience, not where you need to have it already.",
  },
  {
    q: "Is Funngro free to join?",
    a: "Yes! Signing up as a Teenlancer is completely free. We only take a small service fee when you successfully complete a paid project, so you never pay out-of-pocket to start earning.",
  },
];

export default function TeenPortal() {
  const [modalOpen, setModalOpen] = useState(false);

  const sharkTankSection = useFadeIn();
  const statsSection = useFadeIn();
  const bentoSection = useFadeIn();
  const howItWorks = useFadeIn();
  const faqSection = useFadeIn();
  const ctaSection = useFadeIn();

  useEffect(() => {
    document.title = "Earn & Learn | Freelance Jobs for Students | Funngro";
  }, []);

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-16 overflow-hidden hero-gradient">
        <div className="container relative mx-auto px-4 sm:px-6 py-20 md:py-28">
          <div className="max-w-4xl mx-auto text-center">
            {/* Shark Tank Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground/5 border border-foreground/10 mb-6 animate-float">
              <span className="text-lg leading-none">🦈</span>
              <span className="text-sm font-semibold text-foreground">
                As Seen on Shark Tank India
              </span>
            </div>

            {/* H1 — one per page */}
            <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground tracking-tight leading-[1.05] mb-6">
              Earn &amp; Learn —{" "}
              <span className="text-primary">Freelance Jobs for Students</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              Funngro connects ambitious teens (ages 14–22) with real companies.
              Build your portfolio, gain real experience, and start earning —
              all for free.
            </p>

            {/* Stats strip */}
            <div className="flex flex-wrap items-center justify-center gap-6 mb-10">
              {[
                { value: "45L+", label: "Users" },
                { value: "500+", label: "Companies" },
                { value: "10+", label: "Categories" },
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
                Join as Teen
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button
                onClick={scrollToServices}
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-border text-foreground hover:border-primary hover:text-primary bg-white font-semibold text-base px-8 h-12 transition-all duration-200"
              >
                <Download className="mr-2 w-4 h-4" />
                Download App
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

      {/* Featured on Shark Tank India */}
      <section
        ref={sharkTankSection.ref as React.RefObject<HTMLElement>}
        id="shark-tank"
        className={`py-16 transition-all duration-700 ${
          sharkTankSection.isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="shark-tank-band rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
              {/* Icon side */}
              <div className="flex-shrink-0 flex flex-col items-center gap-3">
                <div className="w-20 h-20 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                  <Tv className="w-10 h-10 text-white" />
                </div>
                <div className="flex items-center gap-1">
                  {["s1", "s2", "s3", "s4", "s5"].map((id) => (
                    <Star
                      key={id}
                      className="w-4 h-4 text-yellow-400"
                      fill="currentColor"
                    />
                  ))}
                </div>
              </div>

              {/* Content side */}
              <div className="text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 mb-3">
                  <span className="text-xs font-bold text-primary uppercase tracking-wider">
                    National Recognition
                  </span>
                </div>
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white mb-3">
                  Featured on Shark Tank India
                </h2>
                <p className="text-white/70 text-sm md:text-base leading-relaxed max-w-xl">
                  Funngro was featured on Shark Tank India, validating our
                  mission to empower India's next generation of student
                  freelancers. Our vision of connecting 45L+ young talents with
                  real companies has earned recognition at the highest level.
                </p>
                <div className="mt-4 flex flex-wrap gap-3 justify-center md:justify-start">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    🦈 Shark Tank India
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    🏆 Startup of the Year
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
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
              { value: "45L+", label: "Teenlancers on Platform" },
              { value: "500+", label: "Partner Companies" },
              { value: "10+", label: "Skill Categories" },
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

      {/* Skills / Services Section */}
      <section
        id="services"
        ref={bentoSection.ref as React.RefObject<HTMLElement>}
        className={`py-24 transition-all duration-700 delay-100 ${
          bentoSection.isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                10+ Categories Available
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground tracking-tight mb-4">
              Skills You Can Monetize
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              From social media to coding, your skills are in demand. Pick a
              category and start finding freelance jobs for students today.
            </p>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="light-card rounded-xl p-6 group hover:border-primary/40 hover:shadow-card-hover transition-all duration-300 cursor-default"
                  style={{ animationDelay: `${idx * 80}ms` }}
                >
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-base text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section
        id="how-it-works"
        ref={howItWorks.ref as React.RefObject<HTMLElement>}
        className={`py-24 section-alt transition-all duration-700 delay-100 ${
          howItWorks.isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 mb-4">
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                3 Simple Steps
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground tracking-tight mb-4">
              How It Works for Teens
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              Getting your first freelance job as a student has never been
              easier.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="flex flex-col items-center text-center gap-5"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  {/* Number circle */}
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full border-2 border-primary bg-primary/10 flex items-center justify-center">
                      <span className="font-display font-bold text-2xl text-primary">
                        {idx + 1}
                      </span>
                    </div>
                    <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-white border border-border shadow-xs flex items-center justify-center">
                      <Icon className="w-3.5 h-3.5 text-primary" />
                    </div>
                  </div>

                  <div>
                    <h3 className="font-display font-bold text-xl text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        id="faq"
        ref={faqSection.ref as React.RefObject<HTMLElement>}
        className={`py-24 transition-all duration-700 delay-100 ${
          faqSection.isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 mb-4">
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                  FAQs
                </span>
              </div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground tracking-tight mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground text-lg">
                Everything student freelancers need to know about joining
                Funngro and finding freelance jobs for teens.
              </p>
            </div>

            <Accordion
              type="single"
              collapsible
              className="flex flex-col gap-2"
            >
              {faqs.map((faq, idx) => (
                <AccordionItem
                  key={faq.q}
                  value={`faq-${idx}`}
                  className="light-card rounded-xl px-5 border data-[state=open]:border-primary/30 transition-all duration-200"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary hover:no-underline py-5 text-base">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
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
              <div className="text-5xl mb-6">🚀</div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground tracking-tight mb-4">
                Start Earning Today
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-8 text-lg">
                Join 45L+ users already finding freelance jobs for students on
                Funngro. Free to join. Real projects. Real pay.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  onClick={() => setModalOpen(true)}
                  size="lg"
                  className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-base px-10 h-12 transition-all duration-200 shadow-orange-sm hover:shadow-orange"
                >
                  Join as Teen
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-border text-foreground hover:border-primary hover:text-primary bg-white font-semibold text-base px-10 h-12 transition-all duration-200"
                >
                  <Download className="mr-2 w-4 h-4" />
                  Download App
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SignupModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        defaultRole={Role.teen}
      />
    </>
  );
}
