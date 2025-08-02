import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from './taskSlice';
import Task from './Task';

const ListTask = () => {
  const dispatch = useDispatch();
  const { taskList, filter } = useSelector(state => state.tasks);

  const filteredTasks = taskList.filter(task =>
    filter === 'all' ? true : filter === 'done' ? task.isDone : !task.isDone
  );

  return (
    <div>
      <div className="flex gap-4 mb-4">
        {['all', 'done', 'not'].map((type) => (
          <button
            key={type}
            onClick={() => dispatch(setFilter(type))}
            className={`px-3 py-1 border rounded ${filter === type ? 'bg-blue-500 text-white' : ''}`}
          >
            {type === 'all' ? 'All' : type === 'done' ? 'Done' : 'Not Done'}
          </button>
        ))}
      </div>
      <div className="space-y-2">
        {filteredTasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
        {filteredTasks.length === 0 && (
          <p className="text-center text-gray-400">No tasks found.</p>
        )}
      </div>
    </div>
  );
};

export default ListTask;
