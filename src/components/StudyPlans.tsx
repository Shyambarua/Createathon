const studyPlans = [
  { title: 'Top Interview 150', subtitle: 'Must-do List for Interview Prep', color: 'bg-blue-600' },
  { title: 'LeetCode 75', subtitle: 'Ace Coding Interview', color: 'bg-purple-600' },
  { title: 'SQL 50', subtitle: 'Crack SQL Interview', color: 'bg-sky-600' },
  { title: 'Intro to Pandas', subtitle: 'Learn Basic Pandas', color: 'bg-green-600' },
  { title: '30 Days of JS', subtitle: 'Learn JS Basics', color: 'bg-yellow-500' },
];

export default function StudyPlans() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {studyPlans.map((plan, idx) => (
        <div
          key={idx}
          className={`rounded-lg p-4 shadow hover:scale-[1.02] transition-all duration-200 ${plan.color}`}
        >
          <h3 className="font-bold text-lg">{plan.title}</h3>
          <p className="text-sm text-white/80">{plan.subtitle}</p>
        </div>
      ))}
    </div>
  );
}
