import React, { useEffect, useRef, useState } from 'react';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

interface TaskItemProps {
  task: Task;
  onToggleTaskCompletion: (taskId: number) => void;
  onEditTask: (taskId: number, newText: string) => void;
}

const TodoItem: React.FC<TaskItemProps> = ({
  task,
  onEditTask,
  onToggleTaskCompletion,
}) => {
  const [isEditing, setEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);

  const handleToggleCompletion = () => {
    onToggleTaskCompletion(task.id);
  };

  const handleClick = () => {
    setEditing(true);
  };

  const handleEdit = () => {
    onEditTask(task.id, editedText);
    setEditing(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedText(e.target.value);
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEditing) {
      // Focus on the input field when editing starts
      inputRef.current?.focus();
    }
  }, [isEditing]);

  return (
    <li className={`todo ${task.completed ? 'completed' : ''} `}>
      <div className="flex">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={handleToggleCompletion}
        />
        {isEditing ? (
          <input
            type="text"
            value={editedText}
            onChange={handleChange}
            onBlur={handleEdit}
            ref={inputRef}
            className={isEditing ? 'edit-input' : ''}
          />
        ) : (
          <span className={`${task.completed ? 'completed' : ''}`}>
            {task.text}
          </span>
        )}
      </div>

      <div>
        <button className="edit-btn" onClick={handleClick}>
          Edit
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
