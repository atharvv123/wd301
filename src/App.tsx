import React from 'react';
import TaskCard from './TaskCard';

const App: React.FC = () => {
  return (
    <div className="container mx-auto p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Smarter Tasks</h1>
      <p className="text-gray-600 mb-6">
        <strong>Project:</strong> Graduation Final Year Project (Revamp College Website)
      </p>
      <div className="grid grid-cols-2 gap-6">
        {/* Pending Section */}
        <div className="bg-gray-100 p-4 rounded-md shadow-md">
          <h2 className="text-xl font-bold mb-4 text-center">Pending</h2>
          <TaskCard
            title="Build the website with static content"
            dueDate="10th April"
            assignee="Rohit S"
            status="pending"
          />
          <TaskCard
            title="Add a blog"
            dueDate="22nd March"
            assignee="Rohit M"
            status="pending"
          />
          <button className="w-full text-left text-gray-500 mt-2">+ New task</button>
        </div>

        {/* Done Section */}
        <div className="bg-gray-100 p-4 rounded-md shadow-md">
          <h2 className="text-xl font-bold mb-4 text-center">Done</h2>
          <TaskCard
            title="Design the mockup"
            completedAtDate="10th April"
            assignee="Rohit M"
            status="done"
          />
          <TaskCard
            title="Get the approval from principal"
            completedAtDate="20th April"
            assignee="Ajay S"
            status="done"
          />
        </div>
      </div>
    </div>
  );
};

export default App;
