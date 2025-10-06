'use client';

import { useState, useMemo } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import HookGrid from './components/HookGrid';
import { hooks } from './data/hooks';

export default function Home() {
  const [query, setQuery] = useState('');

  const filteredHooks = useMemo(() => {
    if (!query.trim()) {
      return hooks;
    }

    const lowerQuery = query.toLowerCase();
    return hooks.filter((hook) => {
      return (
        hook.name.toLowerCase().includes(lowerQuery) ||
        hook.description.toLowerCase().includes(lowerQuery) ||
        hook.category.toLowerCase().includes(lowerQuery) ||
        hook.author?.toLowerCase().includes(lowerQuery)
      );
    });
  }, [query]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <SearchBar searchTerm={query} onSearchChange={setQuery} />
        {filteredHooks.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No hooks found matching &quot;{query}&quot;
            </p>
          </div>
        ) : (
          <HookGrid hooks={filteredHooks} />
        )}
      </main>
    </div>
  );
}
