/**
 * Jewish Data Services (Offline)
 * This module provides static data and mock functions so the site works without external APIs.
 * If you later want to re-enable live data, replace these implementations with fetch calls.
 */

export interface TorahPortion {
  name: string;
  hebrewName: string;
  date: string;
  hebrewDate: string;
  aliyot: number;
  verses: string;
  summary?: string;
}

export interface JewishHoliday {
  title: string;
  hebrew: string;
  date: string;
  category: string;
  description?: string;
}

export interface DafYomi {
  name: string;
  blatt: number;
  date: string;
}

// ----------------------------
// Static Sample Data
// ----------------------------
const STATIC_TORAH_PORTION: TorahPortion = {
  name: 'Vayishlach',
  hebrewName: 'וישלח',
  date: '2025-10-11',
  hebrewDate: '19 Tishrei 5786',
  aliyot: 7,
  verses: 'Genesis 32:4-36:43',
  summary: 'Jacob prepares to meet Esau, wrestles with an angel, receives the name Israel, and reconciles with Esau.'
};

const STATIC_HOLIDAYS: JewishHoliday[] = [
  { title: 'Rosh Hashanah', hebrew: 'ראש השנה', date: '2025-10-01', category: 'holiday', description: 'Jewish New Year; day of judgment and coronation of Hashem.' },
  { title: 'Yom Kippur', hebrew: 'יום כיפור', date: '2025-10-11', category: 'holiday', description: 'Day of Atonement; fasting and repentance.' },
  { title: 'Sukkot', hebrew: 'סוכות', date: '2025-10-16', category: 'holiday', description: 'Festival of booths and joy; dwelling in the sukkah and taking the four species.' },
  { title: 'Chanukah', hebrew: 'חנוכה', date: '2025-12-25', category: 'holiday', description: 'Festival of lights; miracle of the oil and rededication of the Temple.' },
  { title: 'Purim', hebrew: 'פורים', date: '2026-03-14', category: 'holiday', description: 'Celebration of deliverance as told in Megillat Esther.' },
];

const STATIC_DAF_YOMI: DafYomi = {
  name: 'Bava Metzia 12',
  blatt: 12,
  date: '2025-10-06'
};

const STATIC_JEWISH_DATE = '23 Tishrei 5786';

const STATIC_CANDLE_LIGHTING = [
  { title: 'Candle lighting', date: '2025-10-10T18:15:00', category: 'candles' },
  { title: 'Havdalah', date: '2025-10-11T19:12:00', category: 'havdalah' }
];

/**
 * Get current week's Torah portion (Parashat HaShavua)
 */
export async function getWeeklyTorahPortion(): Promise<TorahPortion | null> {
  // Offline: return static value
  return Promise.resolve(STATIC_TORAH_PORTION);
}

/**
 * Get upcoming Jewish holidays
 */
export async function getUpcomingHolidays(limit: number = 5): Promise<JewishHoliday[]> {
  // Offline: slice the static list
  return Promise.resolve(STATIC_HOLIDAYS.slice(0, limit));
}

/**
 * Get Daf Yomi (daily Talmud page)
 */
export async function getDafYomi(): Promise<DafYomi | null> {
  // Offline: return static
  return Promise.resolve(STATIC_DAF_YOMI);
}

/**
 * Get Torah text from Sefaria
 */
export async function getTorahText(book: string, chapter: number, verse?: number): Promise<any> {
  // Offline: return simple mock
  return Promise.resolve({
    ref: verse ? `${book}.${chapter}.${verse}` : `${book}.${chapter}`,
    he: ["בראשית ברא אלוקים את השמים ואת הארץ"],
    text: ["In the beginning God created the heavens and the earth."],
  });
}

/**
 * Search Sefaria for texts
 */
export async function searchSefaria(query: string): Promise<any[]> {
  // Offline: return static hit-like entries
  return Promise.resolve([
    { title: 'Rashi on Bereshit 1:1', ref: 'Rashi on Genesis 1:1', preview: 'Rashi explains why the Torah begins with creation...' },
    { title: 'Ramban on Bereshit 1:1', ref: 'Ramban on Genesis 1:1', preview: 'Ramban discusses creation ex nihilo...' },
  ]);
}

/**
 * Get Jewish date (Hebrew calendar)
 */
export async function getJewishDate(): Promise<string> {
  // Offline: return static
  return Promise.resolve(STATIC_JEWISH_DATE);
}

/**
 * Get candle lighting times
 */
export async function getCandleLightingTimes(geonameid: number = 281184): Promise<any> {
  // Offline: return static
  return Promise.resolve(STATIC_CANDLE_LIGHTING);
}
