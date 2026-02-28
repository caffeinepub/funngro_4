import { Role } from "@/backend.d";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useActor } from "@/hooks/useActor";
import { CheckCircle2, Loader2, Zap } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface SignupModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  defaultRole?: Role;
}

export default function SignupModal({
  open,
  onOpenChange,
  defaultRole = Role.teen,
}: SignupModalProps) {
  const { actor } = useActor();
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<Role>(defaultRole);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }
    if (!email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!actor) {
      setError("Service unavailable. Please try again.");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      await actor.addSignup(email.trim(), role);
      setIsSuccess(true);
      toast.success(
        role === Role.teen
          ? "Welcome to Funngro! We'll be in touch soon."
          : "Project posted! We'll match you with talent shortly.",
      );
      setTimeout(() => {
        onOpenChange(false);
        setIsSuccess(false);
        setEmail("");
      }, 2000);
    } catch (err) {
      console.error("Signup error:", err);
      setError("Something went wrong. Please try again.");
      toast.error("Failed to submit. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleOpenChange = (val: boolean) => {
    if (!isLoading) {
      onOpenChange(val);
      if (!val) {
        setTimeout(() => {
          setIsSuccess(false);
          setError(null);
          setEmail("");
          setRole(defaultRole);
        }, 300);
      }
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="bg-card border-border sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center gap-2 mb-1">
            <div className="w-7 h-7 rounded-sm bg-primary flex items-center justify-center">
              <Zap
                className="w-4 h-4 text-primary-foreground"
                strokeWidth={2.5}
              />
            </div>
            <span className="font-display font-bold text-lg text-foreground">
              Funngro
            </span>
          </div>
          <DialogTitle className="text-xl font-bold text-foreground">
            {role === Role.teen
              ? "Join as a Teenlancer"
              : "Post Your First Project"}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            {role === Role.teen
              ? "Get early access and be the first to know when we launch."
              : "Tell us about your project and we'll match you with the right talent."}
          </DialogDescription>
        </DialogHeader>

        {isSuccess ? (
          <div className="flex flex-col items-center gap-4 py-6">
            <CheckCircle2 className="w-14 h-14 text-primary animate-fade-in-up" />
            <p className="text-center text-foreground font-semibold text-lg">
              {role === Role.teen
                ? "You're on the list! 🎉"
                : "We got your request! 🚀"}
            </p>
            <p className="text-center text-muted-foreground text-sm">
              We'll reach out to {email} shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-2">
            {/* Role Toggle */}
            <div className="flex rounded-md border border-border overflow-hidden">
              <button
                type="button"
                onClick={() => setRole(Role.teen)}
                className={`flex-1 py-2.5 text-sm font-medium transition-colors ${
                  role === Role.teen
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted/50 text-muted-foreground hover:text-foreground"
                }`}
              >
                I'm a Teen
              </button>
              <button
                type="button"
                onClick={() => setRole(Role.company)}
                className={`flex-1 py-2.5 text-sm font-medium transition-colors ${
                  role === Role.company
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted/50 text-muted-foreground hover:text-foreground"
                }`}
              >
                I'm a Company
              </button>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <Label
                htmlFor="signup-email"
                className="text-sm font-medium text-foreground"
              >
                Email Address
              </Label>
              <Input
                id="signup-email"
                type="email"
                placeholder={
                  role === Role.teen ? "your@email.com" : "company@business.com"
                }
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError(null);
                }}
                autoComplete="email"
                className="bg-input border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary/30"
                disabled={isLoading}
                required
              />
              {error && (
                <p className="text-destructive text-xs mt-0.5">{error}</p>
              )}
            </div>

            <Button
              type="submit"
              disabled={isLoading || !email.trim()}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold py-2.5 transition-all duration-200 hover:shadow-neon disabled:opacity-50"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  {role === Role.teen ? "Joining..." : "Posting..."}
                </>
              ) : role === Role.teen ? (
                "Join as Teen →"
              ) : (
                "Post a Project →"
              )}
            </Button>

            <p className="text-xs text-center text-muted-foreground">
              No spam. We respect your privacy.{" "}
              <a
                href="/privacy"
                className="underline hover:text-foreground transition-colors"
              >
                Privacy Policy
              </a>
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
