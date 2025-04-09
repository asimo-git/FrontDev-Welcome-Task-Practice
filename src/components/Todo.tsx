import React, { useState, FormEvent } from "react";
import ThemeToggle from "./ThemeToggle";
import "./Todo.scss";

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

const Todo: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [taskList, setTaskList] = useState<Task[]>([]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputValue.trim()) {
      setTaskList((prev) => [
        ...prev,
        // for id I would prefer to use crypto.randomUUID(), but since the interface specifies the type number, the generation is based on the date
        {
          id: Date.now(),
          text: inputValue,
          completed: false,
        },
      ]);
    }

    setInputValue("");
  };

  const toggleTaskStatus = (id: number) => {
    setTaskList((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: number) => {
    setTaskList((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <div className="todo-container">
      <div className="todo-header">
        <h1>Список задач</h1>
        <ThemeToggle />
      </div>

      <form className="input-section" onSubmit={handleSubmit}>
        <input
          type="text"
          className="task-input"
          placeholder="Введите новую задачу"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit" className="add-button">
          Добавить
        </button>
      </form>

      <div className="tasks-list">
        <ul>
          {taskList.map((task) => (
            <li key={task.id} className="task-item">
              <label className={task.completed ? "completed" : ""}>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTaskStatus(task.id)}
                />
                {task.text}
              </label>
              <button
                type="button"
                onClick={() => deleteTask(task.id)}
                className="delete-button"
              >
                x
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
