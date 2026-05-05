import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="py-24 relative dotgrid">
      <div className="max-w-3xl mx-auto px-6 text-center">
        {/* Header */}
        <p className="slabel mb-4 justify-center">04. Contact</p>
        <h2
          className="text-4xl font-bold text-white mb-4"
          style={{ fontFamily: "'Sora',sans-serif" }}
        >
          Let&apos;s Chat 👋
        </h2>
        <p className="text-slate-400 mb-12 text-base">
          Whether you have a project in mind, a question, or just want to connect
          — my inbox is always open.
        </p>

        {/* Form */}
        <div className="card p-8 text-left">
          {sent ? (
            <div className="text-center py-8">
              <div className="text-5xl mb-4">✅</div>
              <h3
                className="text-white text-xl font-bold mb-2"
                style={{ fontFamily: "'Sora',sans-serif" }}
              >
                Message sent!
              </h3>
              <p className="text-slate-400 text-sm">
                Thanks for reaching out — I&apos;ll get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs text-slate-400 mb-1 font-mono uppercase tracking-wider">
                    Name
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition-all focus:ring-2 focus:ring-blue-500"
                    style={{
                      background: "rgba(37,99,235,0.06)",
                      border: "1px solid rgba(37,99,235,0.18)",
                    }}
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1 font-mono uppercase tracking-wider">
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="your@email.com"
                    className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition-all focus:ring-2 focus:ring-blue-500"
                    style={{
                      background: "rgba(37,99,235,0.06)",
                      border: "1px solid rgba(37,99,235,0.18)",
                    }}
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs text-slate-400 mb-1 font-mono uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Tell me about your project…"
                  className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 outline-none resize-none transition-all focus:ring-2 focus:ring-blue-500"
                  style={{
                    background: "rgba(37,99,235,0.06)",
                    border: "1px solid rgba(37,99,235,0.18)",
                  }}
                />
              </div>
              <button type="submit" className="btn btn-primary w-full justify-center">
                Send Message ✉
              </button>
            </form>
          )}
        </div>

        {/* Direct contact links */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {[
            { icon: "📧", label: "Email", href: "mailto:johndev@gmail.com" },
            { icon: "💼", label: "GitHub", href: "https://github.com" },
            { icon: "📘", label: "Facebook", href: "https://facebook.com" },
          ].map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
              style={{ fontSize: "0.82rem", padding: "0.55rem 1.2rem" }}
            >
              {c.icon} {c.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
