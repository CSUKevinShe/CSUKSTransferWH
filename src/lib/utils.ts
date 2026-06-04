/**
 * Format a number with commas (e.g., 12345 -> "12,345")
 */
export function formatNumber(num: number): string {
  return num.toLocaleString('en-US');
}

/**
 * Format a number as currency (e.g., 12345.67 -> "$12,345.67")
 */
export function formatCurrency(num: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(num);
}

/**
 * Format mm to meters with one decimal (e.g., 12500 -> "12.5m")
 */
export function formatMm(mm: number): string {
  return `${(mm / 1000).toFixed(1)}m`;
}

/**
 * Format square meters
 */
export function formatArea(m2: number): string {
  return `${formatNumber(m2)} m\u00B2`;
}

/**
 * Format weight in kg or tonnes
 */
export function formatWeight(kg: number): string {
  if (kg >= 1000) {
    return `${(kg / 1000).toFixed(1)}t`;
  }
  return `${formatNumber(kg)} kg`;
}

/**
 * Truncate text to a maximum length
 */
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trimEnd() + '...';
}

/**
 * Format date to readable string
 */
export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Classnames utility (like clsx)
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}
