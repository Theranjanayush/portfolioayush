import { Button } from "@/components/Button";
import {
  ArrowRight,
  BadgeCheck,
  ChevronDown,
  Code2,
  Download,
  GitBranch,
  Mail,
  Network,
  Sparkles,
  Terminal,
} from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const skills = [
  {
    label:"Next.js",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    lightTile: true,
  },
  {
    label: "React.js",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    label: "Next.js",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    lightTile: true,
  },
  {
    label: "TypeScript",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    label: "Node.js",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    label: "MySQL",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    label: "PostgreSQL",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    label: "MongoDB",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    label: "Vercel",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
    lightTile: true,
  },
  {
    label: "Tailwind CSS",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    label: "Prisma",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
    lightTile: true,
  },
  {
    label: "Git",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    label: "GitHub Actions",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg",
  },
];

const coreSubjects = [
  { symbol: "🧩", label: "Data Structures", tone: "from-emerald-400/25 to-cyan-400/15" },
  { symbol: "Σ", label: "Algorithms", tone: "from-blue-400/25 to-violet-400/15" },
  { symbol: "💻", label: "Operating Systems", tone: "from-sky-400/25 to-slate-300/15" },
  { symbol: "🗄️", label: "DBMS", tone: "from-amber-400/25 to-orange-400/15" },
  { symbol: "🌐", label: "Computer Networks", tone: "from-cyan-400/25 to-blue-400/15" },
  { symbol: "🧱", label: "OOP", tone: "from-rose-400/25 to-pink-400/15" },
  { symbol: "⚙️", label: "System Design", tone: "from-lime-400/25 to-emerald-400/15" },
  { symbol: "📘", label: "Software Engineering", tone: "from-indigo-400/25 to-blue-400/15" },
  { symbol: "🧠", label: "Machine Learning", tone: "from-fuchsia-400/25 to-primary/15" },
];

const impactStats = [
  { value: "Full-stack", label: "engineering" },
  {value:"Next.js", label:"specialist"},
  { value: "React", label: "specialist" },
  { value: "DSA", label: "problem solving" },
];

const focusItems = [
  "Scalable web apps",
  "Clean API design",
  "Fast user interfaces",
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Workspace background"
          className="w-full h-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/35 via-background/86 to-background" />
        <div className="absolute inset-0 hero-grid opacity-35" />
      </div>

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-14 xl:gap-20 items-center">
          <div className="space-y-8">
            {/* <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Software Engineer | Full-stack Developer
              </span>
            </div> */}

            <div className="space-y-8">
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/10 backdrop-blur-sm animate-fade-in">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <span className="text-sm font-medium text-primary">
                  Software Engineer • Full-Stack Developer
                </span>
              </div>

              {/* Hero Heading */}
              <h1 className="animate-fade-in animation-delay-100">
                <span className="block text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95] text-white">
                  Building
                </span>

                <span className="block text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95] bg-gradient-to-r from-primary via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Scalable Web Apps
                </span>

                <span className="block mt-2 text-3xl md:text-5xl lg:text-6xl font-light italic font-serif text-muted-foreground leading-tight">
                  that create real impact.
                </span>
              </h1>

              {/* Description */}
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed animate-fade-in animation-delay-200">
                Hi, I'm <span className="font-semibold text-foreground">Ayush Ranjan</span>,
                an Information Technology student at{" "}
                <span className="font-medium text-primary">IIEST Shibpur</span> and a
                full-stack developer specializing in{" "}
                <span className="text-foreground font-medium">React</span>,{" "}
                <span className="text-foreground font-medium">Node.js</span>, and scalable
                backend systems.
              </p>

              {/* CTA Highlights */}
              <div className="flex flex-wrap gap-3 animate-fade-in animation-delay-300">
                {["Next.js",
                  "React",
                  "Node.js",
                  "Express.js",
                  "MongoDB",
                  "DSA",
                  "Open Source",
                ].map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-foreground hover:border-primary/40 hover:bg-primary/10 transition-all duration-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <AnimatedBorderButton as="a" href="#contact" size="lg">
                Contact Me <ArrowRight className="w-5 h-5" />
              </AnimatedBorderButton>
              <AnimatedBorderButton
                as="a"
                href="/Resume_AyushRanjan.pdf"
                download
              >
                <Download className="w-5 h-5" />
                Download CV
              </AnimatedBorderButton>
            </div>

            <div className="grid grid-cols-3 max-w-2xl gap-3 animate-fade-in animation-delay-400">
              {impactStats.map((stat) => (
                <div key={stat.label} className="glass rounded-xl p-4">
                  <div className="text-lg md:text-xl font-semibold text-foreground">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3 animate-fade-in animation-delay-500">
              <span className="text-sm text-muted-foreground">Connect:</span>
              {[
                { icon: GitBranch, href: "https://github.com/Theranjanayush", label: "GitHub" },
                { icon: Network, href: "https://linkedin.com/in/theranjanayush", label: "LinkedIn" },
                { icon: Mail, href: "#contact", label: "Email" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2.5 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-in animation-delay-300">
            <div className="relative max-w-md mx-auto lg:mr-0">
              <div className="absolute -inset-4 rounded-3xl border border-primary/20" />
              <div className="relative glass-strong rounded-3xl p-3 glow-border">
                <img
                  src="/profile-photo2.png"
                  alt="Ayush Ranjan"
                  className="w-full aspect-4/5 object-cover rounded-2xl"
                />

                <div className="absolute left-5 right-5 bottom-5 glass rounded-2xl p-4">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Now building</p>
                      <p className="font-semibold">Full-stack portfolio projects</p>
                    </div>
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      <Terminal className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                <div className="absolute -top-5 -left-5 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-2">
                    <BadgeCheck className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium">Open to work</span>
                  </div>
                </div>

                <div className="absolute -right-5 top-24 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="flex items-center gap-2">
                    <Code2 className="w-5 h-5 text-highlight" />
                    <span className="text-sm font-medium">React + APIs</span>
                  </div>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3">
                {focusItems.map((item) => (
                  <div
                    key={item}
                    className="glass rounded-xl px-4 py-3 text-sm text-muted-foreground"
                  >
                    <Sparkles className="w-4 h-4 text-primary mb-2" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-18 md:mt-20 animate-fade-in animation-delay-600">
          <div className="glass rounded-2xl py-6 overflow-hidden">
            <p className="text-sm text-muted-foreground mb-4 text-center">
              Technologies I work with
            </p>
            <div className="relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 bg-linear-to-r from-surface to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 bg-linear-to-l from-surface to-transparent z-10" />
              <div className="flex animate-marquee">
                {[...skills, ...skills].map((skill, idx) => (
                  <div
                    key={`${skill.label}-${idx}`}
                    className="shrink-0 px-4 md:px-6 py-3"
                  >
                    <span
                      aria-label={skill.label}
                      title={skill.label}
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_0_24px_rgba(32,178,166,0.25)] ${
                        skill.lightTile
                          ? "border-white/20 bg-white"
                          : "border-border bg-background/45"
                      }`}
                    >
                      <img
                        src={skill.src}
                        alt=""
                        aria-hidden="true"
                        className="h-8 w-8 object-contain"
                      />
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-sm text-muted-foreground mt-6 mb-4 text-center">
              Core subjects I keep sharpening
            </p>
            <div className="relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 bg-linear-to-r from-surface to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 bg-linear-to-l from-surface to-transparent z-10" />
              <div className="flex animate-marquee-reverse">
                {[...coreSubjects, ...coreSubjects].map((subject, idx) => (
                  <div
                    key={`${subject.label}-${idx}`}
                    className="shrink-0 px-4 md:px-6 py-3"
                  >
                    <span
                      aria-label={subject.label}
                      title={subject.label}
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-linear-to-br ${subject.tone} text-2xl font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:border-primary/55 hover:shadow-[0_0_24px_rgba(32,178,166,0.25)]`}
                    >
                      <span aria-hidden="true">{subject.symbol}</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
