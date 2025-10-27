import { create } from "zustand";

export const useRecipeStore = create((set) => ({
  // 📌 الوصفات الأساسية
  recipes: [
    { id: 1, title: "Pasta", description: "Delicious Italian pasta." },
    { id: 2, title: "Pizza", description: "Cheesy pizza with toppings." },
    { id: 3, title: "Salad", description: "Healthy green salad." },
  ],

  // ➕ إضافة وصفة جديدة
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
    })),

  // ✏️ تعديل وصفة موجودة
  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? { ...recipe, ...updatedRecipe } : recipe
      ),
    })),

  // ❌ حذف وصفة
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),

  // 📌 البحث
  searchTerm: "",
  filteredRecipes: [],

  setSearchTerm: (term) => set({ searchTerm: term }),

  filterRecipes: () =>
    set((state) => {
      if (!state.searchTerm.trim()) {
        return { filteredRecipes: state.recipes };
      }
      const filtered = state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      );
      return { filteredRecipes: filtered };
    }),

  // ⭐ Favorites
  favorites: [],
  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: [...new Set([...state.favorites, recipeId])],
    })),
  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  // 🎯 Recommendations
  recommendations: [],
  generateRecommendations: () =>
    set((state) => {
      const recommended = state.recipes.filter(
        (recipe) =>
          !state.favorites.includes(recipe.id) && Math.random() > 0.5
      );
      return { recommendations: recommended };
    }),
}));
