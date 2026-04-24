export function Footer() {
  return (
    <footer className="relative mt-auto w-full border-t border-[var(--border)] px-6 py-8 sm:px-10">
      <span aria-hidden className="m-stripe absolute inset-x-0 top-0 mx-auto h-[2px] w-40 -translate-y-px rounded-full opacity-70" />
      <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-2 font-mono text-[11px] font-medium tracking-[0.2em] text-[var(--muted)] sm:flex-row sm:items-center">
        <span>© {new Date().getFullYear()} MICHAEL QUISPE</span>
        <span>BUILT IN NEXT.JS · TUNED FOR SPEED</span>
      </div>
    </footer>
  );
}
