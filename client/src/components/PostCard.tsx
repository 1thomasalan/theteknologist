// THE TEKNOLOGIST — PostCard
// The 4px vertical accent bar is the only decoration.
// Title uses em-dash date separator (no brackets).
// Hover: bar widens from 4px to 6px, background tints slightly.

import { Link } from "wouter";
import { VERTICALS, type Brief } from "@/lib/briefs";

interface PostCardProps {
  brief: Brief;
  index?: number;
}

export default function PostCard({ brief, index = 0 }: PostCardProps) {
  const vertical = VERTICALS[brief.vertical];

  return (
    <Link
      href={`/brief/${brief.vertical}/${brief.slug}`}
      className="post-card group no-underline animate-entry"
      style={{ animationDelay: `${index * 30}ms` }}
    >
      {/* Vertical accent bar */}
      <div
        className="vertical-bar self-stretch group-hover:w-[6px] transition-all duration-150"
        style={{ backgroundColor: vertical.color }}
      />

      {/* Content */}
      <div className="flex-1 min-w-0">
        {/* Meta row */}
        <div className="flex items-center gap-3 mb-2">
          <span className="meta" style={{ color: vertical.color }}>
            {vertical.shortLabel}
          </span>
          <span className="meta text-muted-foreground">·</span>
          <span className="meta text-muted-foreground">{brief.displayDate}</span>
          <span className="meta text-muted-foreground">·</span>
          <span className="meta text-muted-foreground">{brief.readTime} MIN READ</span>
        </div>

        {/* Title — em-dash date, no brackets */}
        <h2 className="font-serif text-xl font-semibold text-foreground mb-2 leading-snug group-hover:opacity-80 transition-opacity">
          {brief.title}
          <span className="text-muted-foreground font-normal"> — {brief.displayDate}</span>
        </h2>

        {/* BLUF */}
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
          {brief.bluf}
        </p>

        {/* Read more */}
        <span className="meta text-muted-foreground mt-3 inline-block group-hover:text-foreground transition-colors">
          READ BRIEF →
        </span>
      </div>
    </Link>
  );
}
