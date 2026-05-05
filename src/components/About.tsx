import Image from "next/image";

const tools = [
  { logo: "/images/logo/vscode.png",      name: "VS Code",      desc: "Primary code editor" },
  { logo: "/images/logo/xampp.png",       name: "XAMPP",        desc: "Local PHP & MySQL server" },
  { logo: "/images/logo/ksweb.png",       name: "KSWeb",        desc: "Web server on Android" },
  { logo: "/images/logo/termux.png",      name: "Termux",       desc: "Linux terminal on Android" },
  { logo: "/images/logo/nextjs.png",      name: "Next.js",      desc: "React framework" },
  { logo: "/images/logo/typescript.png",  name: "TypeScript",   desc: "Typed JavaScript" },
  { logo: "/images/logo/tailwind.png",    name: "Tailwind CSS", desc: "Utility-first CSS" },
  { logo: "/images/logo/laravel.png",     name: "Laravel",      desc: "PHP framework" },
  { logo: "/images/logo/javascript.png",  name: "JavaScript",   desc: "Core web language" },
  { logo: "/images/logo/php.png",         name: "PHP",          desc: "Server-side scripting" },
  { logo: "/images/logo/mysql.png",       name: "MySQL",        desc: "Relational database" },
  { logo: "/images/logo/github.png",      name: "GitHub",       desc: "Version control & hosting" },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative" style={{ background: "rgba(10,22,40,0.5)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <p className="slabel mb-4">01. About Me</p>
          <h2 className="text-4xl font-bold text-white" style={{ fontFamily: "'Sora',sans-serif" }}>
            Who I Am
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Bio */}
          <div>
            <p className="text-slate-400 leading-relaxed mb-5">
              I&apos;m a self-taught Filipino web developer with a passion for building
              real-world, community-driven web applications. What makes me unique is that
              I started coding{" "}
              <span className="text-white font-semibold">entirely on my Android phone</span>{" "}
              — using Termux and KSWeb — before moving to a full desktop setup with VS Code and XAMPP.
            </p>
            <p className="text-slate-400 leading-relaxed mb-5">
              I love tackling problems that matter to real people. My project{" "}
              <span className="text-blue-400 font-medium">KumpuniGo!</span> is a
              community-powered PWA that helps Filipinos find the nearest vulcanizing and
              motor repair shops anywhere in the Philippines — built entirely by me, from
              design to deployment on Vercel.
            </p>
            <p className="text-slate-400 leading-relaxed">
              I&apos;m also well-versed in{" "}
              <span className="text-blue-400 font-medium">Laravel</span> — having built full
              authentication systems with login, registration, password reset, custom middleware,
              and Blade templating with dark-themed UIs.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {[
                { k: "Location", v: "Philippines 🇵🇭" },
                { k: "Focus",    v: "Full-Stack Dev" },
                { k: "Deploy",   v: "Vercel" },
                { k: "Mobile",   v: "Termux + KSWeb" },
              ].map((f) => (
                <div key={f.k} className="flex items-center gap-2"
                  style={{ padding:"10px 14px", background:"rgba(37,99,235,0.07)",
                    border:"1px solid rgba(37,99,235,0.15)", borderRadius:10 }}>
                  <span className="text-slate-500 text-xs font-mono">{f.k}:</span>
                  <span className="text-white text-xs font-medium">{f.v}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools grid */}
          <div>
            <h3 className="text-slate-500 text-xs font-mono uppercase tracking-widest mb-5">
              Tools & Technologies
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {tools.map((t) => (
                <div key={t.name} className="card p-4 flex items-center gap-3">
                  <div style={{ width:38, height:38, borderRadius:8, overflow:"hidden",
                    background:"rgba(255,255,255,0.05)", display:"flex",
                    alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                    <Image
                      src={t.logo}
                      alt={t.name}
                      width={28}
                      height={28}
                      style={{ objectFit:"contain" }}
                    />
                  </div>
                  <div>
                    <div className="text-white text-sm font-semibold"
                      style={{ fontFamily:"'Sora',sans-serif" }}>{t.name}</div>
                    <div className="text-slate-500 text-xs">{t.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
