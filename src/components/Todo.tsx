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
              <label>
                <input type="checkbox" />
                {task.text}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
