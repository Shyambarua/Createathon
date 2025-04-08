'use client';

import Filters from '@/components/Filters';
import StudyPlans from '@/components/StudyPlans';
import QuestionTable from '@/components/QuestionTable';

export default function QuestionsDashboard() {
  return (
    <main className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold mb-4">🧠 Study Plan</h1>
      <StudyPlans />

      <div className="mt-10">
        <Filters />
        <QuestionTable />
      </div>
    </main>
  );
}
