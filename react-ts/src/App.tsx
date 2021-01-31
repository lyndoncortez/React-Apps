import React, { useState } from "react";

type FormElem = React.FormEvent<HTMLFormElement>;

interface Todo {
  text: string;
  complete: boolean;
}

function App(): JSX.Element {
  const [value, setValue] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleSubmit = (e: FormElem): void => {
    e.preventDefault();
    setValue("");
  };
  return (
    <>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required
        />
        <button type="submit">Add Todo</button>
      </form>
    </>
  );
}

export default App;
