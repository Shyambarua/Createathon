import type { Question } from '../../types/questions';

export const questions: Question[] = [
  {
    id: '1',
    title: 'Sum of Two Numbers',
    description: 'Write a function that takes two numbers and returns their sum.',
    difficulty: 'Easy',
    status: 'Solved',
    acceptance: 95,
    hint: 'Use the + operator to add two numbers.',
  },
  {
    id: '2',
    title: 'Find Maximum',
    description: 'Write a function that returns the maximum of three numbers.',
    difficulty: 'Easy',
    status: 'Unsolved',
    acceptance: 89,
    hint: 'Use Math.max() or conditional statements.',
  },
];
