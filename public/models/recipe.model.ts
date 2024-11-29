export type Recipe = {
  id: number;
  title: string;
  difficulty: number;
  time: number;
  image: string;
  ingredients: Array<number>;
  steps: Array<number>;
};

export type ingredient = {
  id: number;
  name: string;
};

export type Step = {
  id: number;
  src: string;
  name: string;
};

export interface RecipeData {
  id: number;
  title: string;
  difficulty: number;
  time: number;
  image: string;
  ingredients: string[];
  steps: number[];
}

export interface IngredientData {
  id: number;
  name: string;
};

export interface StepData {
  id: number;
  url: string;
  name: string;
}
