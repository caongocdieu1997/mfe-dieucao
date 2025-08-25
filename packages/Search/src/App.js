import React from "react";

const App = () => {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 py-10">
      <div className="rounded-3xl border border-slate-200 bg-white shadow-sm overflow-hidden">
        {/* Input */}
        <div className="p-4 sm:p-6 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white">
          <div className="flex gap-3">
            <input
              // value={text}
              // onChange={(e) => setText(e.target.value)}
              // onKeyDown={(e) => e.key === "Enter" && addTodo()}
              placeholder="Thêm công việc mới..."
              className="flex-1 rounded-xl bg-white/10 placeholder-white/60 px-4 py-3 outline-none ring-1 ring-white/15 focus:ring-2 focus:ring-white"
            />
            <button
              // onClick={addTodo}
              className="rounded-xl bg-white text-slate-900 px-5 font-medium hover:bg-slate-100 active:translate-y-px"
            >
              Thêm
            </button>
          </div>
          {/* Filters */}
          {/* <div className="mt-4 flex flex-wrap items-center gap-2 text-sm">
            {[
              { key: "all", label: "Tất cả" },
              { key: "active", label: "Đang làm" },
              { key: "completed", label: "Hoàn thành" },
            ].map((f) => (
              <button
                key={f.key}
                // onClick={() => setFilter(f.key)}
                className={`rounded-full px-3 py-1.5 border text-white/90 hover:text-white transition ${
                  filter === f.key
                    ? "bg-white text-slate-900 border-white"
                    : "border-white/25"
                }`}
              >
                {f.label}
              </button>
            ))}
            <div className="ml-auto" />
            <button
              // onClick={clearCompleted}
              className="underline decoration-white/40 hover:decoration-white"
            >
              Xoá đã hoàn thành
            </button>
          </div> */}
        </div>

        {/* List */}
      </div>
    </main>
  );
};
export default App;
