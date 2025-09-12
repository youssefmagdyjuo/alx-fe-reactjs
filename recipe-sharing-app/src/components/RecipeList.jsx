// RecipeList component
import { useRecipeStore } from "./recipeStore";

const RecipeList = () => {
    const recipes = useRecipeStore((state) => state.recipes);

    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "1.5rem",
                padding: "2rem",
            }}
        >
            {recipes.map((recipe) => (
                <div
                    key={recipe.id}
                    style={{
                        background: "#fff",
                        borderRadius: "8px",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
                        padding: "1.5rem",
                        transition: "transform 0.2s",
                        border: "1px solid #eee",
                    }}
                >
                    <h3 style={{ margin: "0 0 0.5rem 0", color: "#2d3748" }}>
                        {recipe.title}
                    </h3>
                    <p style={{ color: "#4a5568" }}>{recipe.description}</p>
                </div>
            ))}
        </div>
    );
};
export default RecipeList;
