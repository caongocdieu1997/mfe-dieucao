import React from "react";

// Landing Page built with Tailwind CSS
// Usage: render <LandingPage /> inside your app

export default function Landing() {
  return (
    <>
      {/* Header */}

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              Xây Landing Page thật nhanh với Tailwind
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Một template tối giản, responsive, sẵn sàng gắn vào dự án
              React/Next/Vite hay Webpack.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <button className="rounded-xl bg-slate-900 text-white px-6 py-3 font-medium hover:bg-slate-800">
                Dùng thử miễn phí
              </button>
              <button className="rounded-xl border border-slate-300 px-6 py-3 font-medium hover:bg-slate-50">
                Xem tài liệu
              </button>
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm text-slate-500">
              <div className="flex -space-x-2">
                <img
                  className="h-8 w-8 rounded-full border border-white"
                  src="https://i.pravatar.cc/40?img=1"
                  alt="avatar"
                />
                <img
                  className="h-8 w-8 rounded-full border border-white"
                  src="https://i.pravatar.cc/40?img=2"
                  alt="avatar"
                />
                <img
                  className="h-8 w-8 rounded-full border border-white"
                  src="https://i.pravatar.cc/40?img=3"
                  alt="avatar"
                />
              </div>
              <span>Hơn 3,000 dev đang dùng</span>
            </div>
          </div>
          <div>
            <div className="aspect-video w-full rounded-3xl border border-slate-200 bg-white shadow-sm overflow-hidden">
              <div className="h-full w-full grid place-items-center text-center p-8">
                <div className="text-slate-400">
                  <div className="text-sm uppercase tracking-wider">
                    Preview
                  </div>
                  <div className="mt-2 text-xl font-semibold">
                    Đặt hình/illustration của bạn ở đây
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logos */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <p className="text-center text-sm text-slate-500">
          Tin dùng bởi các đội ngũ
        </p>
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 opacity-70">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-10 rounded-xl bg-slate-200" />
          ))}
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16"
      >
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Tính năng nổi bật
          </h2>
          <p className="mt-3 text-slate-600">
            Thiết kế gọn gàng, dễ tùy biến, tập trung vào tốc độ phát triển.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Thiết kế Responsive",
              desc: "Tự động hiển thị đẹp trên mọi kích thước màn hình.",
            },
            {
              title: "Tối giản",
              desc: "Chỉ những gì cần thiết để bạn khởi động nhanh.",
            },
            {
              title: "Dễ mở rộng",
              desc: "Tách section thành component để tái sử dụng.",
            },
            {
              title: "Hiệu năng tốt",
              desc: "Tailwind JIT giúp build nhanh và gọn.",
            },
            {
              title: "A11y cơ bản",
              desc: "Tuân thủ các thực hành truy cập phổ biến.",
            },
            {
              title: "Tương thích MFE",
              desc: "Dễ gắn vào Module Federation / monorepo.",
            },
          ].map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="h-10 w-10 rounded-xl bg-slate-900 text-white grid place-items-center mb-4">
                ★
              </div>
              <h3 className="font-semibold text-lg text-slate-900">
                {f.title}
              </h3>
              <p className="mt-2 text-slate-600 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section
        id="pricing"
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16"
      >
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Giá minh bạch
          </h2>
          <p className="mt-3 text-slate-600">
            Chọn gói phù hợp cho đội của bạn.
          </p>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            { name: "Starter", price: "Miễn phí", cta: "Dùng thử" },
            {
              name: "Pro",
              price: "$9/tháng",
              cta: "Mua ngay",
              highlight: true,
            },
            { name: "Team", price: "$29/tháng", cta: "Liên hệ" },
          ].map((p) => (
            <div
              key={p.name}
              className={`rounded-2xl border ${
                p.highlight ? "border-slate-900" : "border-slate-200"
              } bg-white p-6 shadow-sm`}
            >
              <div className="flex items-baseline justify-between">
                <h3 className="font-semibold text-lg">{p.name}</h3>
                <span className="text-slate-900 font-bold">{p.price}</span>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                <li>✓ Tính năng cơ bản</li>
                <li>✓ Hỗ trợ email</li>
                <li>✓ Cập nhật hàng tháng</li>
              </ul>
              <button
                className={`mt-6 w-full rounded-xl px-4 py-2 font-medium ${
                  p.highlight
                    ? "bg-slate-900 text-white hover:bg-slate-800"
                    : "border border-slate-300 hover:bg-slate-50"
                }`}
              >
                {p.cta}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section
        id="faq"
        className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16"
      >
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 text-center">
          Câu hỏi thường gặp
        </h2>
        <div className="mt-8 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
          {[
            {
              q: "Cài Tailwind thế nào?",
              a: "Thêm postcss + tailwind config, import @tailwind base/components/utilities vào CSS chính.",
            },
            {
              q: "Dùng trong Module Federation được không?",
              a: "Được. Mỗi microFE có thể import CSS riêng; cân nhắc tiền tố class hoặc tránh xung đột bằng scope.",
            },
            {
              q: "Có dark mode không?",
              a: "Bật class 'dark' trên html/body và dùng variant dark: trong Tailwind.",
            },
          ].map((item) => (
            <details key={item.q} className="group p-6 open:bg-slate-50">
              <summary className="flex cursor-pointer items-center justify-between text-slate-900 font-medium">
                {item.q}
                <span className="ml-4 select-none text-slate-500 group-open:rotate-180 transition">
                  ⌄
                </span>
              </summary>
              <p className="mt-3 text-slate-600">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Footer */}
    </>
  );
}
