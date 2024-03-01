import Avatar from '../assets/avatar.png';
import Cup from '../assets/cup.svg';
import TodoItem from './TodoItem';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

interface TaskListProps {
  tasks: Task[];
  onToggleTaskCompletion: (taskId: number) => void;
  onEditTask: (taskId: number, newText: string) => void;
}

const TodoList: React.FC<TaskListProps> = ({
  tasks,
  onToggleTaskCompletion,
  onEditTask,
}) => {
  return (
    <div className="todo-container">
      {/* User info */}
      <div className="user-info">
        <div className="img">
          <img src={Avatar} alt="" />
        </div>

        <div className="text">
          <h2>Hello, John</h2>
          <p>What are your plans for today?</p>
        </div>
      </div>

      {/* Premium plan */}
      <div className="go-pro">
        <img src={Cup} alt="" />

        <p>Go Pro Upgrade Now</p>

        <span>$1</span>
      </div>

      {/* Todo */}
      <ul className="todos">
        {tasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            onToggleTaskCompletion={onToggleTaskCompletion}
            onEditTask={onEditTask}
          />
        ))}
      </ul>

      {/* Update todo */}
      <div className="update">
        <button className="btn">
          <i className="fa-solid fa-plus"></i>
        </button>
      </div>
    </div>
  );
};

export default TodoList;
