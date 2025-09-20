// recipeStore.js
import { create } from "zustand";

export const useRecipeStore = create((set) => ({
  // 📌 الوصفات الأساسية
  recipes: [
    { id: 1, title: "Pasta", description: "Delicious Italian pasta." },
    { id: 2, title: "Pizza", description: "Cheesy pizza with toppings." },
    { id: 3, title: "Salad", description: "Healthy green salad." },
  ],

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
      favorites: [...new Set([...state.favorites, recipeId])], // نضمن مفيش تكرار
    })),
  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  // 🎯 Recommendations
  recommendations: [],
  generateRecommendations: () =>
    set((state) => {
      // Mock logic: اختار وصفات مش موجودة في favorites عشوائياً
      const recommended = state.recipes.filter(
        (recipe) => !state.favorites.includes(recipe.id) && Math.random() > 0.5
      );
      return { recommendations: recommended };
    }),
}));
