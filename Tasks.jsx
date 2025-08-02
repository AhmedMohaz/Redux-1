import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, editTask } from './taskSlice';

const Task = ({ task }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editDesc, setEditDesc] = useState(task.description);

  const handleToggle = () => dispatch(toggleTask(task.id));
  const handleSave = () => {
    dispatch(editTask({ id: task.id, description: editDesc }));
    setIsEditing(false);
  };

  return (
    <div className="flex items-center justify-between border-b py-2">
      {isEditing ? (
        <>
          <input
            value={editDesc}
            onChange={(e) => setEditDesc(e.target.value)}
            className="border p-1 rounded w-full mr-2"
          />
          <button
            onClick={handleSave}
            className="text-green-600 font-medium"
          >
            Save
          </button>
        </>
      ) : (
        <>
          <span
            onClick={handleToggle}
            className={`flex-grow cursor-pointer ${task.isDone ? 'line-through text-gray-400' : ''}`}
          >
            {task.description}
          </span>
          <button
            onClick={() => setIsEditing(true)}
            className="text-blue-600 ml-2"
          >
            Edit
          </button>
        </>
      )}
    </div>
  );
};

export default Task;
