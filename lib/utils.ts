import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Combine conditional class names and merge conflicting Tailwind utilities.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}

/**
 * Format an ISO date string into a readable French date.
 *
 * @example formatDateFR("2026-04-19") // "19 avril 2026"
 */
export function formatDateFR(
  input: string | Date | null | undefined,
  options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  },
): string {
  if (!input) return ""
  const date = input instanceof Date ? input : new Date(input)
  if (Number.isNaN(date.getTime())) return ""
  return new Intl.DateTimeFormat("fr-FR", options).format(date)
}

/**
 * Remove HTML tags and decode a few common entities.
 * Useful for rendering WordPress excerpts as plain text.
 */
export function stripHtml(input: string | null | undefined): string {
  if (!input) return ""
  return input
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&hellip;/g, "…")
    .replace(/\s+/g, " ")
    .trim()
}

/**
 * Truncate a string to a maximum number of characters,
 * cutting on word boundaries when possible.
 */
export function truncate(input: string, max = 160): string {
  if (!input || input.length <= max) return input
  const slice = input.slice(0, max)
  const lastSpace = slice.lastIndexOf(" ")
  return (lastSpace > 0 ? slice.slice(0, lastSpace) : slice).trim() + "…"
}