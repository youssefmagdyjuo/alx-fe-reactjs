import { useParams } from "react-router-dom";
import data from "../data.json";

export default function RecipeDetail() {
    const { id } = useParams();
    const recipe = data.find((r) => r.id === Number(id));

    return (
        <div className="p-6">
            {recipe ? (
                <div className="bg-white shadow-md rounded-xl p-6 max-w-lg mx-auto text-center">
                    <img
                        src={recipe.image}
                        alt={recipe.title}
                        className="w-32 h-32 object-cover rounded-full mx-auto border-4 border-blue-100"
                    />
                    <h1 className="mt-4 text-2xl font-bold text-gray-800">
                        {recipe.title}
                    </h1>
                    <p className="mt-2 text-gray-600">{recipe.summary}</p>
                </div>
            ) : (
                <p className="text-center text-gray-500">Recipe not found.</p>
            )}
        </div>
    );
}
