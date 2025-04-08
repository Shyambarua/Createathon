import Link from 'next/link';
import { questions } from '@/data/questions';

export default function QuestionTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left table-auto border-collapse">
        <thead>
          <tr className="bg-gray-800">
            <th className="p-2">Status</th>
            <th className="p-2">Title</th>
            <th className="p-2">Difficulty</th>
            <th className="p-2">Acceptance</th>
          </tr>
        </thead>
        <tbody>
          {questions.map((q) => (
            <tr key={q.id} className="hover:bg-gray-900 border-b border-gray-700">
              <td className="p-2">{q.status === 'Solved' ? '✅' : '⬜'}</td>
              <td className="p-2 text-blue-400 hover:underline">
                <Link href={`/question/${q.id}`}>{q.title}</Link>
              </td>
              <td
                className={`p-2 ${
                  q.difficulty === 'Hard'
                    ? 'text-red-500'
                    : q.difficulty === 'Medium'
                    ? 'text-yellow-400'
                    : 'text-green-400'
                }`}
              >
                {q.difficulty}
              </td>
              <td className="p-2">{q.acceptance}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
