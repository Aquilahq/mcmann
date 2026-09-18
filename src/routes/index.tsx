import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Clapperboard, X } from "lucide-react";

import headshot from "@/assets/headshot.jpg";
import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";
import p3 from "@/assets/p3.jpg";
import p4 from "@/assets/p4.jpg";
import p5 from "@/assets/p5.jpg";
import p6 from "@/assets/p6.jpg";
import p7 from "@/assets/p7.jpg";
import p8 from "@/assets/p8.jpg";
import { credits, departments } from "@/data/credits";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "James McMann — Actor, Voice-Over Artist, Writer & Producer" },
      {
        name: "description",
        content:
          "Official site of James McMann (James R. McMann): character actor and voice-over artist with 100+ TV and film credits including Fuller House, Shameless, Bones and The Office.",
      },
      { property: "og:title", content: "James McMann — Actor & Voice-Over Artist" },
      {
        property: "og:description",
        content:
          "Character actor, voice-over artist, writer and producer. 100+ TV shows and features. Booking and full filmography.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const gallery = [p6, p8, p3, p5, p7, p1, p2, p4];

const nav = [
  { href: "#biography", label: "Biography" },
  { href: "#credits", label: "Credits" },
  { href: "#voice", label: "Voice" },
  { href: "#stills", label: "Stills" },
  { href: "#booking", label: "Booking" },
];

function Home() {
  const [filter, setFilter] = useState<string>("All");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const shown = credits.filter((c) => filter === "All" || c.department === filter);

  useEffect(() => {
    if (selectedImage === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedImage(null);
      if (event.key === "ArrowLeft") {
        setSelectedImage((current) => (current === null ? null : (current + gallery.length - 1) % gallery.length));
      }
      if (event.key === "ArrowRight") {
        setSelectedImage((current) => (current === null ? null : (current + 1) % gallery.length));
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  return (
    <main className="bg-ink text-bone">
      {/* HERO */}
      <section className="hero-atmosphere relative overflow-hidden border-b border-line">
        <div className="pointer-events-none absolute -right-32 top-24 size-80 rounded-full bg-gold/5 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 pt-6 pb-14 md:px-10">
          <div className="flex items-center justify-between gap-3 font-mono text-[11px] uppercase tracking-[0.28em] text-muted-ink">
            <span>James R. McMann</span>
            <div className="flex items-center gap-4">
              <span className="hidden sm:inline">IMDb nm2282094</span>
              <button
                type="button"
                className="grid size-10 place-items-center rounded-lg border border-line text-gold transition-colors hover:border-gold xl:hidden"
                onClick={() => setMobileNavOpen((open) => !open)}
                aria-label={mobileNavOpen ? "Close navigation" : "Open navigation"}
                aria-expanded={mobileNavOpen}
              >
                {mobileNavOpen ? <X size={19} /> : <Clapperboard size={19} />}
              </button>
            </div>
          </div>
          <nav className={`${mobileNavOpen ? "grid" : "hidden"} mt-5 grid-cols-5 gap-1 border-t border-line pt-3 text-center text-[10px] uppercase xl:mt-0 xl:flex xl:w-auto xl:gap-6 xl:border-0 xl:pt-0 xl:text-[11px]`}>
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setMobileNavOpen(false)}
                className="transition-colors hover:text-gold"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="mt-10 grid items-end gap-10 md:grid-cols-12">
            <div className="animate-fade-up md:col-span-7">
              <p className="slate-label text-center md:text-left">Character Actor · Voice-Over · Writer · Producer</p>
              <h1 className="mt-6 w-full max-w-full text-center text-[11vw] leading-[0.95] font-semibold tracking-[-0.03em] text-balance text-bone md:text-left md:text-7xl">
                JAMES MCMANN
              </h1>
              <div className="mt-8 md:hidden">
                <div className="headshot-image-frame mx-auto w-full max-w-sm">
                  <img
                    src={headshot}
                    alt="Headshot of actor and voice-over artist James McMann"
                    className="w-full rounded-xl object-cover ring-1 ring-line"
                    width={960}
                    height={1200}
                  />
                  <svg className="headshot-sweep" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                    <defs>
                      <linearGradient id="gold-sweep" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0" stopColor="#fff6ad" />
                        <stop offset="0.35" stopColor="#ffd447" />
                        <stop offset="0.7" stopColor="#d99616" />
                        <stop offset="1" stopColor="#fff1a0" />
                      </linearGradient>
                    </defs>
                    <path d="M 6 1 H 94 A 5 5 0 0 1 99 6 V 94 A 5 5 0 0 1 94 99 H 6 A 5 5 0 0 1 1 94 V 6 A 5 5 0 0 1 6 1 Z" />
                  </svg>
                </div>
              </div>
              <p className="mt-6 max-w-[50ch] text-center text-base leading-relaxed text-pretty text-muted-ink md:text-left md:text-lg">
                Southeast Texas by way of the Kenyan Rift Valley. Behind the microphone since 1984,
                on the mark since 2004 — over 100 television shows and features, plus a producer's
                and writer's eye behind the camera.
              </p>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-6 md:justify-start">
                <a
                  href="#credits"
                  className="inline-flex items-center gap-3 rounded-lg bg-gold px-5 py-3 text-sm font-medium text-ink shadow-[0_10px_30px_rgba(211,174,101,0.18)] ring-1 ring-gold transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(211,174,101,0.28)]"
                >
                  <span className="inline-block size-2.5 rounded-full bg-ink" />
                  View Credits
                </a>
                <a
                  href="#booking"
                  className="text-sm font-medium text-bone/80 transition-colors hover:text-gold"
                >
                  Booking &amp; Representation
                </a>
              </div>
              <div className="mt-10 flex flex-wrap gap-10 border-t border-line pt-6">
                {[
                  ["100+", "Titles"],
                  ["41", "Acting Credits"],
                  ["1984", "First Mic"],
                  ["2004", "Screen Debut"],
                ].map(([v, l]) => (
                  <div key={l}>
                    <div className="font-mono text-2xl text-bone">{v}</div>
                    <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-ink">
                      {l}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-fade-up hidden md:col-span-5 md:block">
              <div className="relative">
                <div className="absolute -top-3 -left-1 font-mono text-[10px] tracking-[0.25em] text-gold/70">
                  FRAME 001
                </div>
                <div className="headshot-image-frame">
                  <img
                    src={headshot}
                    alt="Headshot of actor and voice-over artist James McMann"
                    className="w-full rounded-xl object-cover ring-1 ring-line"
                    width={960}
                    height={1200}
                  />
                  <svg className="headshot-sweep" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                  <defs>
                    <linearGradient id="gold-sweep-desktop" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0" stopColor="#fff6ad" />
                      <stop offset="0.35" stopColor="#ffd447" />
                      <stop offset="0.7" stopColor="#d99616" />
                      <stop offset="1" stopColor="#fff1a0" />
                    </linearGradient>
                  </defs>
                  <path d="M 6 1 H 94 A 5 5 0 0 1 99 6 V 94 A 5 5 0 0 1 94 99 H 6 A 5 5 0 0 1 1 94 V 6 A 5 5 0 0 1 6 1 Z" />
                </svg>
                </div>
                <div className="mt-3 flex justify-between font-mono text-[10px] tracking-[0.2em] text-muted-ink">
                  <span>HEADSHOT · 6′0″</span>
                  <span>A.K.A. “JIM”</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BIOGRAPHY */}
      <section id="biography" className="bg-panel">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="slate-label">Slate 02</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance text-bone md:text-4xl">
                Biography
              </h2>
              <dl className="mt-8 space-y-4 font-mono text-[13px] text-muted-ink">
                {[
                  ["Origin", "SE Texas / Kenya"],
                  ["Schooling", "Rift Valley · Wingate"],
                  ["Screen Debut", "2004"],
                  ["Height", "6′ (1.83 m)"],
                  ["Also Known As", "James R. McMann"],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-4 border-b border-line pb-3">
                    <dt className="text-bone/70">{k}</dt>
                    <dd className="text-right">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="md:col-span-8">
              <p className="text-lg leading-relaxed text-pretty text-bone/90 md:text-xl">
                James McMann is an American actor, producer, consultant, screenwriter and coach. He
                grew up in Southeast Texas and later in Kenya, East Africa, attending Rift Valley
                Academy in Kenya and Wingate College in North Carolina.
              </p>
              <p className="mt-5 text-lg leading-relaxed text-pretty text-muted-ink md:text-xl">
                He started voice acting and broadcasting in radio in 1984 and made his on-screen
                acting debut in 2004, after a long career in the IT and data communications
                industry. Since then he has appeared in over 100 TV shows and features — from
                Fuller House and Shameless to Bones, The Middle and The Office — and has worked
                behind the scenes on many other projects, writing and producing the series Gone
                (2011) and co-producing the feature Sumo Joe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CREDITS */}
      <section id="credits" className="border-y border-line bg-ink">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="slate-label">Slate 03</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-bone md:text-4xl">
                Credits
              </h2>
            </div>
            <div className="flex flex-wrap gap-2 font-mono text-[11px] uppercase tracking-[0.15em]">
              {departments.map((d) => (
                <button
                  key={d}
                  onClick={() => setFilter(d)}
                  className={
                    filter === d
                      ? "rounded-lg bg-gold px-3 py-1.5 font-medium text-ink"
                      : "rounded-lg border border-line px-3 py-1.5 text-muted-ink transition-colors hover:text-bone"
                  }
                >
                  {d}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-12 gap-x-4 border-b border-line pb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-ink">
            <span className="col-span-2 md:col-span-1">No.</span>
            <span className="col-span-6 md:col-span-4">Production</span>
            <span className="hidden md:col-span-4 md:block">Role</span>
            <span className="col-span-2 md:col-span-1">Type</span>
            <span className="col-span-2 text-right">Year</span>
          </div>
          <div className="divide-y divide-line">
            {shown.map((c, i) => (
              <div
                key={`${c.title}-${c.role}`}
                className="grid grid-cols-12 items-baseline gap-x-4 py-4 transition-colors hover:bg-bone/[0.03]"
              >
                <span className="col-span-2 font-mono text-[12px] text-gold/70 md:col-span-1">
                  {String(i + 1).padStart(3, "0")}
                </span>
                <span className="col-span-6 text-base font-medium text-bone md:col-span-4">
                  {c.title}
                  <span className="mt-1 block text-sm font-normal text-muted-ink md:hidden">
                    {c.role}
                  </span>
                </span>
                <span className="hidden text-sm text-muted-ink md:col-span-4 md:block">
                  {c.role}
                  {c.detail ? <span className="text-muted-ink/70"> · {c.detail}</span> : null}
                </span>
                <span className="col-span-2 font-mono text-[11px] text-muted-ink md:col-span-1">
                  {c.format}
                </span>
                <span className="col-span-2 text-right font-mono text-sm text-bone/80">
                  {c.year}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-6 font-mono text-[11px] tracking-[0.15em] text-muted-ink">
            SELECTED FROM 41 ACTING CREDITS ·{" "}
            <a
              href="https://www.imdb.com/name/nm2282094/"
              target="_blank"
              rel="noreferrer"
              className="text-gold hover:underline"
            >
              FULL LIST ON IMDB →
            </a>
          </p>
        </div>
      </section>

      {/* VOICE */}
      <section id="voice" className="bg-panel2">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
          <div className="mb-10">
            <p className="slate-label">Slate 04 · Audio Bay</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-bone md:text-4xl">
              Voice-Over
            </h2>
            <p className="mt-4 max-w-[56ch] text-base leading-relaxed text-pretty text-muted-ink">
              Radio broadcasting and voice acting since 1984. Narration, character and commercial
              reads — authoritative, warm, and built for the room.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              ["Commercial Read", "00:32"],
              ["Documentary Narration", "01:05"],
              ["Character — Range", "00:48"],
            ].map(([label, len], idx) => (
              <div key={label} className="rounded-xl bg-panel p-5 ring-1 ring-line">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-bone">{label}</span>
                  <span className="font-mono text-[11px] text-gold">{len}</span>
                </div>
                <div className="mt-4 flex h-10 items-end gap-[3px]" aria-hidden>
                  {Array.from({ length: 26 }).map((_, i) => (
                    <span
                      key={i}
                      className={i < 8 + idx * 4 ? "flex-1 bg-gold/70" : "flex-1 bg-line"}
                      style={{ height: `${20 + ((i * 37 + idx * 11) % 80)}%` }}
                    />
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <span className="grid size-9 place-items-center rounded-full bg-gold text-ink">
                    <span className="ml-0.5 block h-0 w-0 border-y-[6px] border-l-[10px] border-y-transparent border-l-ink" />
                  </span>
                  <span className="font-mono text-[11px] text-muted-ink">48kHz · 24bit</span>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 font-mono text-[11px] tracking-[0.15em] text-muted-ink">
            DEMO FILES PENDING — SEND MP3s AND THEY DROP STRAIGHT IN.
          </p>
        </div>
      </section>

      {/* STILLS */}
      <section id="stills" className="border-y border-line bg-ink">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="slate-label">Slate 05</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-bone md:text-4xl">
                Contact Sheet
              </h2>
            </div>
            <span className="font-mono text-[11px] tracking-[0.15em] text-muted-ink">
              8 FRAMES · VIA IMDB
            </span>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {gallery.map((img, i) => (
              <figure key={img} className="group overflow-hidden rounded-xl ring-1 ring-line">
                <button
                  type="button"
                  className="relative block w-full cursor-zoom-in text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-inset"
                  onClick={() => setSelectedImage(i)}
                  aria-label={`View production still ${i + 1} full size`}
                >
                  <img
                    src={img}
                    alt={`James McMann production still ${i + 1}`}
                    loading="lazy"
                    className="aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent px-3 pb-3 pt-8 font-mono text-[10px] tracking-[0.15em] text-bone opacity-0 transition-opacity group-hover:opacity-100">
                    VIEW FRAME {String(i + 1).padStart(2, "0")}
                  </span>
                </button>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/95 p-4 md:p-10"
          role="dialog"
          aria-modal="true"
          aria-label={`Production still ${selectedImage + 1} of ${gallery.length}`}
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            className="absolute right-5 top-5 z-10 grid size-10 place-items-center rounded-full border border-line text-2xl text-bone transition-colors hover:border-gold hover:text-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image viewer"
          >
            ×
          </button>
          <button
            type="button"
            className="absolute left-4 top-1/2 z-10 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-line text-2xl text-bone transition-colors hover:border-gold hover:text-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-gold md:left-8"
            onClick={(event) => {
              event.stopPropagation();
              setSelectedImage((selectedImage + gallery.length - 1) % gallery.length);
            }}
            aria-label="Previous image"
          >
            ‹
          </button>
          <figure className="relative flex max-h-full max-w-full flex-col items-center" onClick={(event) => event.stopPropagation()}>
            <img
              src={gallery[selectedImage]}
              alt={`James McMann production still ${selectedImage + 1}`}
              className="max-h-[82vh] max-w-[88vw] rounded-lg object-contain shadow-2xl"
            />
            <figcaption className="mt-4 font-mono text-[11px] tracking-[0.18em] text-muted-ink">
              FRAME {String(selectedImage + 1).padStart(2, "0")} · {selectedImage + 1} / {gallery.length}
            </figcaption>
          </figure>
          <button
            type="button"
            className="absolute right-4 top-1/2 z-10 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-line text-2xl text-bone transition-colors hover:border-gold hover:text-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-gold md:right-8"
            onClick={(event) => {
              event.stopPropagation();
              setSelectedImage((selectedImage + 1) % gallery.length);
            }}
            aria-label="Next image"
          >
            ›
          </button>
        </div>
      )}

      {/* BOOKING */}
      <section id="booking" className="bg-panel">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-5">
              <p className="slate-label">Slate 06</p>
              <h2 className="mt-4 text-4xl leading-[0.95] font-semibold tracking-tight text-bone md:text-5xl">
                Book the
                <br />
                talent.
              </h2>
              <p className="mt-5 max-w-[44ch] text-base leading-relaxed text-pretty text-muted-ink">
                Available for on-camera, voice-over, writing and producing work. Representation and
                contact details are listed on IMDbPro.
              </p>
              <a
                href="https://pro.imdb.com/name/nm2282094/"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.2em] text-gold hover:underline"
              >
                VIEW CONTACT INFO ON IMDBPRO →
              </a>
              <a
                href="/james-mcmann-resume.pdf"
                download
                className="mt-3 block font-mono text-[11px] tracking-[0.2em] text-muted-ink hover:text-gold"
              >
                DOWNLOAD RESUME PDF ↓
              </a>
              <p className="signature-mark mt-8">James R. McMann</p>
              <p className="mt-1 font-mono text-[10px] tracking-[0.2em] text-muted-ink">AVAILABLE FOR THE NEXT TAKE</p>
            </div>
            <form
              className="flex flex-col gap-3 md:col-span-7"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                className="rounded-lg bg-ink/60 px-4 py-3 text-sm ring-1 ring-line outline-none transition placeholder:text-muted-ink focus:ring-gold/60"
                placeholder="Full name"
              />
              <input
                className="rounded-lg bg-ink/60 px-4 py-3 text-sm ring-1 ring-line outline-none transition placeholder:text-muted-ink focus:ring-gold/60"
                placeholder="Production / project"
              />
              <input
                type="email"
                className="rounded-lg bg-ink/60 px-4 py-3 text-sm ring-1 ring-line outline-none transition placeholder:text-muted-ink focus:ring-gold/60"
                placeholder="email@studio.com"
              />
              <textarea
                rows={4}
                className="rounded-lg bg-ink/60 px-4 py-3 text-sm ring-1 ring-line outline-none transition placeholder:text-muted-ink focus:ring-gold/60"
                placeholder="Dates, role, and scope"
              />
              <button className="mt-1 rounded-lg bg-gold px-5 py-3 text-sm font-medium text-ink transition-transform hover:-translate-y-0.5">
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-8 font-mono text-[10px] tracking-[0.2em] text-muted-ink md:px-10">
          <span>JAMES MCMANN · ACTOR · VOICE</span>
          <a
            href="https://www.imdb.com/name/nm2282094/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gold"
          >
            IMDB
          </a>
          <span>TC 02:14:30:12</span>
          <span className="text-gold">DESIGN BY AQUILA</span>
        </div>
      </footer>
    </main>
  );
}
