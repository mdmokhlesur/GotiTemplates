import type { SmartBetRating } from "@/types";

/**
 * Computes a Smart Bet Rating from multiple signals.
 * Rating levels: A (elite), B+ (solid), B (decent), C (neutral/small edge)
 */
export function computeSmartRating(input: {
  projection: number;
  line: number;
  hitRate: number;
  matchupDifficulty: "easy" | "medium" | "hard";
  edge: number;
  hasSharpSignal: boolean;
  injuryBenefit: boolean;
}): SmartBetRating {
  const { projection, line, hitRate, matchupDifficulty, edge, hasSharpSignal, injuryBenefit } = input;

  const projectionVsLine = projection - line;

  const hitRateTrend: "up" | "down" | "stable" =
    hitRate >= 65 ? "up" : hitRate <= 45 ? "down" : "stable";

  const marketValue = edge;

  const lineMovementSignal: "sharp" | "public" | "none" = hasSharpSignal
    ? "sharp"
    : "none";

  const injuryImpact: "positive" | "negative" | "none" = injuryBenefit
    ? "positive"
    : "none";

  // Score calculation (0-100)
  let score = 0;

  // Edge contribution (0-30)
  score += Math.min(edge * 3, 30);

  // Hit rate contribution (0-20)
  score += Math.min((hitRate / 100) * 20, 20);

  // Matchup contribution (0-15)
  if (matchupDifficulty === "easy") score += 15;
  else if (matchupDifficulty === "medium") score += 8;
  else score += 2;

  // Sharp signal (0-15)
  if (hasSharpSignal) score += 15;

  // Projection gap (0-10)
  const gapPct = (projectionVsLine / line) * 100;
  score += Math.min(gapPct * 2, 10);

  // Injury benefit (0-10)
  if (injuryBenefit) score += 10;

  // Map score to rating
  let finalRating: "A" | "B+" | "B" | "C";
  if (score >= 70) finalRating = "A";
  else if (score >= 55) finalRating = "B+";
  else if (score >= 40) finalRating = "B";
  else finalRating = "C";

  return {
    projectionVsLine,
    hitRateTrend,
    matchupDifficulty,
    marketValue,
    lineMovementSignal,
    injuryImpact,
    finalRating,
  };
}

/** Returns a color for the rating badge */
export function getRatingColor(rating: "A" | "B+" | "B" | "C"): string {
  switch (rating) {
    case "A":
      return "var(--emerald)";
    case "B+":
      return "var(--intel-blue)";
    case "B":
      return "var(--gold)";
    case "C":
      return "var(--text-muted)";
  }
}

/** Returns a bg color for the rating badge */
export function getRatingBgColor(rating: "A" | "B+" | "B" | "C"): string {
  switch (rating) {
    case "A":
      return "var(--emerald-light)";
    case "B+":
      return "var(--intel-blue-light)";
    case "B":
      return "var(--gold-light)";
    case "C":
      return "rgba(90,116,153,0.12)";
  }
}
