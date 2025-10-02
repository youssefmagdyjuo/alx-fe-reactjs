import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../data.json"; // 👈 استيراد مباشر

export default function RecipeDetail() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        const foundRecipe = data.find((r) => r.id === Number(id));
        setRecipe(foundRecipe);
    }, [id]);

    if (!recipe) {
        return <div className="text-center text-gray-500 py-10">Loading...</div>;
    }

    return (
        <div className="min-h-screen bg-gray-100 py-10 px-4">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
                {/* صورة الوصفة */}
                <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full h-80 object-cover"
                />

                {/* المحتوى */}
                <div className="p-8">
                    <h1 className="text-3xl font-extrabold text-gray-900 text-center">
                        {recipe.title}
                    </h1>
                    <p className="mt-4 text-gray-600 text-center">{recipe.summary}</p>

                    {/* المكونات */}
                    <h2 className="mt-8 text-2xl font-semibold text-gray-800">
                        🥗 Ingredients
                    </h2>
                    <ul className="list-disc list-inside text-gray-700 mt-3 space-y-1">
                        {recipe.ingredients.map((item, index) => (
                            <li key={index} className="leading-relaxed">
                                {item}
                            </li>
                        ))}
                    </ul>

                    {/* خطوات التحضير */}
                    <h2 className="mt-8 text-2xl font-semibold text-gray-800">
                        🍳 Instructions
                    </h2>
                    <ol className="list-decimal list-inside text-gray-700 mt-3 space-y-2">
                        {recipe.instructions.map((step, index) => (
                            <li key={index} className="leading-relaxed">
                                {step}
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    );
}
