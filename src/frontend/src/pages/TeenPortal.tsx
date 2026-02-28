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
  ChevronDown,
  Code2,
  Database,
  Palette,
  PencilLine,
  Search,
  Share2,
  Sparkles,
  Star,
  UserCircle2,
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
    icon: Brain,
    title: "AI Prompting & LLM Testing",
    description:
      "Shape the future of AI by crafting prompts, testing models, and evaluating outputs for cutting-edge companies.",
    wide: true,
  },
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Build websites, apps, and digital tools using modern frameworks and real production codebases.",
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
    icon: Share2,
    title: "Social Media",
    description:
      "Manage accounts, craft viral campaigns, and grow audiences for companies targeting Gen-Z.",
    wide: false,
  },
  {
    icon: Database,
    title: "Data Entry & Research",
    description:
      "Power business decisions with accurate data collection, market research, and competitor analysis.",
    wide: false,
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description:
      "Design logos, branding assets, social graphics, and visual content that turns heads.",
    wide: true,
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
      "Explore real projects from verified companies. Filter by skill, duration, and pay — and apply with one click.",
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
    a: "Funngro is a platform that connects talented young people (ages 14–22) — called Teenlancers — with real companies that need help with projects like AI prompting, web development, content writing, and more. It's the fastest way to turn your skills into real income and portfolio work.",
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
    q: "What kind of projects are available?",
    a: "You can find projects across 10+ categories including AI prompting & LLM testing, web development, content writing, social media management, data entry & research, and graphic design. New categories are added regularly based on industry demand.",
  },
  {
    q: "Do I need experience to join?",
    a: "No prior professional experience is required! Many Teenlancers start with just a passion and basic skills. Funngro is designed for beginners and intermediates alike — it's where you build your experience, not where you need to have it already.",
  },
  {
    q: "Is Funngro free to join?",
    a: "Yes! Signing up as a Teenlancer is completely free. We only take a small service fee when you successfully complete a paid project, so you never pay out-of-pocket to start earning.",
  },
];

export default function TeenPortal() {
  const [modalOpen, setModalOpen] = useState(false);

  const statsSection = useFadeIn();
  const bentoSection = useFadeIn();
  const howItWorks = useFadeIn();
  const faqSection = useFadeIn();
  const ctaSection = useFadeIn();

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
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
        {/* Overlay */}
        <div className="absolute inset-0 hero-overlay" aria-hidden="true" />
        {/* Neon gradient accent */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-20 blur-[80px] pointer-events-none"
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
                2,000+ Teenlancers Earning
              </span>
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse-neon" />
            </div>

            {/* Headline */}
            <h1 className="font-display font-bold text-5xl sm:text-6xl md:text-7xl text-foreground tracking-tight leading-none mb-6">
              Your First Step into{" "}
              <span className="text-primary [text-shadow:0_0_40px_oklch(0.87_0.28_135_/_0.5)]">
                the Professional World.
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              Funngro connects ambitious teens (14–22) with real companies.
              Build your portfolio, earn real money, and launch your career —
              starting today.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                onClick={() => setModalOpen(true)}
                size="lg"
                className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-base px-8 py-3 h-12 transition-all duration-200 hover:shadow-neon"
              >
                Join as Teen
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button
                onClick={scrollToServices}
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-border text-foreground hover:border-primary hover:text-primary bg-transparent font-semibold text-base px-8 py-3 h-12 transition-all duration-200"
              >
                See How It Works
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
              { value: "2,000+", label: "Teenlancers" },
              { value: "500+", label: "Companies" },
              { value: "10+", label: "Project Categories" },
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

      {/* Bento Grid — Services */}
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
              <span className="text-xs font-medium text-primary uppercase tracking-wider">
                What You Can Do
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground tracking-tight mb-4">
              Skills Companies
              <br />
              <span className="text-primary">Actually Need</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              From AI to design, your skills are in demand. Pick a category and
              start earning on projects that matter.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid-bento">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className={`glass-card rounded-lg p-6 group hover:border-primary/50 hover:shadow-neon transition-all duration-300 cursor-default ${
                    service.wide ? "bento-wide" : ""
                  }`}
                  style={{ animationDelay: `${idx * 80}ms` }}
                >
                  <div className="w-10 h-10 rounded-md bg-primary/15 flex items-center justify-center mb-4 group-hover:bg-primary/25 transition-colors">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-foreground mb-2">
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
        className={`py-24 bg-card/30 transition-all duration-700 delay-100 ${
          howItWorks.isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 mb-4">
              <span className="text-xs font-medium text-primary uppercase tracking-wider">
                3 Simple Steps
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground tracking-tight mb-4">
              How Funngro Works
              <br />
              <span className="text-primary">for Teens</span>
            </h2>
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
                    <div className="w-16 h-16 rounded-full border-2 border-primary bg-primary/10 flex items-center justify-center shadow-neon-sm">
                      <span className="font-display font-bold text-2xl text-primary">
                        {idx + 1}
                      </span>
                    </div>
                    <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-background border border-border flex items-center justify-center">
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

                  {/* Arrow connector (desktop only) */}
                  {idx < steps.length - 1 && (
                    <div
                      className="hidden md:block absolute"
                      aria-hidden="true"
                    />
                  )}
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
                <span className="text-xs font-medium text-primary uppercase tracking-wider">
                  FAQs
                </span>
              </div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground tracking-tight mb-4">
                Questions? <span className="text-primary">Answered.</span>
              </h2>
              <p className="text-muted-foreground">
                Everything you need to know about joining Funngro as a
                Teenlancer.
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
                  className="glass-card rounded-lg px-5 border-0 data-[state=open]:border-primary/30 data-[state=open]:shadow-neon-sm transition-all duration-200"
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
              <div className="text-5xl mb-6">🚀</div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground tracking-tight mb-4">
                Ready to Start Earning?
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-8 text-lg">
                Join 2,000+ Teenlancers already building their future with
                Funngro. Free to join. Real projects. Real pay.
              </p>
              <Button
                onClick={() => setModalOpen(true)}
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-base px-10 py-3 h-12 transition-all duration-200 hover:shadow-neon"
              >
                Join as Teen
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
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
