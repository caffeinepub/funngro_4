import { Link } from "@tanstack/react-router";
import { Heart, Zap } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
                <Zap
                  className="w-4 h-4 text-primary-foreground"
                  strokeWidth={2.5}
                />
              </div>
              <span className="font-display font-bold text-xl text-foreground tracking-tight">
                Funn<span className="text-primary">gro</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Connecting ambitious teens with forward-thinking companies. The
              future of work starts here.
            </p>
            <p className="text-xs text-muted-foreground">
              As featured on{" "}
              <span className="font-semibold text-foreground">
                Shark Tank India
              </span>{" "}
              🦈
            </p>
          </div>

          {/* Platform Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-sm text-foreground uppercase tracking-wider">
              Platform
            </h3>
            <nav className="flex flex-col gap-2.5" aria-label="Platform links">
              <Link
                to="/"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                For Teens — Earn &amp; Learn
              </Link>
              <Link
                to="/companies"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                For Companies — Hire Smart Talent
              </Link>
              <a
                href="#how-it-works"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                How It Works
              </a>
              <a
                href="#faq"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                FAQ
              </a>
            </nav>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-sm text-foreground uppercase tracking-wider">
              Legal
            </h3>
            <nav className="flex flex-col gap-2.5" aria-label="Legal links">
              <a
                href="/privacy"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="/contact"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Contact Us
              </a>
            </nav>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {currentYear} Funngro. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground flex items-center gap-1">
            Built with{" "}
            <Heart
              className="w-3 h-3 text-primary inline"
              fill="currentColor"
            />{" "}
            using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "funngro")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
