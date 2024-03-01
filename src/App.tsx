import { useState } from 'react';

import './sass/main.scss';
import TodoList from './components/TodoList';
import TaskForm from './components/TaskForm';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  // Function to add tasks
  const addTask = (text: string) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      { id: Date.now(), text, completed: false },
    ]);
  };

  // Function to toggle between tasks
  const toggleTaskCompletion = (taskId: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Function to edit task
  const editTask = (taskId: number, newText: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, text: newText } : task
      )
    );
  };
  return (
    <>
      <div className="panel">
        <div className="app-container">
          <TodoList
            tasks={tasks}
            onToggleTaskCompletion={toggleTaskCompletion}
            onEditTask={editTask}
          />
          <TaskForm addTask={addTask} />
        </div>
      </div>
    </>
  );
};

export default App;
