import { useState } from "react";

export default function AddRecipeForm() {
    const [title, setTitle] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [steps, setSteps] = useState("");
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};
        if (!title.trim()) newErrors.title = "Title is required.";
        if (!ingredients.trim()) {
            newErrors.ingredients = "Ingredients are required.";
        } else {
            const items = ingredients.split("\n").filter((i) => i.trim() !== "");
            if (items.length < 2) {
                newErrors.ingredients = "Please add at least two ingredients.";
            }
        }
        if (!steps.trim()) newErrors.steps = "Preparation steps are required.";
        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        const newRecipe = {
            title,
            ingredients: ingredients.split("\n"),
            instructions: steps.split("\n"),
        };

        console.log("New Recipe Submitted:", newRecipe);

        // reset form
        setTitle("");
        setIngredients("");
        setSteps("");
        setErrors({});
    };

    return (
        <div className="min-h-screen bg-gray-100 py-10 px-4 flex justify-center">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-2xl bg-white p-8 rounded-xl shadow-md"
            >
                <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                    ➕ Add a New Recipe
                </h1>

                {/* Title */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">
                        Recipe Title
                    </label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${errors.title ? "border-red-500" : "border-gray-300"
                            }`}
                        placeholder="Enter recipe title"
                    />
                    {errors.title && (
                        <p className="text-red-500 text-sm mt-1">{errors.title}</p>
                    )}
                </div>

                {/* Ingredients */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">
                        Ingredients (one per line)
                    </label>
                    <textarea
                        value={ingredients}
                        onChange={(e) => setIngredients(e.target.value)}
                        className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${errors.ingredients ? "border-red-500" : "border-gray-300"
                            }`}
                        rows="5"
                        placeholder="e.g. 2 eggs\n200g flour"
                    />
                    {errors.ingredients && (
                        <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
                    )}
                </div>

                {/* Steps */}
                <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2">
                        Preparation Steps (one per line)
                    </label>
                    <textarea
                        value={steps}
                        onChange={(e) => setSteps(e.target.value)}
                        className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${errors.steps ? "border-red-500" : "border-gray-300"
                            }`}
                        rows="5"
                        placeholder="e.g. Mix ingredients\nBake for 20 minutes"
                    />
                    {errors.steps && (
                        <p className="text-red-500 text-sm mt-1">{errors.steps}</p>
                    )}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                    Submit Recipe
                </button>
            </form>
        </div>
    );
}
