import { useState } from "react";
import Image from "next/image";

const slides = [
  {
    img: "/images/mockup/kumpunigo-hero.png",
    title: "KumpuniGo!",
    subtitle: "Community Shop Finder PWA",
    desc: "Your community-powered guide to finding the nearest vulcanizing and motor repair shops anywhere in the Philippines.",
    tags: ["Next.js", "TypeScript", "Supabase", "Leaflet", "Vercel"],
    feature: "🔍 Live App",
    url: "https://kumpuni-go.vercel.app/",
  },
  {
    img: "/images/mockup/kumpunigo-nearby.png",
    title: "Find Nearby Shops",
    subtitle: "Location-aware shop listing",
    desc: "Locate the nearest vulcanizing and motor shops, sorted by open status and distance from you in real-time.",
    tags: ["Geolocation API", "Open-First Sorting", "PWA"],
    feature: "📍 GPS-powered",
    url: "https://kumpuni-go.vercel.app/",
  },
  {
    img: "/images/mockup/kumpunigo-map.png",
    title: "Live Interactive Map",
    subtitle: "Leaflet.js integration",
    desc: "View all approved shops pinned on a live map with type icons and open/closed status indicators.",
    tags: ["Leaflet.js", "Real-time", "Map Pins"],
    feature: "🗺️ Live Map",
    url: "https://kumpuni-go.vercel.app/",
  },
  {
    img: "/images/mockup/kumpunigo-community.png",
    title: "Community Contributions",
    subtitle: "Admin-reviewed submissions",
    desc: "Registered users can submit new shops with a photo as proof for admin review — keeping data trustworthy.",
    tags: ["Google Auth", "Supabase Storage", "Admin Panel"],
    feature: "👥 Community",
    url: "https://kumpuni-go.vercel.app/",
  },
  {
    img: "/images/mockup/kumpunigo-updates.png",
    title: "Shop Updates",
    subtitle: "Community-driven data",
    desc: "Users can report changes — contact numbers, hours, location moved, permanently closed — with optional photo evidence.",
    tags: ["Contribution Flow", "Admin Review", "Photo Upload"],
    feature: "✏️ Updates",
    url: "https://kumpuni-go.vercel.app/",
  },
  {
    img: "/images/mockup/kumpunigo-antiscam.png",
    title: "Anti-Scam System",
    subtitle: "3-strike ban system",
    desc: "Google sign-in required for contributions. A 3-strike warning system permanently bans repeat fake submitters.",
    tags: ["Google OAuth", "3-Strike System", "Auto-ban"],
    feature: "🛡️ Anti-Scam",
    url: "https://kumpuni-go.vercel.app/",
  },
  {
    img: "/images/mockup/kumpunigo-email.png",
    title: "Email Notifications",
    subtitle: "Automated contributor updates",
    desc: "Contributors receive email updates when their shop submission is approved or rejected by the admin.",
    tags: ["Email API", "Admin Panel", "Auto Notify"],
    feature: "📧 Notifications",
    url: "https://kumpuni-go.vercel.app/",
  },
  {
    img: "/images/mockup/kumpunigo-nationwide.png",
    title: "Nationwide Coverage",
    subtitle: "Built to scale across PH",
    desc: "Built for the Philippines and designed to scale nationally as the community grows — Version 2.0.0 live.",
    tags: ["Philippines 🇵🇭", "Scalable", "v2.0.0"],
    feature: "🌏 Nationwide",
    url: "https://kumpuni-go.vercel.app/",
  },
  {
    img: "/images/mockup/kumpunigo-qr.png",
    title: "Try It Now",
    subtitle: "Scan or visit directly",
    desc: "Live on Vercel — scan the QR or visit the URL to try KumpuniGo! on your mobile device right now.",
    tags: ["Live", "Vercel", "Mobile PWA"],
    feature: "📱 QR Ready",
    url: "https://kumpuni-go.vercel.app/",
  },
];

const otherProjects = [
  {
    emoji: "🔐",
    title: "Laravel Auth System",
    desc: "Full authentication flow with login, registration, password reset, custom middleware, and dark-themed Blade UI.",
    tags: ["Laravel", "PHP", "MySQL", "XAMPP", "Blade"],
    date: "2024",
  },
];

export default function Projects() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="projects"
      className="py-24 relative"
      style={{ background: "rgba(10,22,40,0.4)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-14">
          <p className="slabel mb-4">03. Projects</p>
          <h2
            className="text-4xl font-bold text-white mb-3"
            style={{ fontFamily: "'Sora',sans-serif" }}
          >
            What I&apos;ve Built
          </h2>
          <p className="text-slate-400 max-w-xl">
            Real applications, deployed and used — not just demos.
          </p>
        </div>

        {/* ── KumpuniGo Feature Showcase ── */}
        <div
          className="card p-0 overflow-hidden mb-8"
          style={{ borderRadius: 20 }}
        >
          {/* Top label */}
          <div
            className="px-6 py-3 flex items-center gap-2"
            style={{ background: "rgba(37,99,235,0.08)", borderBottom: "1px solid rgba(37,99,235,0.12)" }}
          >
            <span className="text-xs font-mono text-blue-400 uppercase tracking-widest">
              Featured Project
            </span>
            <span
              className="ml-auto text-xs font-mono px-2 py-1 rounded-full"
              style={{ background: "rgba(37,99,235,0.15)", color: "#60a5fa" }}
            >
              v2.0.0 • Live on Vercel
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-0">
            {/* Image panel */}
            <div
              className="relative overflow-hidden"
              style={{ minHeight: 380, background: "#060f1e" }}
            >
              {slides.map((s, i) => (
                <div
                  key={i}
                  className="absolute inset-0 transition-opacity duration-500"
                  style={{ opacity: active === i ? 1 : 0, pointerEvents: active === i ? "auto" : "none" }}
                >
                  <Image
                    src={s.img}
                    alt={s.title}
                    fill
                    style={{ objectFit: "cover", objectPosition: "center" }}
                  />
                </div>
              ))}

              {/* Slide counter */}
              <div
                className="absolute bottom-4 left-4 font-mono text-xs"
                style={{
                  background: "rgba(2,12,27,0.75)",
                  border: "1px solid rgba(37,99,235,0.2)",
                  borderRadius: 8,
                  padding: "4px 10px",
                  color: "#60a5fa",
                }}
              >
                {active + 1} / {slides.length}
              </div>
            </div>

            {/* Info panel */}
            <div className="p-8 flex flex-col justify-between">
              <div>
                {/* Feature badge */}
                <span
                  className="inline-block mb-4 text-xs font-mono px-3 py-1 rounded-full"
                  style={{
                    background: "rgba(37,99,235,0.15)",
                    border: "1px solid rgba(37,99,235,0.25)",
                    color: "#60a5fa",
                  }}
                >
                  {slides[active].feature}
                </span>

                <h3
                  className="text-2xl font-bold text-white mb-1"
                  style={{ fontFamily: "'Sora',sans-serif" }}
                >
                  {slides[active].title}
                </h3>
                <p className="text-blue-400 text-sm mb-4">{slides[active].subtitle}</p>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {slides[active].desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {slides[active].tags.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>

              {/* Slide dots & CTA */}
              <div>
                {/* Dot nav */}
                <div className="flex gap-2 flex-wrap mb-6">
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActive(i)}
                      style={{
                        width: active === i ? 24 : 8,
                        height: 8,
                        borderRadius: 99,
                        border: "none",
                        cursor: "pointer",
                        transition: "all 0.3s",
                        background: active === i
                          ? "linear-gradient(to right,#2563eb,#06b6d4)"
                          : "rgba(37,99,235,0.2)",
                      }}
                    />
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={slides[active].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    style={{ fontSize: "0.8rem", padding: "0.6rem 1.4rem" }}
                  >
                    View Live →
                  </a>
                  <button
                    onClick={() => setActive((active + 1) % slides.length)}
                    className="btn btn-ghost"
                    style={{ fontSize: "0.8rem", padding: "0.6rem 1.2rem" }}
                  >
                    Next Feature
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Thumbnail strip */}
          <div
            className="flex gap-2 px-6 py-4 overflow-x-auto"
            style={{ borderTop: "1px solid rgba(37,99,235,0.1)", background: "rgba(2,12,27,0.5)" }}
          >
            {slides.map((s, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                title={s.title}
                style={{
                  flexShrink: 0,
                  width: 64,
                  height: 44,
                  borderRadius: 8,
                  overflow: "hidden",
                  border: `2px solid ${active === i ? "#2563eb" : "rgba(37,99,235,0.15)"}`,
                  position: "relative",
                  cursor: "pointer",
                  transition: "border-color 0.2s",
                  background: "#060f1e",
                }}
              >
                <Image src={s.img} alt={s.title} fill style={{ objectFit: "cover" }} />
              </button>
            ))}
          </div>
        </div>

        {/* ── Other Projects ── */}
        <h3
          className="text-slate-400 text-xs font-mono uppercase tracking-widest mb-5"
        >
          Other Projects
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {otherProjects.map((p) => (
            <div key={p.title} className="card p-6">
              <div className="text-3xl mb-3">{p.emoji}</div>
              <h4
                className="text-white font-semibold mb-2"
                style={{ fontFamily: "'Sora',sans-serif" }}
              >
                {p.title}
              </h4>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
              <div className="mt-4 text-xs text-slate-600 font-mono">{p.date}</div>
            </div>
          ))}

          {/* More coming */}
          <div
            className="card p-6 flex flex-col items-center justify-center text-center"
            style={{ minHeight: 160, borderStyle: "dashed" }}
          >
            <div className="text-3xl mb-3">🚧</div>
            <div className="text-slate-500 text-sm">More projects coming soon…</div>
          </div>
        </div>
      </div>
    </section>
  );
}
