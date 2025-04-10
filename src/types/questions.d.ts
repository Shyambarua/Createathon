export type Question = {
  id: string;
  title: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  acceptance: number;
  hint: string;
};
