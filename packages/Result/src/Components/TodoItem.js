import React, { useEffect, useRef } from "react";
import EditRow from "./EditRow";

function TodoItem({ todo, onToggle, onDelete, onStartEdit, onSave, onCancel }) {
  const editRef = useRef(null);

  useEffect(() => {
    if (todo.editing) editRef.current?.focus();
  }, [todo.editing]);

  return (
    <li className="group p-4 sm:p-5 hover:bg-slate-50 transition">
      <div className="flex items-start gap-3">
        <button
          onClick={onToggle}
          aria-label={
            todo.completed ? "Đánh dấu chưa hoàn thành" : "Đánh dấu hoàn thành"
          }
          className={`mt-0.5 h-5 w-5 rounded border flex items-center justify-center ${
            todo.completed
              ? "bg-slate-900 border-slate-900 text-white"
              : "border-slate-300"
          }`}
        >
          {todo.completed ? "✓" : ""}
        </button>

        {/* Content / Edit */}
        <div className="flex-1">
          {todo.editing ? (
            <EditRow
              defaultValue={todo.text}
              inputRef={editRef}
              onSave={onSave}
              onCancel={onCancel}
            />
          ) : (
            <div className="flex items-start justify-between gap-3">
              <p
                onDoubleClick={onStartEdit}
                className={`leading-7 ${
                  todo.completed
                    ? "line-through text-slate-400"
                    : "text-slate-800"
                }`}
              >
                {todo.text}
              </p>
              <div className="opacity-0 group-hover:opacity-100 transition flex gap-1">
                <button
                  onClick={onStartEdit}
                  className="rounded-lg px-3 py-1.5 text-sm border border-slate-200 hover:bg-white"
                >
                  Sửa
                </button>
                <button
                  onClick={onDelete}
                  className="rounded-lg px-3 py-1.5 text-sm border border-rose-200 text-rose-600 hover:bg-rose-50"
                >
                  Xoá
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </li>
  );
}

export default TodoItem;
