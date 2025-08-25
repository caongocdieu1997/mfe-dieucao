import React from "react";
// PricingPage.tsx
export default function Pricing() {
  const plans = [
    {
      title: "Starter",
      price: "$19/mo",
      description: "Perfect for individuals just getting started.",
      features: ["Basic Analytics", "Email Support", "1 Project"],
      highlighted: false,
    },
    {
      title: "Pro",
      price: "$49/mo",
      description: "Great for small teams and growing businesses.",
      features: [
        "Advanced Analytics",
        "Priority Support",
        "Unlimited Projects",
      ],
      highlighted: true,
    },
    {
      title: "Enterprise",
      price: "$99/mo",
      description: "For large organizations with custom needs.",
      features: ["Custom Solutions", "Dedicated Manager", "Premium Support"],
      highlighted: false,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 bg-gray-50">
      <h2 className="text-4xl font-extrabold text-center mb-4">
        Simple, Transparent Pricing
      </h2>
      <p className="text-gray-600 text-center mb-12">
        Choose the plan that’s right for you and scale as you grow.
      </p>
      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div
            key={plan.title}
            className={`rounded-2xl p-8 border transition-all duration-300 ${
              plan.highlighted
                ? "bg-indigo-600 text-white shadow-xl scale-105"
                : "bg-white hover:shadow-lg"
            }`}
          >
            <h3 className="text-2xl font-semibold mb-2">{plan.title}</h3>
            <p className="mb-4">{plan.description}</p>
            <p className="text-4xl font-bold mb-6">{plan.price}</p>
            <ul className="space-y-3 mb-8">
              {plan.features.map((f) => (
                <li
                  key={f}
                  className={`flex items-center gap-2 ${
                    plan.highlighted ? "text-indigo-100" : "text-gray-700"
                  }`}
                >
                  <span className="w-2 h-2 bg-current rounded-full"></span> {f}
                </li>
              ))}
            </ul>
            <button
              className={`w-full py-3 rounded-lg font-medium transition ${
                plan.highlighted
                  ? "bg-white text-indigo-600 hover:bg-indigo-100"
                  : "bg-indigo-600 text-white hover:bg-indigo-700"
              }`}
            >
              {plan.highlighted ? "Get Started" : "Choose Plan"}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
