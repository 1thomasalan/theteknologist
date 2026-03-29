// THE TEKNOLOGIST — SiteHeader
// Wordmark left, filter tabs center/right, dark mode toggle far right.
// Filter tabs use BRAIN vertical accent colors on active state.

import { useTheme } from "@/contexts/ThemeContext";
import { Sun, Moon } from "lucide-react";
import { Link, useLocation } from "wouter";
import { VERTICALS, type Vertical } from "@/lib/briefs";

const ALL_FILTERS: Array<{ key: Vertical | 'all'; label: string }> = [
  { key: 'all', label: 'ALL' },
  { key: 'ai', label: 'AI' },
  { key: 'robotics', label: 'ROBOTICS' },
  { key: 'biotech', label: 'BIOTECH' },
  { key: 'infrastructure', label: 'ENERGY' },
  { key: 'tekfinds', label: 'TEK-FINDS' },
];

interface SiteHeaderProps {
  activeFilter?: Vertical | 'all';
  onFilterChange?: (filter: Vertical | 'all') => void;
  showFilters?: boolean;
}

export default function SiteHeader({ activeFilter = 'all', onFilterChange, showFilters = true }: SiteHeaderProps) {
  const { theme, toggleTheme } = useTheme();
  const [location] = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container">
        <div className="flex items-center justify-between h-14">
          {/* Wordmark */}
          <Link href="/" className="wordmark text-sm text-foreground hover:opacity-70 transition-opacity no-underline">
            THE TEKNOLOGIST
          </Link>

          {/* Right side: nav links + dark mode */}
          <div className="flex items-center gap-5">
            <Link
              href="/about"
              className="meta text-muted-foreground hover:text-foreground transition-colors no-underline"
            >
              ABOUT
            </Link>
            <button
              onClick={toggleTheme}
              className="meta text-muted-foreground hover:text-foreground transition-colors p-1"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
            </button>
          </div>
        </div>

        {/* Filter tabs — only on homepage */}
        {showFilters && location === '/' && (
          <div className="flex items-center gap-5 pb-0 overflow-x-auto scrollbar-none">
            {ALL_FILTERS.map(({ key, label }) => {
              const isActive = activeFilter === key;
              const verticalConfig = key !== 'all' ? VERTICALS[key as Vertical] : null;
              const activeClass = isActive
                ? key === 'all'
                  ? 'active'
                  : `active-${key}`
                : '';

              return (
                <button
                  key={key}
                  onClick={() => onFilterChange?.(key)}
                  className={`filter-tab whitespace-nowrap ${isActive ? activeClass : ''}`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </header>
  );
}
