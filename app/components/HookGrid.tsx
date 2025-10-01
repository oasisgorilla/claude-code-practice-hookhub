import { Hook } from '../types/hook';
import HookCard from './HookCard';

interface HookGridProps {
  hooks: Hook[];
}

export default function HookGrid({ hooks }: HookGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {hooks.map((hook) => (
        <HookCard key={hook.id} hook={hook} />
      ))}
    </div>
  );
}
