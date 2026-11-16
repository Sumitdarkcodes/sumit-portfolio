import { useEffect, useRef, useState } from "react";
import avatar from "./assets/avatar.png";

const GH = "https://github.com/Sumitdarkcodes";
const LINKEDIN = "https://linkedin.com/in/sumit-kumar-8852a9118";
const EMAIL = "sumit.kumar.work@outlook.com";
const PHONE = "+91 7000996553";
const LOCATION = "Delhi, India";

const EXPERIENCE = [
  {
    title: "Software Development Engineer · Full Stack",
    date: "Independent & Project Work",
    text: "Designing, building, and deploying production-ready web applications with focus on REST API engineering, system architecture, database consistency, JWT authentication, RBAC, multi-document transactions, and aggregation pipelines.",
  },
];

const EDUCATION = [
  {
    title: "Master of Technology (M.Tech) in Computer Science",
    date: "JP Institute of Engineering and Technology, Uttar Pradesh · Expected 2027",
    text: "Pursuing advanced studies in Computer Science with emphasis on system design, databases, and full-stack engineering.",
  },
  {
    title: "Bachelor of Technology (B.Tech) in Information Technology",
    date: "Institute of Technology, Guru Ghasidas Vishwavidyalaya, Chhattisgarh · 2018",
    text: "Undergraduate degree in Information Technology. Foundation for the full-stack and systems projects showcased below.",
  },
];

const PROJECTS = [
  {
    title: "MediConnect AI",
    tag: "MERN Healthcare Platform",
    desc: "Full-stack healthcare appointment platform with multi-role workflows for Patients, Doctors, and Admins. JWT auth, RBAC, conflict-free scheduling via compound unique indexes, prescription management, and Google Gemini AI for symptom-to-specialty routing.",
    image: "/mediconnect.png",
    stack: ["React.js", "Vite", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "RBAC", "Gemini API", "Vercel", "Render"],
    links: [
      ["Live Demo", "https://ai-healthcare-seven-nu.vercel.app"],
      ["GitHub", "https://github.com/Sumitdarkcodes/Ai-Healthcare"],
    ],
  },
  {
    title: "Ledger System",
    tag: "MERN Banking & Double-Entry Ledger",
    desc: "Double-entry banking ledger enforcing immutable CREDIT/DEBIT entries with real-time balances via aggregation pipelines. Atomic fund transfers using multi-document ACID transactions, idempotency keys, JWT security, and Nodemailer alerts.",
    image: "/ledger.png",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "bcrypt", "Nodemailer", "Vercel", "Render"],
    links: [
      ["Live Demo", "https://banking-system-project-seven.vercel.app"],
      ["GitHub", "https://github.com/Sumitdarkcodes/banking-system-project"],
    ],
  },
  {
    title: "2048 Game",
    tag: "Java Tile-Merging Game",
    desc: "Full-featured 2048 game in Java (Swing) with 2D array matrix logic for grid manipulation, tile sliding, merging, and scoring. OOP separation of GameBoard state from UI. Compiled to WebAssembly via CheerpJ for browser play.",
    image: "/game2048.png",
    stack: ["Java", "Swing", "OOP", "CheerpJ", "Netlify"],
    links: [
      ["Live Demo", "https://stellular-malabi-9aa333.netlify.app"],
      ["GitHub", "https://github.com/Sumitdarkcodes/2048-Game-java-"],
    ],
  },
];

const CERTIFICATIONS = [
  {
    title: "Introduction to Data Science",
    date: "IBM",
    text: "Foundational concepts in data science, data analysis, and visualization workflows.",
  },
  {
    title: "SQL and Relational Databases",
    date: "IBM",
    text: "Relational database design, SQL querying, joins, and data integrity principles.",
  },
  {
    title: "Engineering Virtual Experience Program",
    date: "Microsoft",
    text: "Practical engineering exposure through Microsoft’s virtual experience modules.",
  },
  {
    title: "Databases for Developers: Foundations",
    date: "Oracle",
    text: "Core database concepts, SQL fundamentals, and developer-oriented database skills.",
  },
];

const SKILLS = [
  ["Languages", ["JavaScript (ES6+)", "Java", "C", "C++", "SQL", "HTML5", "CSS3"]],
  ["Frontend", ["React.js", "Vite", "React Router", "Axios", "Responsive Design"]],
  ["Backend", ["Node.js", "Express.js", "RESTful APIs", "JWT", "RBAC", "bcrypt", "Nodemailer"]],
  ["Databases", ["MongoDB", "Mongoose", "MySQL", "IBM DB2", "Aggregation Pipelines", "Transactions", "Indexing"]],
  ["Core CS", ["Data Structures & Algorithms", "OOP", "System Design", "Database Design"]],
  ["Tools & Cloud", ["Git", "GitHub", "VS Code", "Postman", "Vercel", "Render", "Netlify", "MongoDB Atlas"]],
];

/* ------------------------------------------------------------------ */
/* Scroll-driven avatar                                                */
/* ------------------------------------------------------------------ */
const FEET = 0.97;
const BUBBLE_IN = 0.3;
const RATIO = 1024 / 1536;
const SECTIONS = ["top", "about", "experience", "education", "work", "skills", "certifications", "contact"];
const CAPTIONS = [
  "Hi, I’m Sumit.",
  "Yes, this is me. Illustrated.",
  "Building production systems.",
  "Where I studied.",
  "The code is all on GitHub.",
  "My everyday toolkit.",
  "Credentials earned.",
  "Say hi.",
];

const DESKTOP = [
  [0.77, 0.56, 0.84, 0.5, 0, 1],       // hero
  [0.18, 0.55, 0.70, 0.45, -1, 1],     // about
  [0.9, 0.64, 0.66, 0.5, 2, 0.9],      // experience
  [0.9, 0.66, 0.6, 0.5, -2, 0.9],      // education
  [0.94, 0.8, 0.4, 0.5, 0, 0.4],       // projects
  [0.07, 0.74, 0.5, 0.5, -4, 0.35],    // skills
  [0.9, 0.66, 0.55, 0.5, 2, 0.85],     // certifications
  [0.82, 0.65, 0.55, 0.5, 0, 1],       // contact
];

const MOBILE = [
  [0.76, 0.62, 0.6, 0.5, 0, 0.35],
  [0.8, 0.7, 0.55, 0.5, 0, 0.16],
  [0.8, 0.7, 0.55, 0.5, 0, 0.16],
  [0.8, 0.7, 0.55, 0.5, 0, 0.16],
  [0.8, 0.7, 0.55, 0.5, 0, 0.14],
  [0.8, 0.7, 0.55, 0.5, 0, 0.14],
  [0.8, 0.7, 0.55, 0.5, 0, 0.14],
  [0.8, 0.68, 0.45, 0.5, 0, 0.5],
];

function Avatar() {
  const figure = useRef(null);
  const bubble = useRef(null);
  const floor = useRef(null);

  useEffect(() => {
    const els = SECTIONS.map((id) => document.getElementById(id)).filter(Boolean);
    let tops = [];
    let vw = 0;
    let vh = 0;
    const measure = () => {
      vw = window.innerWidth;
      vh = window.innerHeight;
      tops = els.map((e) => e.getBoundingClientRect().top + window.scrollY);
    };
    measure();
    window.addEventListener("resize", measure);
    if (document.readyState === "complete") {
      // already loaded
    } else {
      window.addEventListener("load", measure);
    }
    if (document.fonts?.ready) document.fonts.ready.then(measure).catch(() => {});

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const lerp = (a, b, t) => a + (b - a) * t;
    const smooth = (x) => x * x * (3 - 2 * x);
    let current = null;
    let lastY = window.scrollY;
    let velocity = 0;
    let caption = -1;
    let raf;

    const onVisible = () => {
      if (!document.hidden) {
        lastY = window.scrollY;
        velocity = 0;
      }
    };
    document.addEventListener("visibilitychange", onVisible);

    const frame = () => {
      const y = window.scrollY;
      const probe = y + vh * 0.55;
      velocity = lerp(velocity, y - lastY, 0.2);
      lastY = y;

      let i = 0;
      while (i < tops.length - 1 && probe >= tops[i + 1]) i++;
      const next = Math.min(i + 1, tops.length - 1);
      const span = tops[next] - tops[i] || 1;
      const t = smooth(Math.min(1, Math.max(0, ((probe - tops[i]) / span - 0.65) / 0.35)));

      const table = vw < 760 ? MOBILE : DESKTOP;
      const target = table[i].map((v, k) => lerp(v, table[next][k], t));
      current = current && !reduce ? current.map((v, k) => lerp(v, target[k], 0.12)) : target;

      const [cx, cy, h, fy, rot, op] = current;
      const H = h * vh;
      const W = H * RATIO;
      const x = cx * vw - W / 2;
      const top = cy * vh - fy * H;
      const tilt = reduce ? 0 : Math.max(-6, Math.min(6, velocity * 0.12));

      const f = figure.current;
      if (f) {
        f.style.width = `${W}px`;
        f.style.height = `${H}px`;
        f.style.transform = `translate3d(${x}px,${top}px,0) rotate(${rot + tilt}deg)`;
        f.style.opacity = vw < 1100 && vw >= 760 ? op * 0.7 : op;
      }

      const b = bubble.current;
      if (b) {
        const onLeft = cx < 0.5;
        b.style.transform = `translate3d(${onLeft ? x + W * (1 - BUBBLE_IN) : x + W * BUBBLE_IN}px,${Math.max(76, Math.min(vh - 60, top + H * 0.06))}px,0) translateX(${onLeft ? 0 : -100}%)`;
        b.style.borderRadius = onLeft ? "14px 14px 14px 3px" : "14px 14px 3px 14px";
        b.style.opacity = vw >= 760 && op > 0.5 ? 1 : 0;
        if (caption !== i) {
          caption = i;
          b.textContent = CAPTIONS[i];
        }
      }

      const fo = Math.max(0, 1 - y / (vh * 0.45));
      const FW = Math.min(H * 0.55, 420);
      const FH = FW * 0.3;
      const fl = floor.current;
      if (fl) {
        fl.style.width = `${FW}px`;
        fl.style.height = `${FH}px`;
        fl.style.opacity = fo * Math.min(1, op);
        fl.style.transform = `translate3d(${cx * vw - FW / 2}px,${top + H * FEET - FH / 2}px,0) scale(${0.85 + 0.15 * fo})`;
      }

      raf = requestAnimationFrame(frame);
    };
    frame();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", measure);
      window.removeEventListener("load", measure);
      document.removeEventListener("visibilitychange", onVisible);
    };
  }, []);

  return (
    <>
      <div
        ref={floor}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-0 rounded-[50%] opacity-0 will-change-transform bg-[radial-gradient(ellipse_at_50%_50%,rgba(190,255,70,.95)_0%,rgba(150,240,50,.55)_40%,rgba(120,220,40,0)_72%)]"
      >
        <div className="absolute inset-x-[14%] bottom-1/2 h-[150%] rounded-[50%_50%_0_0/100%_100%_0_0] bg-gradient-to-t from-[rgba(190,255,70,.26)] to-[rgba(190,255,70,0)] blur-[10px]" />
        <div className="absolute inset-x-[8%] inset-y-[10%] rounded-[50%] border-[1.5px] border-[rgba(210,255,120,.6)]" />
      </div>

      <div ref={figure} aria-hidden="true" className="pointer-events-none fixed left-0 top-0 z-[1] opacity-0 will-change-transform">
        <img
          src={avatar}
          alt=""
          draggable="false"
          className="block h-full w-full"
          style={{ animation: "reveal 1.3s .3s cubic-bezier(.7,0,.2,1) both" }}
        />
      </div>

      <div
        ref={bubble}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[3] whitespace-nowrap bg-[#2150ff] px-3.5 py-2 text-[.92rem] font-semibold text-white transition-opacity duration-500"
      />
    </>
  );
}

/* ------------------------------------------------------------------ */
/* Small helpers                                                       */
/* ------------------------------------------------------------------ */
const wrap = "mx-auto w-full max-w-[1120px] px-5 sm:px-12";
const sectionPad = "py-24 md:py-36";

function useInView(threshold = 0.4) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setShown(true);
        io.disconnect();
      }
    }, { threshold });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, shown];
}

function Heading({ children, className = "" }) {
  const [ref, shown] = useInView();
  return (
    <h2 ref={ref} className={`mb-10 font-['Syne'] text-[length:clamp(2rem,5vw,3.4rem)] font-extrabold leading-[1.08] tracking-[-0.03em] ${className}`}>
      <span className="block overflow-hidden pb-[.12em]">
        <span className={`block transition-transform duration-[800ms] ease-[cubic-bezier(.2,.8,.2,1)] motion-reduce:transition-none ${shown ? "translate-y-0" : "translate-y-[105%]"}`}>
          {children}
        </span>
      </span>
    </h2>
  );
}

/* ------------------------------------------------------------------ */
/* Sections                                                            */
/* ------------------------------------------------------------------ */
function Nav() {
  const [open, setOpen] = useState(false);
  const links = [["About", "#about"], ["Experience", "#experience"], ["Education", "#education"], ["Projects", "#work"], ["Skills", "#skills"], ["Certs", "#certifications"], ["Contact", "#contact"]];
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-[#1a2a66] bg-[#05080f] pt-[env(safe-area-inset-top)]">
      <div className={`${wrap} flex h-14 items-center justify-between`}>
        
        <a href="#top" className="flex items-center">
          <img
            src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=28&pause=1000&color=6C63FF&vCenter=true&width=575&lines=Welcome+to+my+Profile!;Software+Development+Engineer;MERN+Stack+Developer;Building+Scalable+Web+Applications;Always+Learning+Something+New"
            alt="Sumit Kumar"
            className="h-6 w-auto object-contain object-left"
          />
        </a>

        <div className="hidden gap-7 md:flex">
          {links.map(([name, href]) => (
            <a key={href} href={href} className="text-[.95rem] font-medium text-[#8e9cc9] transition-colors hover:text-[#e8eeff]">{name}</a>
          ))}
        </div>
        <button type="button" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)} className="grid h-10 w-10 place-items-center md:hidden">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>
      {open && (
        <div className="border-t border-[#1a2a66] bg-[#05080f] md:hidden">
          <div className={`${wrap} flex flex-col py-2`}>
            {links.map(([name, href]) => (
              <a key={href} href={href} onClick={() => setOpen(false)} className="py-3 font-medium text-[#8e9cc9] hover:text-[#e8eeff]">{name}</a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <header id="top" className="flex min-h-svh items-center pb-24 pt-28">
      <div className={`${wrap} lg:max-w-[1120px]`}>
        <div className="lg:max-w-[min(58%,720px)]">
          <p className="mb-4 font-medium text-[#9cf5b4]">Software Development Engineer · Full Stack Developer</p>
          <h1
            aria-label="Sumit Kumar"
            className="font-['Plus_Jakarta_Sans'] text-[length:clamp(2.8rem,6.2vw,5.8rem)] font-extrabold leading-[.98] tracking-[-0.035em]"
          >
            {["Sumit", "Kumar."].map((word, i) => (
              <span key={word} aria-hidden="true" className="block overflow-x-visible overflow-y-clip pb-[.08em]">
                <span className="block" style={{ animation: `rise 1s ${0.15 + i * 0.18}s cubic-bezier(.2,.8,.2,1) both` }}>
                  {word}
                </span>
              </span>
            ))}
          </h1>
          <p className="my-7 max-w-[44ch] text-[1.2rem]">
            I design, build, and deploy production-ready web applications — specializing in REST APIs, secure auth, database consistency, and full-stack MERN systems that solve real problems.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#work" className="rounded-full border-2 border-[#2150ff] bg-[#2150ff] px-5 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:border-[#9cf5b4] hover:bg-[#9cf5b4] hover:text-[#05080f]">
              See my projects
            </a>

            <a
              href="#contact"
              className="rounded-full border-2 border-[#e8eeff] px-5 py-3 font-semibold transition hover:-translate-y-0.5 hover:bg-[#e8eeff] hover:text-[#05080f]"
            >
              Contact me
            </a>

            <a
              href="/resume.pdf"
              download="Sumit_Kumar_Resume.pdf"
              className="rounded-full border-2 border-[#e8eeff] px-5 py-3 font-semibold transition hover:-translate-y-0.5 hover:border-[#9cf5b4] hover:bg-[#9cf5b4] hover:text-[#05080f]"
            >
              Download resume
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

function About() {
  return (
    <section id="about" className={sectionPad}>
      <div className={`${wrap} lg:pl-[calc(32%+24px)]`}>
        <Heading>About me</Heading>
        <p className="mb-4 max-w-[54ch]">
          I’m a Software Development Engineer and Full Stack Developer skilled in designing, building, and deploying production-ready web applications. Proficient in JavaScript (ES6+), Java, Node.js, Express.js, React.js, MongoDB, and MySQL.
        </p>
        <p className="max-w-[54ch]">
          I specialize in REST API engineering, system architecture, database consistency, JWT authentication, Role-Based Access Control (RBAC), multi-document transactions, and aggregation pipelines. Experienced with Git workflows and cloud deployment across Vercel, Render, Netlify, and MongoDB Atlas.
        </p>
      </div>
    </section>
  );
}

function Timeline({ id, heading, items }) {
  const list = useRef(null);
  const [on, setOn] = useState(() => items.map(() => false));

  useEffect(() => {
    const update = () => {
      const el = list.current;
      if (!el) return;
      const vh = window.innerHeight;
      const box = el.getBoundingClientRect();
      el.style.setProperty("--p", String(Math.min(1, Math.max(0, (vh * 0.65 - box.top) / box.height))));

      const next = [...el.querySelectorAll("[data-ev]")].map((e) => e.getBoundingClientRect().top < vh * 0.65);
      setOn((prev) => {
        if (prev.length === next.length && prev.every((v, k) => v === next[k])) return prev;
        return next;
      });
    };

    let raf = 0;
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(() => { raf = 0; update(); });
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section id={id} className={sectionPad}>
      <div className={wrap}>
        <Heading>{heading}</Heading>
        <div ref={list} className="relative pl-9">
          <div className="absolute bottom-1.5 left-[5px] top-1.5 w-0.5 bg-[#1a2a66]" />
          <div className="absolute left-[5px] top-1.5 w-0.5 bg-[#9cf5b4] h-[calc((100%_-_12px)*var(--p,0))]" />
          {items.map((e, i) => (
            <div key={e.title} data-ev className="relative pb-12 last:pb-0">
              <span className={`absolute -left-9 top-[9px] h-3 w-3 rounded-full border-2 transition-all duration-500 ${on[i] ? "scale-125 border-[#9cf5b4] bg-[#9cf5b4]" : "border-[#1a2a66] bg-[#05080f]"}`} />
              <h3 className="font-['Syne'] text-[1.4rem] font-semibold">{e.title}</h3>
              {e.date && <small className="mb-2.5 mt-0.5 block text-[#8e9cc9]">{e.date}</small>}
              {e.text && <p className="max-w-[62ch]">{e.text}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ p }) {
  const [imgErr, setImgErr] = useState(false);
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[.04] p-4 transition-all duration-300 hover:-translate-y-1.5 hover:border-white/20 hover:bg-white/[.06] hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,.8)] sm:p-5">
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0b1330]/70 mb-4">
        {p.image && !imgErr ? (
          <img
            src={p.image}
            alt={`${p.title} screenshot`}
            onError={() => setImgErr(true)}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="grid h-full w-full place-items-center bg-[linear-gradient(135deg,rgba(33,80,255,.25),rgba(156,245,180,.12))] text-sm text-[#8e9cc9]">
            {p.title}
          </div>
        )}
        <span className="absolute left-3 top-3 rounded-full border border-white/20 bg-black/40 px-3 py-1 text-[.75rem] font-semibold backdrop-blur-md">
          {p.tag}
        </span>
      </div>
      
      <div className="flex flex-1 flex-col">
        <h3 className="font-['Instrument_Sans'] text-[1.35rem] font-semibold leading-tight tracking-[-0.01em]">{p.title}</h3>
        <p className="mt-2 flex-1 text-[.95rem] leading-snug text-[#b3c0e6]">{p.desc}</p>
        
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {p.stack.map((s) => (
            <li key={s} className="rounded-full border border-white/15 bg-white/[.07] px-2.5 py-0.5 text-[.75rem] font-semibold text-[#cdd7ff]">{s}</li>
          ))}
        </ul>
        
        <div className="mt-5 flex flex-wrap gap-2 pt-2">
          {p.links.map(([name, href], i) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-full px-4 py-2 text-[.85rem] font-semibold transition hover:-translate-y-0.5 ${
                i === 0 ? "bg-[#2150ff] text-white hover:bg-[#9cf5b4] hover:text-[#05080f]" : "border border-white/25 hover:bg-white hover:text-[#05080f]"
              }`}
            >
              {name}
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}

function Projects() {
  return (
    <section id="work" className={sectionPad}>
      <div className={wrap}>
        <Heading>Projects</Heading>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const outer = useRef(null);
  const track = useRef(null);
  const bar = useRef(null);

  useEffect(() => {
    const lamps = [...track.current.querySelectorAll("[data-lamp]")];
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let vw = 0, vh = 0, dist = 0, lastH = 0, centers = [], raf = 0;

    const measure = () => {
      vw = window.innerWidth;
      vh = window.innerHeight;
      dist = Math.max(0, track.current.offsetWidth - vw);
      centers = lamps.map((l) => l.offsetLeft + l.offsetWidth / 2);
      const h = Math.round(vh + dist);
      if (h !== lastH) {
        lastH = h;
        outer.current.style.height = `${h}px`;
        window.dispatchEvent(new Event("resize"));
      }
    };

    const update = () => {
      raf = 0;
      const r = outer.current.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, -r.top / Math.max(1, r.height - vh)));
      const x = -p * dist;
      track.current.style.transform = `translate3d(${x}px,0,0)`;
      if (bar.current) bar.current.style.transform = `scaleX(${p})`;
      lamps.forEach((lamp, i) => {
        const c = (centers[i] + x - vw / 2) / vw;
        const d = Math.min(1, Math.abs(c) * 1.4);
        if (!reduce) {
          const g = Math.max(0.15, 1 - d * 0.85);
          lamp.style.setProperty("--g", String(g));
          lamp.style.transform = `perspective(1000px) rotateY(${-c * 12}deg) scale(${1 - d * 0.08})`;
          lamp.style.opacity = String(1 - d * 0.4);
        }
      });
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measure);
    if (document.readyState === "complete") measure();
    else window.addEventListener("load", measure);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
      window.removeEventListener("load", measure);
    };
  }, []);

  return (
    <section id="skills" ref={outer} className="relative">
      <div className="sticky top-0 h-screen overflow-clip flex flex-col">
        <div className={`${wrap} relative z-10 pt-20 pb-4 pointer-events-none`}>
          <Heading className="!mb-0">Skills</Heading>
        </div>

        <div ref={track} className="relative flex flex-1 w-max flex-row items-end px-[4vw] pb-[120px] will-change-transform">
          
          {/* PROMINENT ROAD BACKGROUND */}
          <div className="absolute inset-x-0 bottom-0 h-[120px] bg-[#0f172a] border-t-2 border-[#334155] z-0 shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
            {/* Dashed Road Line */}
            <div className="absolute left-0 right-0 top-1/2 h-1.5 -translate-y-1/2 bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.2)_0_40px,transparent_40px_80px)]" />
            {/* Bottom edge shadow */}
            <div className="absolute inset-x-0 bottom-0 h-4 bg-gradient-to-t from-black/50 to-transparent" />
          </div>

          {SKILLS.map(([group, items]) => (
            <div key={group} data-lamp className="relative h-[max(580px,75vh)] w-[28vw] min-w-[320px] max-w-[420px] flex-none">
              
              {/* Light beam */}
              <div className="absolute bottom-0 left-1/2 top-[58px] w-[min(320px,86%)] -translate-x-1/2" style={{ opacity: "var(--g,.5)" }}>
                <div className="h-full w-full animate-[lamp_3.2s_ease-in-out_infinite] bg-gradient-to-b from-[rgba(190,255,70,.34)] to-[rgba(190,255,70,.03)] [clip-path:polygon(44%_0,56%_0,100%_100%,0_100%)]" />
              </div>
              
              {/* Glow around bulb */}
              <div className="absolute left-1/2 top-[14px] h-28 w-28 -translate-x-1/2" style={{ opacity: "var(--g,.5)" }}>
                <div className="h-full w-full animate-[lamp_3.2s_ease-in-out_infinite] rounded-full bg-[radial-gradient(circle,rgba(190,255,70,.8),transparent_65%)]" />
              </div>
              
              {/* Light pool on road */}
              <div className="absolute bottom-[0px] left-1/2 h-10 w-[min(340px,95%)] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(ellipse_at_center,rgba(190,255,70,.6),transparent_70%)]" style={{ opacity: "var(--g,.5)" }} />

              {/* Pole */}
              <div className="absolute bottom-0 left-1/2 top-[62px] w-2 -translate-x-1/2 bg-gradient-to-r from-[#16224d] via-[#3c4f8f] to-[#16224d] z-10" />
              <div className="absolute bottom-0 left-1/2 h-3 w-9 -translate-x-1/2 rounded-sm bg-[#1d2d66] z-10" />

              {/* Lamp Head */}
              <div className="absolute left-1/2 top-0 flex -translate-x-1/2 flex-col items-center z-20">
                <div className="h-2 w-1 bg-[#2a3a78]" />
                <div className="h-4 w-14 bg-[#1d2d66] [clip-path:polygon(18%_0,82%_0,100%_100%,0_100%)]" />
                <div className="h-9 w-10 rounded-b-md bg-[radial-gradient(circle,#f4ffe0_0%,#c6ff6b_45%,#9cf5b4_70%)] shadow-[0_0_28px_rgba(190,255,70,.55)]" />
                
                {/* High Visibility Category Label */}
                <div className="mt-2 rounded-md border-2 border-[#9cf5b4] bg-[#9cf5b4] px-3 py-0.5 text-[.8rem] font-extrabold text-[#05080f] shadow-[0_0_20px_rgba(190,255,70,.6)] whitespace-nowrap">
                  {group}
                </div>
              </div>

              {/* Skill Branches */}
              <div className="absolute left-0 right-0 top-[150px] bottom-24 flex flex-col justify-center gap-y-2.5 z-10">
                {items.map((s, j) => {
                  const isLeft = j % 2 === 0;
                  return (
                    <div key={s} className={`flex w-full ${isLeft ? 'justify-start' : 'justify-end'}`}>
                      <div className={`flex items-center w-[50%] ${isLeft ? 'justify-end pr-[2px]' : 'justify-start pl-[2px]'}`}>
                        
                        {isLeft ? (
                          <>
                            <div className="rounded-md border border-white/20 bg-[#0b1330]/90 px-2.5 py-0.5 text-[.75rem] font-semibold text-white shadow-lg backdrop-blur-md whitespace-nowrap hover:border-[#9cf5b4]/50 hover:text-[#9cf5b4] transition-colors cursor-default">
                              {s}
                            </div>
                            <div className="h-[2px] w-4 bg-[#9cf5b4]/40 shadow-[0_0_8px_rgba(156,245,180,.3)]" />
                          </>
                        ) : (
                          <>
                            <div className="h-[2px] w-4 bg-[#9cf5b4]/40 shadow-[0_0_8px_rgba(156,245,180,.3)]" />
                            <div className="rounded-md border border-white/20 bg-[#0b1330]/90 px-2.5 py-0.5 text-[.75rem] font-semibold text-white shadow-lg backdrop-blur-md whitespace-nowrap hover:border-[#9cf5b4]/50 hover:text-[#9cf5b4] transition-colors cursor-default">
                              {s}
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          ))}
        </div>

        <div className={`${wrap} absolute inset-x-0 bottom-8 z-20`}>
          <div className="h-0.5 w-full bg-white/10">
            <div ref={bar} className="h-full origin-left bg-[#9cf5b4]" style={{ transform: "scaleX(0)" }} />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ label, value, href, icon }) {
  const className = "group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[.04] p-4 transition hover:border-[#9cf5b4]/40 hover:bg-white/[.07]";
  const content = (
    <>
      <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/15 bg-white/[.06] text-[#9cf5b4]">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          {icon}
        </svg>
      </span>
      <span>
        <span className="block text-[.85rem] font-medium text-[#8e9cc9]">{label}</span>
        <span className="mt-0.5 block font-semibold text-[#e8eeff] group-hover:text-[#9cf5b4]">{value}</span>
      </span>
    </>
  );

  if (!href) {
    return <div className={className}>{content}</div>;
  }
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={className}
    >
      {content}
    </a>
  );
}

function Contact() {
  return (
    <section id="contact" className={sectionPad}>
      <div className={wrap}>
        <Heading>Contact</Heading>
        <div className="max-w-[540px]">
          <p className="mb-8 text-[1.15rem]">
            Looking for a full-stack developer who ships production-ready systems? Let’s talk.
          </p>
          <div className="grid gap-3 sm:grid-cols-1">
            <ContactRow
              label="Email"
              value={EMAIL}
              href={`mailto:${EMAIL}`}
              icon={<><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></>}
            />
            <ContactRow
              label="GitHub"
              value="github.com/Sumitdarkcodes"
              href={GH}
              icon={<><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></>}
            />
            <ContactRow
              label="LinkedIn"
              value="linkedin.com/in/sumit-kumar-8852a9118"
              href={LINKEDIN}
              icon={<><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></>}
            />
            {PHONE && (
              <ContactRow
                label="Phone"
                value={PHONE}
                href={`tel:${PHONE.replace(/[^\d+]/g, "")}`}
                icon={<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />}
              />
            )}
            {LOCATION && (
              <ContactRow
                label="Location"
                value={LOCATION}
                icon={<><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></>}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* App                                                                 */
/* ------------------------------------------------------------------ */
export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#05080f] font-['Instrument_Sans'] text-[1.06rem] leading-[1.65] text-[#e8eeff]">
      <style>{`
        html{scroll-behavior:smooth;scroll-padding-top:60px}
        a:focus-visible,button:focus-visible{outline:3px solid #9cf5b4;outline-offset:3px}
        @keyframes reveal{from{clip-path:inset(100% 0 0 0)}to{clip-path:inset(0)}}
        @keyframes rise{from{transform:translateY(105%)}}
        @keyframes lamp{0%,100%{opacity:.82}50%{opacity:1}}
        @media (prefers-reduced-motion:reduce){html{scroll-behavior:auto}*{animation:none!important}}
      `}</style>

      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(60vw_50vh_at_88%_8%,rgba(33,80,255,.28),transparent_70%),radial-gradient(50vw_40vh_at_0%_100%,rgba(33,80,255,.18),transparent_70%)]"
      />

      <Nav />
      <Avatar />

      <main className="relative z-[2]">
        <Hero />
        <About />
        <Timeline id="experience" heading="Experience" items={EXPERIENCE} />
        <Timeline id="education" heading="Education" items={EDUCATION} />
        <Projects />
        <Skills />
        <Timeline id="certifications" heading="Certifications" items={CERTIFICATIONS} />
        <Contact />
      </main>

      <footer className="relative z-[2] pb-14 pt-9 text-[.95rem] text-[#8e9cc9]">
        <div className={wrap}>© Sumit Kumar</div>
      </footer>
    </div>
  );
}