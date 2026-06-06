import { ArrowUpRight, GitBranch } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
const projects = [
  {
    title: "PQC Scanner",
    description:
      "Developed a full-stack application to identify cryptographic vulnerabilities and assess risks associated with algorithms vulnerable to quantum attacks. Built a responsive frontend for managing assets and visualizing scan results, along with RESTful backend APIs for scan processing, risk classification, and recommendation generation. Integrated frontend and backend to deliver structured security insights through an intuitive dashboard.",
    image: "/projects/project1.png",
    tags: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST API",
      "Cybersecurity",
      "Post-Quantum Cryptography",
      "Full Stack"
    ], link: "https://pqc-scanner.vercel.app",
    github: "https://github.com/Theranjanayush/pnb_proto",
  },
  {
    title: "React NewsApp",
    description:
      "a modern news application using React.js that integrates with external news APIs to fetch and display live news articles. The application supports category-based browsing, allowing users to explore news across different domains such as business, sports, and technology. It features dynamic rendering of news cards, efficient API handling, and a responsive UI for smooth user experience.",
    image: "/projects/project2.png",
    tags: [
      "React",
      "Bootstrap",
      "News API",
      "REST API",
      "JavaScript",
      "Responsive Design"
    ], link: "#",
    github: "https://github.com/Theranjanayush/newsapp-react",
  },
  {
    title: "Web-Based Automated Manufacturing System (WAMS)",
    description: "This project is an implementation of a Software Requirements Specification (SRS) developed during my Software Engineering course. The application simulates a real-world manufacturing management system used by companies that produce goods based on dealer orders and manage raw materials from suppliers. This project was built in under 25 minutes using AI-assisted development tools, demonstrating my ability to efficiently leverage modern AI for rapid software prototyping.",
    image: "/projects/project3.png",
    tags: ["Codex", "Antigravity",],
    link: "#",
    github: "#",
  },
  // {
  //   title: "Project Management Tool",
  //   description:
  //     "A collaborative workspace for teams with real-time updates, task tracking, and integrations.",
  //   image: "/projects/project4.png",
  //   tags: ["Next.js", "Socket.io", "MongoDB", "Redis"],
  //   link: "#",
  //   github: "#",
  // },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-linear-to-l from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <GitBranch className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};
