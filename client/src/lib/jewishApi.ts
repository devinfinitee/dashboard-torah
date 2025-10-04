/**
 * Jewish Data API Services
 * Integrates with Hebcal, Sefaria, and other Jewish data sources
 */

// Hebcal API - Jewish Calendar and Torah Readings
const HEBCAL_API = 'https://www.hebcal.com/hebcal';
const SEFARIA_API = 'https://www.sefaria.org/api';

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

/**
 * Get current week's Torah portion (Parashat HaShavua)
 */
export async function getWeeklyTorahPortion(): Promise<TorahPortion | null> {
  try {
    const today = new Date();
    const year = today.getFullYear();
    
    // Get Torah readings for the current year
    const response = await fetch(
      `${HEBCAL_API}?v=1&cfg=json&year=${year}&month=x&ss=on&mf=on&c=on&geo=geoname&geonameid=281184&M=on&s=on`
    );
    
    if (!response.ok) throw new Error('Failed to fetch Torah portion');
    
    const data = await response.json();
    
    // Find the current week's Torah reading
    const currentReading = data.items?.find((item: any) => {
      if (item.category === 'parashat') {
        const itemDate = new Date(item.date);
        const daysDiff = Math.abs(today.getTime() - itemDate.getTime()) / (1000 * 60 * 60 * 24);
        return daysDiff <= 7; // Within a week
      }
      return false;
    });
    
    if (!currentReading) return null;
    
    return {
      name: currentReading.title.replace('Parashat ', ''),
      hebrewName: currentReading.hebrew || '',
      date: currentReading.date,
      hebrewDate: currentReading.hdate || '',
      aliyot: 7,
      verses: currentReading.link || '',
      summary: currentReading.memo
    };
  } catch (error) {
    console.error('Error fetching Torah portion:', error);
    return null;
  }
}

/**
 * Get upcoming Jewish holidays
 */
export async function getUpcomingHolidays(limit: number = 5): Promise<JewishHoliday[]> {
  try {
    const today = new Date();
    const year = today.getFullYear();
    
    const response = await fetch(
      `${HEBCAL_API}?v=1&cfg=json&year=${year}&month=x&maj=on&min=on&mod=on&nx=on&mf=on&ss=on&c=on`
    );
    
    if (!response.ok) throw new Error('Failed to fetch holidays');
    
    const data = await response.json();
    
    // Filter upcoming holidays
    const holidays = data.items
      ?.filter((item: any) => {
        const itemDate = new Date(item.date);
        return itemDate >= today && item.category === 'holiday';
      })
      .slice(0, limit)
      .map((item: any) => ({
        title: item.title,
        hebrew: item.hebrew || '',
        date: item.date,
        category: item.category,
        description: item.memo
      }));
    
    return holidays || [];
  } catch (error) {
    console.error('Error fetching holidays:', error);
    return [];
  }
}

/**
 * Get Daf Yomi (daily Talmud page)
 */
export async function getDafYomi(): Promise<DafYomi | null> {
  try {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    
    const response = await fetch(
      `${HEBCAL_API}?v=1&cfg=json&year=${year}&month=${month}&dy=on`
    );
    
    if (!response.ok) throw new Error('Failed to fetch Daf Yomi');
    
    const data = await response.json();
    
    const dafYomi = data.items?.find((item: any) => 
      item.category === 'dafyomi' && item.date === `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`
    );
    
    if (!dafYomi) return null;
    
    return {
      name: dafYomi.title.replace('Daf Yomi: ', ''),
      blatt: parseInt(dafYomi.title.match(/\d+/)?.[0] || '0'),
      date: dafYomi.date
    };
  } catch (error) {
    console.error('Error fetching Daf Yomi:', error);
    return null;
  }
}

/**
 * Get Torah text from Sefaria
 */
export async function getTorahText(book: string, chapter: number, verse?: number): Promise<any> {
  try {
    const ref = verse ? `${book}.${chapter}.${verse}` : `${book}.${chapter}`;
    const response = await fetch(`${SEFARIA_API}/texts/${ref}?context=0`);
    
    if (!response.ok) throw new Error('Failed to fetch Torah text');
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching Torah text:', error);
    return null;
  }
}

/**
 * Search Sefaria for texts
 */
export async function searchSefaria(query: string): Promise<any[]> {
  try {
    const response = await fetch(`${SEFARIA_API}/search-wrapper?q=${encodeURIComponent(query)}`);
    
    if (!response.ok) throw new Error('Failed to search Sefaria');
    
    const data = await response.json();
    return data.hits || [];
  } catch (error) {
    console.error('Error searching Sefaria:', error);
    return [];
  }
}

/**
 * Get Jewish date (Hebrew calendar)
 */
export async function getJewishDate(): Promise<string> {
  try {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    
    const response = await fetch(
      `${HEBCAL_API}?v=1&cfg=json&year=${year}&month=${month}&day=${day}&c=on`
    );
    
    if (!response.ok) throw new Error('Failed to fetch Jewish date');
    
    const data = await response.json();
    return data.items?.[0]?.hdate || '';
  } catch (error) {
    console.error('Error fetching Jewish date:', error);
    return '';
  }
}

/**
 * Get candle lighting times
 */
export async function getCandleLightingTimes(geonameid: number = 281184): Promise<any> {
  try {
    const today = new Date();
    const year = today.getFullYear();
    
    const response = await fetch(
      `${HEBCAL_API}?v=1&cfg=json&year=${year}&month=x&c=on&geo=geoname&geonameid=${geonameid}&M=on&s=on`
    );
    
    if (!response.ok) throw new Error('Failed to fetch candle lighting times');
    
    const data = await response.json();
    
    // Get this week's candle lighting
    const candleLighting = data.items?.filter((item: any) => 
      item.category === 'candles' || item.category === 'havdalah'
    ).slice(0, 2);
    
    return candleLighting || [];
  } catch (error) {
    console.error('Error fetching candle lighting times:', error);
    return [];
  }
}
