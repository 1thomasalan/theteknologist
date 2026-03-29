// THE TEKNOLOGIST — Home Page
// Per-vertical hero copy changes when filter tabs are selected.
// Search bar filters across all briefs.
// Cross-promotion link to onetobetter.com.

import { useState, useMemo } from "react";
import { Search, X } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import PostCard from "@/components/PostCard";
import { getBriefsByVertical, searchBriefs, VERTICALS, type Vertical } from "@/lib/briefs";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663369819475/GbDL8wyPhYN3fxFfpZa8YQ/tek-hero-bg-beh9gRupNgLsFLeLWUoUDx.webp";

const DEFAULT_HERO = {
  meta: 'DAILY INTELLIGENCE BRIEF',
  title: 'Technology is converging\nto make humanity better.',
  description: 'Five daily briefs covering the signals that matter — Biotech, Robotics, AI, Infrastructure, and Tek-Finds. The BRAIN framework, curated by the',
  showBrainPills: true,
};

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<Vertical | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);

  const filteredBriefs = useMemo(() => {
    if (searchQuery.trim()) {
      return searchBriefs(searchQuery);
    }
    return getBriefsByVertical(activeFilter);
  }, [activeFilter, searchQuery]);

  const hero = activeFilter === 'all'
    ? DEFAULT_HERO
    : {
        meta: VERTICALS[activeFilter].heroMeta,
        title: VERTICALS[activeFilter].heroTitle,
        description: VERTICALS[activeFilter].heroDescription,
        showBrainPills: false,
      };

  const handleFilterChange = (filter: Vertical | 'all') => {
    setActiveFilter(filter);
    setSearchQuery('');
    setSearchOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader activeFilter={activeFilter} onFilterChange={handleFilterChange} showFilters />

      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage: `url(${HERO_BG})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-background/85" />
        <div className="container relative py-16 md:py-24">
          <div className="max-w-xl">
            <p className="meta text-muted-foreground mb-4">{hero.meta}</p>
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight whitespace-pre-line">
              {hero.title}
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed mb-6 max-w-md">
              {activeFilter === 'all' ? (
                <>
                  {hero.description}{' '}
                  <a
                    href="https://onetobetter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:opacity-70 transition-opacity underline underline-offset-2"
                  >
                    onetobetter.com
                  </a>{' '}
                  team.
                </>
              ) : (
                hero.description
              )}
            </p>
            {/* BRAIN vertical pills — only on ALL view */}
            {hero.showBrainPills && (
              <div className="flex flex-wrap gap-2">
                {[
                  { label: 'B — Biotech', color: '#2ECC71' },
                  { label: 'R — Robotics', color: '#3498DB' },
                  { label: 'A — AI', color: '#9B59B6' },
                  { label: 'I — Infrastructure', color: '#E67E22' },
                  { label: 'N — News', color: '#E74C3C' },
                ].map(({ label, color }) => (
                  <span
                    key={label}
                    className="meta px-2 py-1 border rounded-sm"
                    style={{ borderColor: color, color }}
                  >
                    {label}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Feed */}
      <main className="container py-8">
        {/* Section label + search toggle */}
        <div className="flex items-center justify-between mb-2">
          <p className="meta text-muted-foreground">
            {searchQuery.trim()
              ? `SEARCH RESULTS — ${filteredBriefs.length} FOUND`
              : activeFilter === 'all'
                ? `ALL BRIEFS — ${filteredBriefs.length} TODAY`
                : `${VERTICALS[activeFilter].shortLabel} BRIEFS — ${filteredBriefs.length} TODAY`
            }
          </p>
          <div className="flex items-center gap-3">
            <p className="meta text-muted-foreground hidden sm:block">MARCH 28, 2026</p>
            <button
              onClick={() => { setSearchOpen(!searchOpen); if (searchOpen) setSearchQuery(''); }}
              className="meta text-muted-foreground hover:text-foreground transition-colors p-1"
              aria-label="Toggle search"
            >
              {searchOpen ? <X size={14} /> : <Search size={14} />}
            </button>
          </div>
        </div>

        {/* Search bar */}
        {searchOpen && (
          <div className="mb-6 animate-entry">
            <div className="relative">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search briefs, stories, products..."
                className="w-full pl-9 pr-4 py-2.5 bg-secondary/50 border border-border rounded-sm text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground/20 font-sans"
                autoFocus
              />
            </div>
          </div>
        )}

        {/* Post list */}
        <div>
          {filteredBriefs.length === 0 ? (
            <div className="py-16 text-center">
              <p className="meta text-muted-foreground">
                {searchQuery.trim() ? 'NO BRIEFS MATCH YOUR SEARCH.' : 'NO BRIEFS FOR THIS VERTICAL YET.'}
              </p>
            </div>
          ) : (
            filteredBriefs.map((brief, i) => (
              <PostCard key={brief.slug} brief={brief} index={i} />
            ))
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-16">
        <div className="container py-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <p className="wordmark text-sm text-foreground mb-1">THE TEKNOLOGIST</p>
              <p className="meta text-muted-foreground">BRAIN: The framework behind the news curation.</p>
            </div>
            <div>
              <p className="meta text-muted-foreground">
                Curated by the team at{' '}
                <a href="https://onetobetter.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors underline underline-offset-2">onetobetter.com</a>
              </p>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-border">
            <p className="meta text-muted-foreground text-center">
              TECHNOLOGY CONVERGING TO MAKE HUMANITY BETTER.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
