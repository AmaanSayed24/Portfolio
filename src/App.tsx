import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Lucide icons
import {
  ArrowUpRight,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";

// React Icons (Simple Icons pack)
import {
  SiReact,
  SiFigma,
  SiFramer,
  SiOpenai,
  SiGithubcopilot,
  SiGooglegemini,
  SiFlutter,
  SiHtml5,
  SiCss3,
  SiDart,
} from "react-icons/si";
import { applyTheme, getInitialTheme, type ThemeMode } from "./lib/theme";
import { CursorFX } from "./components/CursorFX";
import { LiquidBackground } from "./components/LiquidBackground";
import { ThemeToggle } from "./components/ThemeToggle";
import { Section } from "./components/Section";
import { Chip } from "./components/Chip";
import { Scroll3D } from "./components/Scroll3D";
import BlurText from "./components/BlurText";
import { LandingPage } from "./components/LandingPage";

type Project = {
  title: string;
  desc: string;
  stack: string[];
  link?: string;
};

function App() {
  const [mode, setMode] = useState<ThemeMode>("dark");
  const [showPortfolio, setShowPortfolio] = useState(false);

  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  useEffect(() => {
    const t = getInitialTheme();
    setMode(t);
    applyTheme(t);
  }, []);

  const onToggleTheme = () => {
    const next: ThemeMode = mode === "dark" ? "light" : "dark";
    setMode(next);
    applyTheme(next);
  };

  const projects: Project[] = useMemo(
    () => [
      {
        title: "Lost and Found(MERN stack)",
        desc: "A webapp to help citizens report and find lost items in their city, with real-time updates and location tracking.",
        stack: ["React", "Bootstrap", "MongoDB"],
        link: "#top",
      },
      {
        title: "Attendance Managment System",
        desc: "A system to streamline attendance tracking for schools, real-time reporting, and analytics.",
        stack: ["PHP", "JavaScript", "MySQL"],
      },
      {
        title: "Phishguard",
        desc: "A cybershield webapp that detects and blocks phishing attempts in real-time, using machine learning algorithms to analyze URLs and content.",
        stack: ["Vite", "TypeScript"],
      },
      {
        title: "Car Brand Apex",
        desc: "A basic webpage for a car brand, showcasing their latest models, features, and a contact form for inquiries.",
        stack: ["Html", "JavaScript", "Css"],
      },
    ],
    []
  );

  const skills = [
    "React",
    "TypeScript",
    "Tailwind",
    "Framer Motion",
    "UI Design",
    "Node.js",
    "Figma",
    "Three-dimensional scroll",
    "MongoDB",
  ];
  const tools = [
    "ChatGPT",
    "Gemini Pro",
    "Copilot",
    "Figma AI",
    "Rork Ai",
    "Claud Ai",
  ];

  if (!showPortfolio) {
    return (
      <div className="relative min-h-screen w-full overflow-hidden">
        <CursorFX />
        <AnimatePresence mode="wait">
          <motion.div
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.03 }}
            transition={{ duration: 0.6 }}
          >
            <LandingPage onEnter={() => setShowPortfolio(true)} />
          </motion.div>
        </AnimatePresence>
      </div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="portfolio"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        id="top"
        className="app-shell relative overflow-x-hidden"
      >
        <CursorFX />
        <LiquidBackground />

      <header className="sticky top-0 z-40">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-4 md:px-8">
          <a href="#top" className="group inline-flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-black/30 backdrop-blur">
              <span className="text-sm font-semibold tracking-tight text-white">
                AS
              </span>
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold text-[color:var(--fg)]">
                Amaan Sayed
              </div>
              <div className="text-xs text-[color:var(--muted)]">Portfolio</div>
            </div>
            <span className="ml-2 hidden rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] font-semibold tracking-[0.22em] text-white/70 backdrop-blur md:inline-flex">
              RED / BLACK
            </span>
          </a>

          <nav className="hidden items-center gap-6 text-sm text-[color:var(--muted)] md:flex">
            <a className="hover:text-[color:var(--fg)]" href="#about">
              About
            </a>
            <a className="hover:text-[color:var(--fg)]" href="#projects">
              Projects
            </a>
            <a className="hover:text-[color:var(--fg)]" href="#skills">
              Skills
            </a>
            <a className="hover:text-[color:var(--fg)]" href="#contact">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="https://www.linkedin.com/in/amaan-sayed-547a06358/"
              className="hidden rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/85 backdrop-blur transition hover:bg-white/10 sm:inline-flex"
            >
              Hire me
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </a>
            <ThemeToggle mode={mode} onToggle={onToggleTheme} />
          </div>
        </div>
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </header>

      <main>
        <section className="relative mx-auto w-full max-w-6xl px-5 pt-16 pb-10 md:px-8 md:pt-22">
          <div className="grid items-center gap-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/70 backdrop-blur"
              >
                <Sparkles className="h-4 w-4 text-[color:var(--accent)]" />
                Liquid effects • Cursor animation • 3D scroll
              </motion.div>

              <div className="mt-6">
                <BlurText
                  text="Hi, I’m AMAAN SAYED."
                  delay={120}
                  animateBy="words"
                  direction="top"
                  className="text-4xl font-semibold tracking-tight text-[color:var(--fg)] md:text-6xl"
                />
                <BlurText
                  text="I try to build modern web experiences."
                  delay={120}
                  animateBy="words"
                  direction="top"
                  onAnimationComplete={handleAnimationComplete}
                  className="mt-2 text-4xl font-semibold tracking-tight text-[color:var(--fg)] md:text-6xl"
                />
              </div>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-[color:var(--muted)]">
                A red-and-black themed portfolio with dark mode, liquid glow,
                custom cursor, and 3D scroll sections. Smooth, responsive, and
                designed to feel alive.Built with the help of Ai and new
                animations.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center rounded-xl bg-[color:var(--accent)] px-5 py-3 text-sm font-semibold text-black shadow-[0_0_0_1px_rgba(255,27,45,.35),0_16px_60px_rgba(255,27,45,.25)] transition hover:brightness-110"
                >
                  View Projects
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-xl border border-white/12 bg-white/5 px-5 py-3 text-sm font-semibold text-[color:var(--fg)] backdrop-blur transition hover:bg-white/10"
                >
                  Contact
                  <Mail className="ml-2 h-4 w-4" />
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                <Chip>
                  <MapPin className="mr-2 h-3.5 w-3.5" />
                  India,Goa
                </Chip>
                <Chip>Available for freelance</Chip>
                <Chip>Open to internships</Chip>
              </div>
            </div>

            <div className="md:col-span-5">
              <Scroll3D>
                <div className="glass relative overflow-hidden rounded-3xl p-6 shadow-[0_20px_80px_rgba(0,0,0,.35)]">
                  <div className="absolute inset-0 opacity-70">
                    <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-[color:var(--accent)]/25 blur-2xl" />
                    <div className="absolute -right-28 top-20 h-72 w-72 rounded-full bg-[color:var(--accent2)]/15 blur-2xl" />
                  </div>
                  <div className="relative">
                    <div className="text-xs font-semibold tracking-[0.28em] text-white/55">
                      PORTFOLIO HIGHLIGHTS
                    </div>
                    <ul className="mt-4 space-y-3 text-sm text-white/80">
                      <li className="flex items-start gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-[color:var(--accent)] shadow-[0_0_18px_rgba(255,27,45,.55)]" />
                        Smooth micro-interactions with Framer Motion
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-[color:var(--accent)] shadow-[0_0_18px_rgba(255,27,45,.55)]" />
                        Liquid glow background that reacts to cursor
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-[color:var(--accent)] shadow-[0_0_18px_rgba(255,27,45,.55)]" />
                        3D scroll sections with depth + tilt
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-[color:var(--accent)] shadow-[0_0_18px_rgba(255,27,45,.55)]" />
                        Dark mode toggle with persistence
                      </li>
                    </ul>
                    <div className="mt-6 grid grid-cols-2 gap-3">
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <div className="text-2xl font-semibold text-white">
                          Learning
                        </div>
                        <div className="mt-1 text-xs text-white/60">
                          UI experiments
                        </div>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <div className="text-2xl font-semibold text-white">
                          3D
                        </div>
                        <div className="mt-1 text-xs text-white/60">
                          Scroll depth
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Scroll3D>
            </div>
          </div>
        </section>

        <Section id="about" eyebrow="ABOUT" title="Amaan Sayed">
          <div className="grid gap-6 md:grid-cols-12">
            {/* LEFT CARD */}
            <div className="glass relative rounded-3xl p-6 md:col-span-7 overflow-hidden">
              {/* Ambient Glow */}
              <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-red-600/20 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-purple-600/20 blur-3xl pointer-events-none" />

              <p className="text-sm leading-relaxed text-[color:var(--muted)]">
                Passionate about building immersive digital experiences with
                clean UI, smooth animations, and futuristic design systems.
              </p>

              {/* Chips */}
              <div className="mt-5 flex flex-wrap gap-2">
                <Chip className="border-white/15 bg-white/7">React</Chip>
                <Chip className="border-white/15 bg-white/7">Figma</Chip>
                <Chip className="border-white/15 bg-white/7">Framer</Chip>
                <Chip className="border-white/15 bg-white/7">Flutter</Chip>
                <Chip className="border-white/15 bg-white/7">HTML</Chip>
                <Chip className="border-white/15 bg-white/7">CSS</Chip>
              </div>

              {/* 🔥 Glowing Icons Section */}
              <div className="mt-10 border-t border-white/10 pt-6">
                <p className="mb-6 text-xs uppercase tracking-widest text-white/40">
                  Tech Arsenal
                </p>

                <div className="flex flex-wrap items-center gap-10">
                  {[
                    { Icon: SiReact, name: "React", color: "text-cyan-400" },
                    {
                      Icon: SiFlutter,
                      name: "Flutter",
                      color: "text-blue-300",
                    },
                    { Icon: SiDart, name: "Dart", color: "text-blue-500" },
                    { Icon: SiHtml5, name: "HTML5", color: "text-orange-500" },
                    { Icon: SiCss3, name: "CSS3", color: "text-blue-600" },
                    { Icon: SiFigma, name: "Figma", color: "text-pink-500" },
                    { Icon: SiFramer, name: "Framer", color: "text-blue-400" },
                    {
                      Icon: SiOpenai,
                      name: "OpenAI",
                      color: "text-emerald-400",
                    },
                    {
                      Icon: SiGithubcopilot,
                      name: "GitHub Copilot",
                      color: "text-indigo-400",
                    },
                    {
                      Icon: SiGooglegemini,
                      name: "Google Gemini",
                      color: "text-yellow-400",
                    },
                  ].map(({ Icon, color }, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.25 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 15,
                      }}
                      className="group relative cursor-pointer"
                    >
                      <Icon
                        className={`
                  h-12 w-12 ${color}
                  transition duration-300
                  drop-shadow-[0_0_15px_currentColor]
                  group-hover:drop-shadow-[0_0_40px_currentColor]
                `}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT CARD */}
            <div className="glass rounded-3xl p-6 md:col-span-5">
              <div className="text-xs font-semibold tracking-[0.28em] text-white/55">
                NOW
              </div>

              <div className="mt-4 grid gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-sm font-semibold text-white">
                    Exploring
                  </div>
                  <div className="mt-1 text-sm text-white/70">
                    Smooth transitions + Web UI effects
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-sm font-semibold text-white">
                    Building
                  </div>
                  <div className="mt-1 text-sm text-white/70">
                    Polished portfolios & landing pages
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-sm font-semibold text-white">
                    Learning
                  </div>
                  <div className="mt-1 text-sm text-white/70">
                    Graphic Designing
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section id="projects" eyebrow="WORK" title="Selected Projects">
          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((p) => (
              <Scroll3D key={p.title}>
                <article className="glass group relative overflow-hidden rounded-3xl p-6 transition hover:border-white/20">
                  <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[color:var(--accent)]/20 blur-2xl transition group-hover:bg-[color:var(--accent)]/28" />
                  <div className="relative">
                    <h3 className="text-lg font-semibold text-white">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/70">
                      {p.desc}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.stack.map((s) => (
                        <Chip key={s} className="border-white/12 bg-white/5">
                          {s}
                        </Chip>
                      ))}
                    </div>
                    <div className="mt-5 flex items-center justify-between">
                      <div className="text-xs font-semibold tracking-[0.22em] text-white/45">
                        CASE STUDY
                      </div>
                      <a
                        href="https://github.com/AmaanSayed24"
                        className="inline-flex items-center text-sm font-semibold text-[color:var(--fg)] transition group-hover:text-white"
                      >
                        Open
                        <ArrowUpRight className="ml-2 h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </article>
              </Scroll3D>
            ))}
          </div>
        </Section>

        <Section id="skills" eyebrow="STACK" title="Skills">
          <div className="glass rounded-3xl p-6">
            <div className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <Chip key={s} className="border-white/12 bg-white/5">
                  {s}
                </Chip>
              ))}
            </div>
            <div className="mt-6 text-sm text-white/65">
              Tip: scroll through sections to feel the 3D depth and liquid glow.
            </div>
          </div>
        </Section>
        <Section id="Ai tools" eyebrow="STACK" title="AI Tools">
          <div className="glass rounded-3xl p-6">
            <div className="flex flex-wrap gap-2">
              {tools.map((s) => (
                <Chip key={s} className="border-white/12 bg-white/5">
                  {s}
                </Chip>
              ))}
            </div>
            <div className="mt-6 text-sm text-white/65">
              The tools used to build this portfolio and enhance my workflow and
              my projects
            </div>
          </div>
        </Section>

        <Section
          id="contact"
          eyebrow="CONTACT"
          title="Let’s build something bold"
        >
          <div className="grid gap-6 md:grid-cols-12">
            <div className="glass rounded-3xl p-6 md:col-span-7">
              <p className="text-sm leading-relaxed text-[color:var(--muted)]">
                Want a red/black landing page, a portfolio, or a motion-heavy
                UI? Reach out and I’ll get back soon.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <a
                  className="group inline-flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 transition hover:bg-white/10"
                  href="https://github.com/AmaanSayed24"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="inline-flex items-center gap-2">
                    <Github className="h-4 w-4 text-[color:var(--accent)]" />{" "}
                    GitHub
                  </span>
                  <ArrowUpRight className="h-4 w-4 opacity-70 transition group-hover:opacity-100" />
                </a>
                <a
                  className="group inline-flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 transition hover:bg-white/10"
                  href="https://www.linkedin.com/in/amaan-sayed-547a06358/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="inline-flex items-center gap-2">
                    <Linkedin className="h-4 w-4 text-[color:var(--accent)]" />{" "}
                    LinkedIn
                  </span>
                  <ArrowUpRight className="h-4 w-4 opacity-70 transition group-hover:opacity-100" />
                </a>
                <a
                  className="group inline-flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 transition hover:bg-white/10"
                  href="https://www.instagram.com/amaan_2708/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="inline-flex items-center gap-2">
                    <Instagram className="h-4 w-4 text-[color:var(--accent)]" />{" "}
                    Instagram
                  </span>
                  <ArrowUpRight className="h-4 w-4 opacity-70 transition group-hover:opacity-100" />
                </a>
              </div>
            </div>

            <div className="glass rounded-3xl p-6 md:col-span-5">
              <div className="text-xs font-semibold tracking-[0.28em] text-white/55">
                DOWNLOAD
              </div>
              <p className="mt-3 text-sm text-white/70">
                Add your resume file later and link it here.
              </p>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="mt-4 inline-flex w-full items-center justify-center rounded-xl border border-white/12 bg-white/5 px-5 py-3 text-sm font-semibold text-white/85 transition hover:bg-white/10"
              >
                Resume (PDF)
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </a>
              <div className="mt-6 rounded-2xl border border-white/10 bg-black/25 p-4 text-xs text-white/60">
                Note: The email/social links are functional
              </div>
            </div>
          </div>
        </Section>
      </main>

      <footer className="mx-auto w-full max-w-6xl px-5 pb-10 md:px-8">
        <div className="glass flex flex-col items-start justify-between gap-4 rounded-3xl px-6 py-5 md:flex-row md:items-center">
          <div className="text-sm text-[color:var(--muted)]">
            © {new Date().getFullYear()}{" "}
            <span className="text-[color:var(--fg)]">Amaan Sayed</span>. All
            rights reserved.
          </div>
          <a
            href="#top"
            className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 backdrop-blur transition hover:bg-white/10"
          >
            Back to top
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </footer>
      </motion.div>
    </AnimatePresence>
  );
}

export default App;
