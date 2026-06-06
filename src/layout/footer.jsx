import {
  ArrowUpRight,
  GitBranch,
  Mail,
  MapPin,
  MessageCircle,
  Network,
  Sparkles,
} from "lucide-react";

const socialLinks = [
  {
    icon: GitBranch,
    href: "https://github.com/Theranjanayush",
    label: "GitHub",
  },
  {
    icon: Network,
    href: "https://linkedin.com/in/theranjanayush",
    label: "LinkedIn",
  },
  {
    icon: MessageCircle,
    href: "https://twitter.com/theranjanayush",
    label: "Twitter",
  },
];

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-border">
      <div className="absolute inset-0 bg-linear-to-b from-surface/40 to-background" />
      <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-linear-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -right-24 top-8 h-64 w-64 rounded-full bg-highlight/10 blur-3xl" />

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="glass-strong rounded-2xl p-6 md:p-8">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.7fr_0.85fr] lg:items-start">
            <div className="space-y-5">
              <a href="#" className="inline-flex items-center gap-2 text-2xl font-bold tracking-tight">
                Ayush Ranjan<span className="text-primary">.</span>
              </a>
              <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
                Building clean, scalable web experiences with React, backend
                systems, and a problem-solving mindset.
              </p>
              <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/40 px-3 py-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  Kolkata
                </span>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background/40 px-3 py-2 hover:border-primary/50 hover:text-foreground transition-colors"
                >
                  <Mail className="w-4 h-4 text-primary" />
                  Let's build something
                </a>
              </div>
            </div>

            <nav>
              <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
                Navigate
              </p>
              <div className="grid grid-cols-2 gap-3">
                {footerLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="group inline-flex items-center justify-between rounded-xl border border-border bg-background/30 px-4 py-3 text-sm text-muted-foreground hover:border-primary/50 hover:text-foreground transition-all"
                  >
                    {link.label}
                    <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-1 translate-y-1 transition-all group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0" />
                  </a>
                ))}
              </div>
            </nav>

            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
                Connect
              </p>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex h-12 w-12 items-center justify-center rounded-full glass hover:border-primary/50 hover:bg-primary/10 hover:text-primary transition-all"
                  >
                    <social.icon className="w-5 h-5 transition-transform group-hover:-translate-y-0.5" />
                  </a>
                ))}
              </div>
              <div className="mt-5 rounded-xl border border-primary/20 bg-primary/5 p-4">
                <div className="flex items-start gap-3">
                  <Sparkles className="mt-0.5 w-5 h-5 text-primary" />
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Open to internships, collaborations, and full-stack project
                    opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 border-t border-border pt-5 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
            <p>Copyright {currentYear} Ayush Ranjan. All rights reserved.</p>
            <a href="#" className="hover:text-primary transition-colors">
              Back to top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
