import type { PortalData } from './types';
export async function fetchPortalData(): Promise<PortalData> {
 const res = await fetch('portalData.json', { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to load portalData.json');
  return res.json();
}
