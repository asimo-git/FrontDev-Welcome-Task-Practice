import React, { useContext } from "react";
import Todo from "./components/Todo";
import "./App.scss";
import { ThemeContext } from "./context/ThemeContext";

const App: React.FC = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="App" data-theme={theme}>
      <Todo />
    </div>
  );
};

export default App;
