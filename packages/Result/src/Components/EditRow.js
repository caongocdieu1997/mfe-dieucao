import React, { useState } from "react";

function EditRow({ defaultValue, inputRef, onSave, onCancel }) {
  const [val, setVal] = useState(defaultValue);

  return (
    <div className="flex items-center gap-2">
      <input
        ref={inputRef}
        value={val}
        onChange={(e) => setVal(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") onSave(val);
          if (e.key === "Escape") onCancel();
        }}
        className="flex-1 rounded-lg border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-slate-300"
      />
      <button
        onClick={() => onSave(val)}
        className="rounded-lg px-3 py-2 text-sm bg-slate-900 text-white hover:bg-slate-800"
      >
        Lưu
      </button>
      <button
        onClick={onCancel}
        className="rounded-lg px-3 py-2 text-sm border border-slate-200 hover:bg-white"
      >
        Huỷ
      </button>
    </div>
  );
}
export default EditRow;
