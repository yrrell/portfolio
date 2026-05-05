import { useEffect, useRef, useState } from "react";

const skills = [
  { name: "Next.js / React", pct: 85, color: "#2563eb" },
  { name: "TypeScript", pct: 78, color: "#3b82f6" },
  { name: "Tailwind CSS", pct: 90, color: "#06b6d4" },
  { name: "Laravel (PHP)", pct: 80, color: "#818cf8" },
  { name: "MySQL / Supabase", pct: 75, color: "#2563eb" },
  { name: "Git & GitHub", pct: 82, color: "#3b82f6" },
  { name: "Termux / Linux CLI", pct: 88, color: "#06b6d4" },
  { name: "UI / UX Design", pct: 72, color: "#818cf8" },
];

const certs = [
  { title: "Self-Taught Developer", org: "Personal Projects", year: "2021–Present" },
  { title: "KumpuniGo! Live App", org: "Vercel Deployment", year: "2025–2026" },
  { title: "Laravel Auth System", org: "Full-Stack Project", year: "2024" },
];

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills" className="py-24 relative dotgrid" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-14">
          <p className="slabel mb-4">02. Skills</p>
          <h2
            className="text-4xl font-bold text-white"
            style={{ fontFamily: "'Sora',sans-serif" }}
          >
            What I Work With
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-14">
          {/* Skill bars */}
          <div className="space-y-6">
            {skills.map((s, i) => (
              <div key={s.name}>
                <div className="flex justify-between mb-2">
                  <span className="text-slate-300 text-sm font-medium">{s.name}</span>
                  <span
                    className="text-xs font-mono"
                    style={{ color: s.color }}
                  >
                    {s.pct}%
                  </span>
                </div>
                <div
                  style={{
                    height: 4,
                    background: "rgba(37,99,235,0.12)",
                    borderRadius: 99,
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      borderRadius: 99,
                      background: `linear-gradient(to right, ${s.color}, #06b6d4)`,
                      width: visible ? `${s.pct}%` : "0%",
                      transition: `width 1s cubic-bezier(0.4,0,0.2,1) ${i * 80}ms`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Highlights */}
          <div className="space-y-5">
            <h3 className="text-slate-500 text-xs font-mono uppercase tracking-widest mb-6">
              Unique Highlights
            </h3>

            <div className="card p-5 flex gap-4 items-start">
              <span className="text-2xl">📱</span>
              <div>
                <div
                  className="text-white font-semibold mb-1"
                  style={{ fontFamily: "'Sora',sans-serif" }}
                >
                  Mobile-First Developer
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  I built complete web apps using Termux (Linux CLI on Android) and
                  KSWeb — a full server environment on my phone — long before having
                  a desktop setup.
                </p>
              </div>
            </div>

            <div className="card p-5 flex gap-4 items-start">
              <span className="text-2xl">🚀</span>
              <div>
                <div
                  className="text-white font-semibold mb-1"
                  style={{ fontFamily: "'Sora',sans-serif" }}
                >
                  Vercel Deployment
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  All my projects are production-deployed on Vercel with CI/CD via
                  GitHub — from a fully live community PWA to Laravel-powered systems.
                </p>
              </div>
            </div>

            <div className="card p-5 flex gap-4 items-start">
              <span className="text-2xl">🛠️</span>
              <div>
                <div
                  className="text-white font-semibold mb-1"
                  style={{ fontFamily: "'Sora',sans-serif" }}
                >
                  Full-Stack Versatility
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Equally comfortable building front-end UIs with Next.js + Tailwind
                  and back-end APIs with Laravel, Supabase, and MySQL.
                </p>
              </div>
            </div>

            {/* Certs */}
            <h3 className="text-slate-500 text-xs font-mono uppercase tracking-widest mt-8 mb-4">
              Milestones
            </h3>
            {certs.map((c) => (
              <div
                key={c.title}
                className="flex items-center justify-between py-3"
                style={{ borderBottom: "1px solid rgba(37,99,235,0.1)" }}
              >
                <div>
                  <div className="text-white text-sm font-medium">{c.title}</div>
                  <div className="text-slate-500 text-xs">{c.org}</div>
                </div>
                <span className="tag">{c.year}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
