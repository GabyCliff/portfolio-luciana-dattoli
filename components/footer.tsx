export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-center">
        <div className="flex items-center gap-2">
          <svg
            className="h-4 w-4 text-primary/50"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22L6.66 19.7C7.14 19.87 7.64 20 8.17 20C12.09 20 15.37 16.73 16.45 12.42C17.53 8.12 21 4 21 4C21 4 18.5 4 17 8Z" />
          </svg>
          <span className="font-serif text-sm font-medium text-foreground/40">
            Portfolio UX/UI
          </span>
        </div>
        <p className="font-sans text-xs text-foreground/30">
          {'Disenado con amor y mucho research. 2026.'}
        </p>
      </div>
    </footer>
  )
}
