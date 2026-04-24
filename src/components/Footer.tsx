export function Footer() {
  return (
    <footer className="mt-auto w-full border-t border-[var(--border)] px-6 py-8 sm:px-10">
      <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-2 font-mono text-xs tracking-wide text-[var(--muted)] sm:flex-row sm:items-center">
        <span>© {new Date().getFullYear()} Michael Quispe</span>
        <span>Built in Next.js · Tuned for speed</span>
      </div>
    </footer>
  );
}
