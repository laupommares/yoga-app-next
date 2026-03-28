export default function Footer() {
    return (
      <footer className="w-full bg-stone-100 pb-12 pt-24">
        <div className="flex flex-col items-center justify-between gap-8 px-12 text-center md:flex-row md:text-left">
          <div className="space-y-4">
            <span className="font-headline block text-2xl italic tracking-wide text-stone-800">
              Elena Yoga
            </span>
            <p className="font-headline text-sm font-light text-stone-600">
              © 2024 Elena Yoga. Presence in movement.
            </p>
          </div>
  
          <div className="flex gap-10">
            <a
              className="text-[10px] uppercase tracking-[0.15em] text-stone-500 underline-offset-4 transition-colors hover:text-primary hover:underline"
              href="#"
            >
              Privacy
            </a>
            <a
              className="text-[10px] uppercase tracking-[0.15em] text-stone-500 underline-offset-4 transition-colors hover:text-primary hover:underline"
              href="#"
            >
              Terms
            </a>
            <a
              className="text-[10px] uppercase tracking-[0.15em] text-stone-500 underline-offset-4 transition-colors hover:text-primary hover:underline"
              href="#"
            >
              Instagram
            </a>
            <a
              className="text-[10px] uppercase tracking-[0.15em] text-stone-500 underline-offset-4 transition-colors hover:text-primary hover:underline"
              href="#"
            >
              Pinterest
            </a>
          </div>
        </div>
      </footer>
    );
  }