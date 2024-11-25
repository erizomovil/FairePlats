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

export interface StepData {
  id: number;
  url: string;
}
