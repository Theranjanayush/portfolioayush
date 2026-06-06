import {
  Braces,
  Code2,
  Database,
  Layers3,
  Lightbulb,
  Rocket,
  Sparkles,
} from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Interfaces",
    description:
      "Building React experiences that feel fast, clear, and easy to use.",
  },
  {
    icon: Rocket,
    title: "Product Speed",
    description:
      "Turning ideas into polished features with careful, practical execution.",
  },
  {
    icon: Database,
    title: "Backend Logic",
    description:
      "Designing APIs, data flows, and server-side systems that scale cleanly.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description:
      "Using DSA fundamentals and product thinking to solve real problems.",
  },
];

const stats = [
  { value: "Full", label: "stack mindset" },
  { value: "DSA", label: "focused practice" },
  { value: "API", label: "first backend" },
];

const stack = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "Tailwind CSS",
];

export const About = () => {
  return (
    <section id="about" className="py-28 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-background via-surface/40 to-background" />
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute right-0 bottom-16 h-80 w-80 rounded-full bg-highlight/10 blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm font-medium text-primary animate-fade-in">
            <Sparkles className="w-4 h-4" />
            About Me
          </span>
          <h2 className="mt-6 text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100">
            I build useful digital products with
            <span className="font-serif italic font-normal text-primary text-blue-400">
              {" "}
              clarity and care.
            </span>
          </h2>
          <p className="mt-5 text-muted-foreground text-lg animate-fade-in animation-delay-200">
            A Information Technology student and software engineer who enjoys the full
            journey: shaping interfaces, wiring backend systems, and solving the
            hard little problems that make products feel reliable.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 xl:gap-14 items-stretch">
          <div className="glass-strong rounded-2xl p-6 md:p-8 glow-border animate-fade-in animation-delay-200">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <Braces className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Current focus</p>
                <h3 className="text-xl font-semibold">Full-stack development</h3>
              </div>
            </div>

            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                I'm Ayush Ranjan, a passionate Software Engineer and Information
                Technology student with a strong interest in building scalable web
                applications and solving real-world problems through technology.
                My journey began with curiosity about how websites and software
                work, and it has grown into a deep commitment to full-stack
                development, backend engineering, and problem solving.
              </p>
              <p>
                I specialize in frontend development using React, Next.js,
                TypeScript, and Tailwind CSS, while also building robust backend
                systems with Node.js, Express.js, REST APIs, MongoDB, and
                PostgreSQL. I enjoy designing end-to-end applications, from
                intuitive user interfaces to secure and scalable server-side
                architectures.
              </p>
              <p>
                Alongside development, I am focused on Data Structures and
                Algorithms, open-source contributions, and continuously learning
                modern technologies such as machine learning and backend system
                design. My goal is to create impactful products that solve
                meaningful problems and provide exceptional user experiences.
              </p>
            </div>

            <div className="mt-8 border-l-2 border-primary pl-5 animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground leading-relaxed">
                "My mission is to use technology to build scalable and
                meaningful solutions that improve lives, support my family, and
                contribute to the growth of society."
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-3 gap-3 animate-fade-in animation-delay-300">
              {stats.map((stat) => (
                <div key={stat.label} className="glass rounded-xl p-4 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, idx) => (
                <div
                  key={item.title}
                  className="group glass rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-primary/5 animate-fade-in"
                  style={{ animationDelay: `${(idx + 4) * 100}ms` }}
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="glass rounded-2xl p-6 animate-fade-in animation-delay-800">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-highlight/10 flex items-center justify-center text-highlight">
                  <Layers3 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold">Tools I enjoy using</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border bg-background/40 px-3 py-1.5 text-sm text-muted-foreground hover:border-primary/50 hover:text-foreground transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
