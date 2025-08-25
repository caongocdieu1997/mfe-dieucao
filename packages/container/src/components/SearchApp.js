import React, { useRef, useEffect, useState } from "react";

function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-50/80 backdrop-blur-sm z-50">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-12 h-12 border-4 border-t-transparent border-indigo-500 rounded-full animate-spin"></div>
        <p className="text-indigo-600 font-medium text-lg">
          Is Loading Search...
        </p>
      </div>
    </div>
  );
}

export default function SearchApp() {
  const ref = useRef(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function loadRemote() {
      try {
        const { mount } = await import("search/SearchApp");
        if (ref.current) {
          mount(ref.current);
        }
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    loadRemote();
  }, []);

  if (error) {
    return (
      <div className="p-4 bg-red-100 text-red-500 text-center">
        Failed to load Search App.
      </div>
    );
  }

  return (
    <>
      {loading && <Loading />}
      <div ref={ref}></div>
    </>
  );
}
