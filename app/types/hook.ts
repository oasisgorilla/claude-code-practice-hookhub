export interface Hook {
  id: string;
  name: string;
  category: HookCategory;
  description: string;
  repoUrl: string;
  author?: string;
  stars?: number;
  lastUpdated?: string;
}

export type HookCategory =
  | 'Validation'
  | 'Context Enhancement'
  | 'Automation'
  | 'Security'
  | 'Logging'
  | 'Productivity';

export const CATEGORY_COLORS: Record<HookCategory, string> = {
  'Validation': 'bg-blue-500',
  'Context Enhancement': 'bg-purple-500',
  'Automation': 'bg-green-500',
  'Security': 'bg-red-500',
  'Logging': 'bg-yellow-500',
  'Productivity': 'bg-indigo-500',
};
