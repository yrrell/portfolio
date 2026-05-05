import { useState, useEffect } from "react";

const links = ["Home", "About", "Skills", "Projects", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (section: string) => {
    setOpen(false);
    const el = document.getElementById(section.toLowerCase());
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(2,12,27,0.92)"
          : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(37,99,235,0.15)"
          : "1px solid transparent",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-[72px]">
        {/* Logo */}
        <span
          className="font-heading font-bold text-xl tracking-tight cursor-pointer"
          style={{ fontFamily: "'Sora',sans-serif" }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <span className="text-white">John</span>
          <span
            style={{
              background: "linear-gradient(135deg,#2563eb,#06b6d4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            .dev
          </span>
        </span>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <button
              key={l}
              onClick={() => handleNav(l)}
              className="navlink bg-transparent border-none cursor-pointer"
            >
              {l}
            </button>
          ))}
        </div>

        {/* CTA */}
        <a
          href="mailto:johndev@gmail.com"
          className="btn btn-primary hidden md:inline-flex"
          style={{ padding: "0.55rem 1.4rem", fontSize: "0.82rem" }}
        >
          ✉ Let&apos;s Talk!
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setOpen(!open)}
          style={{ background: "none", border: "none", cursor: "pointer" }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block h-[2px] bg-white transition-all duration-300"
              style={{
                width: i === 1 && open ? "16px" : "24px",
                opacity: i === 1 ? (open ? 0.4 : 1) : 1,
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden px-6 pb-6 flex flex-col gap-4"
          style={{
            background: "rgba(2,12,27,0.97)",
            borderTop: "1px solid rgba(37,99,235,0.12)",
          }}
        >
          {links.map((l) => (
            <button
              key={l}
              onClick={() => handleNav(l)}
              className="text-left text-slate-300 text-sm font-medium py-2"
              style={{ background: "none", border: "none", cursor: "pointer" }}
            >
              {l}
            </button>
          ))}
          <a href="mailto:johndev@gmail.com" className="btn btn-primary mt-2">
            ✉ Let&apos;s Talk!
          </a>
        </div>
      )}
    </nav>
  );
}
