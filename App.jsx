import React from 'react';
import AddTask from './AddTask';
import ListTask from './ListTask';

const App = () => {
  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">Redux ToDo App</h1>
      <AddTask />
      <ListTask />
    </div>
  );
};

export default App;
