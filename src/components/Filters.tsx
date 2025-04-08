export default function Filters() {
    return (
      <div className="flex flex-wrap gap-4 my-6 items-center">
        <div className="flex gap-2 flex-wrap">
          {['All Topics', 'Array', 'DP', 'String', 'Tree', 'Hash Table'].map((tag) => (
            <button
              key={tag}
              className="bg-gray-800 px-3 py-1 rounded-full hover:bg-gray-700 text-sm"
            >
              {tag}
            </button>
          ))}
        </div>
        <div className="ml-auto flex gap-4">
          <select className="bg-gray-900 text-white px-3 py-1 rounded">
            <option>Status</option>
            <option>Solved</option>
            <option>Unsolved</option>
          </select>
          <select className="bg-gray-900 text-white px-3 py-1 rounded">
            <option>Difficulty</option>
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>
          <input
            type="text"
            placeholder="Search questions..."
            className="bg-gray-900 text-white px-3 py-1 rounded"
          />
        </div>
      </div>
    );
  }
  