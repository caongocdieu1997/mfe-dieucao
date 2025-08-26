import React from "react";
import SearchApp from "./components/SearchApp";
import ResultApp from "./components/ResultApp";
import "./global.css";

export default function App() {
  const remaining = 0; // Placeholder for remaining tasks count
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <header className="border-b bg-white/80 backdrop-blur sticky top-0 z-10">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-slate-900 text-white grid place-items-center">
              ✓
            </div>
            <h1 className="text-xl font-bold tracking-tight">Todo List</h1>
          </div>
          <span className="text-sm text-slate-500">
            {remaining || 0} task must do
          </span>
        </div>
      </header>
      <SearchApp />
      <ResultApp />
    </div>
  );
}
