import { useState, useEffect } from "react";
import Input from "./components/Input/Input";
import Button from "./components/Button/Button";
import TodoCard from "./components/TodoCard/TodoCard";

function App() {
  const [dark, setDark] = useState(false);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState([
    { id: 1, text: "task_1", completed: false },
    { id: 2, text: "task_2", completed: false },
  ]);

  function addTask() {
    if (input === "") {
      alert("please enter something...");
    } else {
      setOutput((prev) => [
        ...prev,
        { id: prev.length + 1, text: input, completed: false },
      ]);
    }
  }

  function deleteTodo(todo_text) {
    setOutput((prev) => prev.filter((item) => item.text !== todo_text));
  }

  function checkTodo(todo_id) {
    setOutput((prev) =>
      prev.map((item) => {
        return item.id === todo_id
          ? { ...item, completed: !item.completed }
          : item;
      })
    );
  }

  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState(0);

  useEffect(() => {
    setCount(count + 1);
  }, [inputValue, setInputValue]);

  return (
    <div className={dark ? "dark" : "light"}>
      {/* <button onClick={() => setDark((prev) => !prev)}>toggle</button>
      <Input
        type="text"
        onChanged={(e) => setInput(e.target.value)}
        placeholder="enter your task..."
        width={200}
        height={30}
        rounded={10}
        border="1px solid black"
        outline="none"
      />
      <Button
        onClickFoo={addTask}
        width={100}
        height={30}
        rounded={10}
        backgroundColor="red"
        textColor="blue"
      >
        Add Task
      </Button>
      <div>
        {output.map((todo) => {
          return (
            <TodoCard
              todoId={todo.id}
              checkTodoFunction={checkTodo}
              deleteTodoFunction={deleteTodo}
              todo={todo}
            />
          );
        })}
      </div> */}

      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>{count}</h1>
    </div>
  );
}

export default App;
