import Header from './components/Header';
import HookGrid from './components/HookGrid';
import { hooks } from './data/hooks';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <HookGrid hooks={hooks} />
      </main>
    </div>
  );
}
