// THE TEKNOLOGIST — BriefPost Page
// Full brief view. Vertical accent bar runs along the left of the content.
// Markdown rendered via Streamdown — headlines and sources are now linked.
// Title uses em-dash date separator (no brackets).

import { useParams, Link } from "wouter";
import { Streamdown } from "streamdown";
import SiteHeader from "@/components/SiteHeader";
import { getBriefBySlug, VERTICALS } from "@/lib/briefs";
import { ArrowLeft } from "lucide-react";

export default function BriefPost() {
  const params = useParams<{ vertical: string; slug: string }>();
  const brief = getBriefBySlug(params.slug);

  if (!brief) {
    return (
      <div className="min-h-screen bg-background">
        <SiteHeader showFilters={false} />
        <div className="container py-16 text-center">
          <p className="meta text-muted-foreground">BRIEF NOT FOUND.</p>
          <Link href="/" className="meta text-foreground hover:opacity-70 mt-4 inline-block">
            ← BACK TO ALL BRIEFS
          </Link>
        </div>
      </div>
    );
  }

  const vertical = VERTICALS[brief.vertical];

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader showFilters={false} />

      <main className="container py-10">
        {/* Back link */}
        <Link
          href="/"
          className="meta text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2 mb-8 no-underline"
        >
          <ArrowLeft size={12} />
          ALL BRIEFS
        </Link>

        {/* Brief header */}
        <div className="flex gap-5 mb-8 animate-entry">
          {/* Accent bar */}
          <div
            className="w-1 flex-shrink-0 rounded-none self-stretch"
            style={{ backgroundColor: vertical.color, minHeight: '80px' }}
          />
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="meta" style={{ color: vertical.color }}>
                {vertical.label.toUpperCase()}
              </span>
              <span className="meta text-muted-foreground">·</span>
              <span className="meta text-muted-foreground">{brief.displayDate}</span>
              <span className="meta text-muted-foreground">·</span>
              <span className="meta text-muted-foreground">{brief.readTime} MIN READ</span>
            </div>
            <h1 className="font-serif text-2xl md:text-3xl font-bold text-foreground leading-tight mb-4">
              The Teknologist — {brief.title} — {brief.displayDate}
            </h1>
            {/* BLUF */}
            <div
              className="border-l-2 pl-4 py-1"
              style={{ borderColor: vertical.color }}
            >
              <p className="meta mb-1" style={{ color: vertical.color }}>BOTTOM LINE UP FRONT</p>
              <p className="text-sm text-foreground leading-relaxed font-medium">
                {brief.bluf}
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-border mb-8" />

        {/* Brief content — markdown with linked headlines and sources */}
        <div
          className="prose-brief animate-entry"
          style={{ animationDelay: '100ms' }}
        >
          <Streamdown>{brief.content}</Streamdown>
        </div>

        {/* Footer nav */}
        <div className="mt-12 pt-8 border-t border-border">
          <Link
            href="/"
            className="meta text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2 no-underline"
          >
            <ArrowLeft size={12} />
            BACK TO ALL BRIEFS
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-8">
        <div className="container py-8">
          <p className="meta text-muted-foreground text-center">
            THE TEKNOLOGIST · TECHNOLOGY CONVERGING TO MAKE HUMANITY BETTER.
          </p>
        </div>
      </footer>
    </div>
  );
}
