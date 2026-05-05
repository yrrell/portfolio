export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      className="py-8 text-center text-sm text-slate-600"
      style={{ borderTop: "1px solid rgba(37,99,235,0.1)" }}
    >
      <span style={{ fontFamily: "'JetBrains Mono',monospace" }}>
        © {year} John.dev — Built with Next.js, TypeScript & Tailwind CSS
      </span>
      <br />
      <span className="text-xs mt-1 inline-block text-slate-700">
        Coded with 🤖 Termux + 🌐 KSWeb + 🖥️ VS Code · Deployed on Vercel
      </span>
    </footer>
  );
}
