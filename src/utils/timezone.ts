const DEFAULT_TIMEZONE = 'Asia/Shanghai';

const dateFormatterCache = new Map<string, Intl.DateTimeFormat>();

function getDateFormatter(timeZone: string): Intl.DateTimeFormat {
  let formatter = dateFormatterCache.get(timeZone);
  if (!formatter) {
    formatter = new Intl.DateTimeFormat('en-CA', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      timeZone,
    });
    dateFormatterCache.set(timeZone, formatter);
  }
  return formatter;
}

export function sanitizeTimeZone(rawTimeZone: string | null | undefined): string {
  const candidate = typeof rawTimeZone === 'string' ? rawTimeZone.trim() : '';
  if (!candidate) return DEFAULT_TIMEZONE;

  try {
    getDateFormatter(candidate).format(new Date());
    return candidate;
  } catch {
    return DEFAULT_TIMEZONE;
  }
}

export function getDateKeyInTimeZone(
  date: Date | number,
  rawTimeZone: string | null | undefined = DEFAULT_TIMEZONE,
): string {
  const timeZone = sanitizeTimeZone(rawTimeZone);
  const normalizedDate = typeof date === 'number' ? new Date(date) : date;

  if (!(normalizedDate instanceof Date) || Number.isNaN(normalizedDate.getTime())) {
    return '1970-01-01';
  }

  try {
    return getDateFormatter(timeZone).format(normalizedDate);
  } catch {
    return normalizedDate.toISOString().slice(0, 10);
  }
}

export function getBrowserTimeZone(): string {
  if (typeof window === 'undefined') return DEFAULT_TIMEZONE;

  try {
    return sanitizeTimeZone(Intl.DateTimeFormat().resolvedOptions().timeZone);
  } catch {
    return DEFAULT_TIMEZONE;
  }
}

export function isSameTimeZoneDay(
  left: Date | number,
  right: Date | number,
  rawTimeZone: string | null | undefined,
): boolean {
  const timeZone = sanitizeTimeZone(rawTimeZone);
  return getDateKeyInTimeZone(left, timeZone) === getDateKeyInTimeZone(right, timeZone);
}

export { DEFAULT_TIMEZONE };
