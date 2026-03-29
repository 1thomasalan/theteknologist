// THE TEKNOLOGIST — About Page
// Voice: utility-first, no-hype, practical. Alan's OneToBetter style.
// Key message: "A daily, no-hype briefing that connects the dots across the technologies shaping our future."

import SiteHeader from "@/components/SiteHeader";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

const ABOUT_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663369819475/GbDL8wyPhYN3fxFfpZa8YQ/tek-about-bg-MZRK62VrNEiZCtMQTcem8n.webp";

const BRAIN_VERTICALS = [
  {
    letter: 'B',
    label: 'Biotech & Longevity',
    color: '#2ECC71',
    desc: 'Gene therapy, longevity, and the science extending how long and how well we live.',
  },
  {
    letter: 'R',
    label: 'Robotics',
    color: '#3498DB',
    desc: 'The machines moving into the real world — from factories to everyday life.',
  },
  {
    letter: 'A',
    label: 'AI',
    color: '#9B59B6',
    desc: 'Models, agents, and the systems shaping how decisions get made.',
  },
  {
    letter: 'I',
    label: 'Infrastructure & Energy',
    color: '#E67E22',
    desc: 'Energy and systems that quietly power everything else.',
  },
  {
    letter: 'N',
    label: 'News',
    color: '#E74C3C',
    desc: 'The signal connecting what matters across all of it.',
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader showFilters={false} />

      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage: `url(${ABOUT_BG})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
        }}
      >
        <div className="absolute inset-0 bg-background/80" />
        <div className="container relative py-16 md:py-24">
          <p className="meta text-muted-foreground mb-4">ABOUT THE TEKNOLOGIST</p>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight max-w-lg">
            The intelligence behind<br />the convergence.
          </h1>
        </div>
      </section>

      <main className="container py-12">
        <Link
          href="/"
          className="meta text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2 mb-10 no-underline"
        >
          <ArrowLeft size={12} />
          BACK TO BRIEFS
        </Link>

        <div className="max-w-xl animate-entry">

          {/* Section 1 — What this is */}
          <div className="flex gap-5 mb-10">
            <div className="w-1 flex-shrink-0 bg-foreground self-stretch" style={{ minHeight: '60px' }} />
            <div>
              <p className="font-serif text-xl font-semibold text-foreground leading-relaxed mb-4">
                Technology isn't a set of separate trends.<br />
                It's one convergence — and most people are only seeing pieces of it.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                This site pulls the signal together — in simple, daily briefs you can actually use.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The Teknologist filters the noise across Biotech, Robotics, AI, and Infrastructure into short, clear takeaways. No hype. No fear. Just what matters — and why.
              </p>
            </div>
          </div>

          <hr className="border-border mb-10" />

          {/* Section 2 — The BRAIN Framework */}
          <h2 className="font-serif text-xl font-bold text-foreground mb-3">The BRAIN Framework</h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-2">
            Five daily briefs. Each covers a distinct vertical of the technology convergence. Together, they form a complete picture of the forces reshaping human civilization — published every morning before 4:00 AM JST.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed mb-8">
            Think of it as an acronym for a simple map of where change is happening.
          </p>

          <div className="space-y-6 mb-12">
            {BRAIN_VERTICALS.map(({ letter, label, color, desc }) => (
              <div key={letter} className="flex gap-4 animate-entry">
                <div
                  className="w-8 h-8 flex-shrink-0 flex items-center justify-center font-mono font-bold text-sm"
                  style={{ color, border: `1px solid ${color}` }}
                >
                  {letter}
                </div>
                <div>
                  <p className="meta mb-1" style={{ color }}>{label.toUpperCase()}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <hr className="border-border mb-10" />

          {/* Section 3 — Why check it every morning */}
          <h2 className="font-serif text-xl font-bold text-foreground mb-4">Why Check It Every Morning</h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
            Each brief is short. Two minutes to read. Designed to give you one clear signal per vertical — not a firehose of links.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
            The editorial filter is simple: <em>does this make humanity better?</em> If the answer is yes, it belongs in the brief. If it's noise, fear, or hype without substance, it doesn't.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed mb-8">
            A daily, no-hype briefing that connects the dots across the technologies shaping our future. That's what this is built to be.
          </p>

          <hr className="border-border mb-10" />

          {/* Section 4 — The Perspective */}
          <h2 className="font-serif text-xl font-bold text-foreground mb-4">The Perspective</h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            The Teknologist is curated by the team at{' '}
            <a href="https://onetobetter.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:opacity-70 transition-opacity underline underline-offset-2">onetobetter.com</a>
            {' '}— a publication focused on incremental improvement and practical technology for everyday people.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed mb-8">
            The Teknologist is one of three publications. <a href="https://onetobetter.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:opacity-70 transition-opacity">OneToBetter.com</a> covers incremental improvement and the AI:101 series for beginners. <a href="https://thepoeticai.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:opacity-70 transition-opacity">ThePoeticAI.com</a> explores generative art and poetry.
          </p>

          <hr className="border-border mb-10" />

          {/* Tek-Atlas teaser */}
          <h2 className="font-serif text-xl font-bold text-foreground mb-4">Coming: The Tek-Atlas</h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-6">
            Every person, company, product, and idea that appears in the BRAIN briefs is being catalogued in the Tek-Atlas — a structured knowledge base that will eventually be visualized as a knowledge graph on this site. The Atlas is the structural backbone of The Teknologist: the briefs generate the raw material, the Atlas structures it, and the graph makes the connections visible.
          </p>
          <p className="meta text-muted-foreground">TEK-ATLAS — COMING IN PHASE 2</p>

        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-16">
        <div className="container py-8">
          <p className="meta text-muted-foreground text-center">
            THE TEKNOLOGIST · TECHNOLOGY CONVERGING TO MAKE HUMANITY BETTER.
          </p>
        </div>
      </footer>
    </div>
  );
}
