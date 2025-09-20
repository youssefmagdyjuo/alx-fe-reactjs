import { useRecipeStore } from "./recipeStore";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function RecipeList() {
  const recipes = useRecipeStore((state) => state.recipes);
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const searchTerm = useRecipeStore((state) => state.searchTerm) || ""; // ✅ fallback
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);

  const addFavorite = useRecipeStore((state) => state.addFavorite);

  useEffect(() => {
    filterRecipes();
  }, [searchTerm, filterRecipes]);

  const recipesToShow =
    searchTerm.trim() === "" ? recipes : filteredRecipes;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "1.5rem",
        padding: "2rem",
      }}
    >
      {recipesToShow.map((recipe) => (
        <div key={recipe.id} style={{ background: "violet", padding: "1rem" }}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <Link to={`/recipe/${recipe.id}`}>View Details</Link>
          <br />
          <button onClick={() => addFavorite(recipe.id)}>⭐ Add to Favorites</button>
        </div>
      ))}
    </div>
  );
}
