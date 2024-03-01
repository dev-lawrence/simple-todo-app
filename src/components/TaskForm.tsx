import { useState } from 'react';

interface TaskFormProps {
  addTask: (text: string) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ addTask }) => {
  const [taskText, setTaskText] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (taskText.trim() !== '') {
      addTask(taskText);
      setTaskText('');
    }
  };

  return (
    <div className="task-form-container">
      <div className="title">
        <h1>Edit Task</h1>
      </div>

      <form onSubmit={handleSubmit} className="task">
        <label>Task Name</label>
        <input
          type="text"
          placeholder="Add a new task"
          value={taskText}
          onChange={handleInputChange}
        />

        <div className="buttons">
          <button className="btn delete" type="button">
            Delete
          </button>
          <button className="btn save" type="submit">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
