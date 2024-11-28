import axios from "axios";
import { Recipe } from "../../public/models/recipe.model";

const endpoint = "http://localhost:8080/recipes";

export const RecipeService = {
  getRecipes: async () => {
    try {
      const response = await axios.get(endpoint);
      return response.data;
    } catch (error) {
      console.error("Error fetching recipes:", error);
      throw error;
    }
  },

  getRecipeById: async (id: number) => {
    try {
      const response = await axios.get(`${endpoint}/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching recipe with id ${id}:`, error);
      throw error;
    }
  },

  addRecipe: async (recipe: Recipe) => {
    try {
      const response = await axios.post(endpoint, recipe);
      return response.data;
    } catch (error) {
      console.error("Error adding recipe:", error);
      throw error;
    }
  },

  updateRecipe: async (id: number, recipe: Recipe) => {
    try {
      const response = await axios.put(`${endpoint}/${id}`, recipe);
      return response.data;
    } catch (error) {
      console.error(`Error updating recipe with id ${id}:`, error);
      throw error;
    }
  },

  deleteRecipe: async (id: number) => {
    try {
      const response = await axios.delete(`${endpoint}/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error deleting recipe with id ${id}:`, error);
      throw error;
    }
  },
};
