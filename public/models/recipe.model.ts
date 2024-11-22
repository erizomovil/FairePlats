export type Recipe = {
  id: number;
  title: string;
  difficulty: number;
  time: number;
  image: string;
  ingredients: Array<number>;
  steps: Array<number>;
};

export type Step = {
  id: number;
  src: string;
};
