import React, { useEffect, useState } from "react";
import data from "../data.json"; // 👈 استيراد مباشر

export default function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // عند mount فقط
    setRecipes(data);
  }, []);

  return (
<div className="max-w-6xl mx-auto p-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {recipes.map((r, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-5 flex flex-col items-center text-center"
        >
          <img
            className="w-24 h-24 rounded-full object-cover border-4 border-blue-100 shadow-sm"
            src={r.image}
            alt={r.title}
          />
          <h1 className="mt-4 text-lg font-semibold text-gray-800">
            {r.title}
          </h1>
          <p className="mt-2 text-sm text-gray-600">{r.summary}</p>
        </div>
      ))}
    </div>
  );
}
