export type Idea = {
  id: string;
  title: string;
  status: 'Discovery' | 'Validation' | 'MVP' | 'Archived' | string;
  confidence: number; // 0..1
  summary: string;
  owner: string;
  nextSteps?: string[];
};

export type PortalData = {
  company: { name: string; tagline?: string; owner?: string };
  metrics: { label: string; value: number | string }[];
  chart: { monthly: { month: string; ideas: number; mvps: number }[] };
  ideas: Idea[];
  auth: { username: string; password: string };
};
