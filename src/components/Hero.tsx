import Image from "next/image";

const stats = [
  { value: "3+", label: "Years Coding" },
  { value: "5+", label: "Projects Built" },
  { value: "100%", label: "Self-Taught" },
  { value: "∞", label: "Curiosity" },
];

const socials = [
  { icon: "📧", href: "mailto:johndev@gmail.com", label: "Email" },
  { icon: "💼", href: "https://github.com", label: "GitHub" },
  { icon: "📱", href: "https://facebook.com", label: "Facebook" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center dotgrid overflow-hidden"
      style={{ paddingTop: "90px" }}
    >
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% -5%, rgba(37,99,235,0.22) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 py-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — Text */}
          <div>
            {/* Badge */}
            <span
              className="slabel afu mb-6 inline-flex"
              style={{ opacity: 0, animationFillMode: "forwards" }}
            >
              👋 Hi, I&apos;m John
            </span>

            <h1
              className="afu d1 text-5xl lg:text-6xl font-bold leading-tight mb-4"
              style={{
                fontFamily: "'Sora',sans-serif",
                opacity: 0,
                animationFillMode: "forwards",
              }}
            >
              <span className="text-white">Full-Stack</span>
              <br />
              <span className="gt">Web Developer</span>
            </h1>

            <p
              className="afu d2 text-slate-400 text-base lg:text-lg leading-relaxed mb-8 max-w-lg"
              style={{ opacity: 0, animationFillMode: "forwards" }}
            >
              I build responsive, community-driven web applications using{" "}
              <span className="text-blue-400 font-medium">Next.js</span>,{" "}
              <span className="text-blue-400 font-medium">Laravel</span>, and modern
              tooling — from my Android phone using{" "}
              <span className="text-cyan-400 font-medium">Termux & KSWeb</span>, to VS Code
              and XAMPP on desktop.
            </p>

            {/* Social icons */}
            <div
              className="afu d3 flex gap-3 mb-10"
              style={{ opacity: 0, animationFillMode: "forwards" }}
            >
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.label}
                  className="w-10 h-10 flex items-center justify-center rounded-full text-base transition-all duration-300 hover:scale-110"
                  style={{
                    background: "rgba(37,99,235,0.12)",
                    border: "1px solid rgba(37,99,235,0.25)",
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>

            {/* CTAs */}
            <div
              className="afu d4 flex flex-wrap gap-4"
              style={{ opacity: 0, animationFillMode: "forwards" }}
            >
              <button
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="btn btn-primary"
              >
                View My Work →
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="btn btn-ghost"
              >
                Get In Touch
              </button>
            </div>

            {/* Stats */}
            <div
              className="afu d5 grid grid-cols-4 gap-4 mt-12 pt-10"
              style={{
                opacity: 0,
                animationFillMode: "forwards",
                borderTop: "1px solid rgba(37,99,235,0.15)",
              }}
            >
              {stats.map((s) => (
                <div key={s.label}>
                  <div
                    className="text-3xl font-bold text-white"
                    style={{ fontFamily: "'Sora',sans-serif" }}
                  >
                    {s.value}
                  </div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider mt-1">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative aflt" style={{ width: 340, height: 380 }}>
              {/* Glow ring */}
              <div
                className="absolute inset-0 rounded-[28px]"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(37,99,235,0.35) 0%, rgba(6,182,212,0.2) 100%)",
                  filter: "blur(24px)",
                  transform: "scale(1.08)",
                }}
              />
              {/* Photo frame */}
              <div
                className="relative w-full h-full rounded-[28px] overflow-hidden"
                style={{
                  border: "2px solid rgba(37,99,235,0.35)",
                  boxShadow: "0 0 40px rgba(37,99,235,0.25)",
                }}
              >
                <Image
                  src="/images/developer.png"
                  alt="Developer"
                  fill
                  style={{ objectFit: "cover", objectPosition: "top center" }}
                  priority
                />
              </div>

              {/* Floating badge */}
              <div
                className="absolute -bottom-4 -left-4 card px-4 py-3 flex items-center gap-2"
                style={{ minWidth: 170 }}
              >
                <span className="text-xl">💻</span>
                <div>
                  <div
                    className="text-white text-xs font-semibold"
                    style={{ fontFamily: "'Sora',sans-serif" }}
                  >
                    Built on Android
                  </div>
                  <div className="text-slate-500 text-[10px]">Termux + KSWeb</div>
                </div>
              </div>

              {/* Top-right badge */}
              <div
                className="absolute -top-3 -right-3 card px-3 py-2 text-center"
              >
                <div className="text-blue-400 text-xs font-mono font-semibold">
                  &lt;/&gt; Next.js
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
