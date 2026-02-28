import { Role } from "@/backend.d";
import SignupModal from "@/components/SignupModal";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X, Zap } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const location = useLocation();

  const isCompanyPage = location.pathname === "/companies";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  // biome-ignore lint/correctness/useExhaustiveDependencies: intentional — only run when pathname changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/90 backdrop-blur-xl border-b border-border shadow-card-dark"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-7 h-7 rounded-sm bg-primary flex items-center justify-center shadow-neon-sm">
                <Zap
                  className="w-4 h-4 text-primary-foreground"
                  strokeWidth={2.5}
                />
              </div>
              <span className="font-display font-bold text-xl text-foreground tracking-tight">
                Funn<span className="text-primary">gro</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              <Link
                to="/"
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  !isCompanyPage
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                For Teens
              </Link>
              <Link
                to="/companies"
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  isCompanyPage
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                For Companies
              </Link>
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <Button
                onClick={() => setModalOpen(true)}
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-5 transition-all duration-200 hover:shadow-neon"
              >
                {isCompanyPage ? "Post a Project" : "Join as Teen"}
              </Button>
            </div>

            {/* Mobile hamburger */}
            <button
              type="button"
              className="md:hidden p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
              <Link
                to="/"
                className={`px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                  !isCompanyPage
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                For Teens
              </Link>
              <Link
                to="/companies"
                className={`px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                  isCompanyPage
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                For Companies
              </Link>
              <div className="pt-2 pb-1">
                <Button
                  onClick={() => {
                    setIsOpen(false);
                    setModalOpen(true);
                  }}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold transition-all duration-200 hover:shadow-neon"
                >
                  {isCompanyPage ? "Post a Project" : "Join as Teen"}
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      <SignupModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        defaultRole={isCompanyPage ? Role.company : Role.teen}
      />
    </>
  );
}
