import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Link,
} from "react-router-dom";
import "./global.css"; // Import global styles
import Landing from "./components/Landing";
import Pricing from "./components/Pricing";

// Các trang đơn giản
function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function Contact() {
  return <h1>Contact Page</h1>;
}

// Layout chính với navigation
function Layout() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-800">
      <header className="sticky top-0 z-40 bg-white/70 backdrop-blur border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-semibold">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-slate-900 text-white">
              L
            </span>
            Landing
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {/* <a href="#features" >
              Tính năng
            </a> */}
            <Link to="/" className="hover:text-slate-900 text-slate-600">
              Home
            </Link>
            <Link to="/pricing" className="hover:text-slate-900 text-slate-600">
              Pricing
            </Link>
          </nav>
          <div className="flex items-center gap-3">
            <button className="hidden md:inline-flex rounded-xl border border-slate-300 px-4 py-2 text-sm hover:bg-slate-50">
              Đăng nhập
            </button>
            <button className="inline-flex rounded-xl bg-slate-900 text-white px-4 py-2 text-sm hover:bg-slate-800">
              Bắt đầu
            </button>
          </div>
        </div>
      </header>
      <Outlet />
      <footer className="border-t border-slate-200 py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Landing. All rights reserved.
      </footer>
    </div>
  );
}

// Cấu hình router v7
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Landing /> },
      { path: "pricing", element: <Pricing /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
