// AddRecipeForm component
import { useState } from "react";
import { useRecipeStore } from "./recipeStore";

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    addRecipe({ id: Date.now(), title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        width: "100%",
        maxWidth: "400px",
        margin: "40px auto",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        padding: "24px",
        borderRadius: "8px",
        background: "#f9f9f9",
        boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
      }}
    >
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        style={{
          padding: "10px",
          borderRadius: "4px",
          border: "1px solid #ccc",
          fontSize: "16px",
        }}
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        rows={4}
        style={{
          padding: "10px",
          borderRadius: "4px",
          border: "1px solid #ccc",
          fontSize: "16px",
          resize: "vertical",
        }}
      />
      <button
        type="submit"
        style={{
          padding: "12px",
          borderRadius: "4px",
          border: "none",
          background: "#4caf50",
          color: "#fff",
          fontWeight: "bold",
          fontSize: "16px",
          cursor: "pointer",
          transition: "background 0.2s",
        }}
      >
        Add Recipe
      </button>
    </form>
  );
};
export default AddRecipeForm;
