import React, { useEffect, useMemo, useRef, useState } from "react";
import TodoItem from "./Components/TodoItem";

// Pretty, minimal Todo List with React + Tailwind
// Usage: render <TodoApp /> in your root. Requires Tailwind set up in your project.
function App() {
  const [todos, setTodos] = useState(() => {
    try {
      const saved = localStorage.getItem("todos");
      return saved ? JSON.parse(saved) : [];
    } catch (_) {
      return [];
    }
  });
  const [filter, setFilter] = useState("all"); // all | active | completed
  const [text, setText] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const filtered = useMemo(() => {
    if (filter === "active") return todos.filter((t) => !t.completed);
    if (filter === "completed") return todos.filter((t) => t.completed);
    return todos;
  }, [todos, filter]);

  const remaining = useMemo(
    () => todos.filter((t) => !t.completed).length,
    [todos]
  );

  const addTodo = () => {
    const value = text.trim();
    if (!value) return;
    setTodos((prev) => [
      {
        id: crypto.randomUUID(),
        text: value,
        completed: false,
        editing: false,
      },
      ...prev,
    ]);
    setText("");
  };

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  const startEdit = (id) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, editing: true } : t))
    );
  };

  const saveEdit = (id, value) => {
    const next = value.trim();
    if (!next) return deleteTodo(id);
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, text: next, editing: false } : t))
    );
  };

  const cancelEdit = (id) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, editing: false } : t))
    );
  };

  const clearCompleted = () =>
    setTodos((prev) => prev.filter((t) => !t.completed));

  return (
    <div>
      <main className="mx-auto max-w-3xl px-4 sm:px-6 py-10">
        <div className="rounded-3xl border border-slate-200 bg-white shadow-sm overflow-hidden">
          <ul className="divide-y divide-slate-100">
            {filtered.length === 0 && (
              <li className="p-6 text-center text-slate-500">
                Không có công việc nào.
              </li>
            )}

            {filtered.map((t) => (
              <TodoItem
                key={t.id}
                todo={t}
                onToggle={() => toggleTodo(t.id)}
                onDelete={() => deleteTodo(t.id)}
                onStartEdit={() => startEdit(t.id)}
                onSave={(val) => saveEdit(t.id, val)}
                onCancel={() => cancelEdit(t.id)}
              />
            ))}
          </ul>
        </div>
      </main>

      <footer className="pb-10 text-center text-xs text-slate-400">
        Made by ♥︎ DieuCao
      </footer>
    </div>
  );
}

export default App;
