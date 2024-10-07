import React, { useState } from "react";

function App() {
  const [taskInput, setTaskInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: Date.now(),
      name: taskInput,
    };
    setTasks((prev) => [...prev, newTask]);
    setTaskInput("");
  };
  return (
    <>
      <h1 className="text-3xl font-bold text-center">Midterm 2</h1>
      <div className="flex flex-col items-center justify-center my-10">
        <form onSubmit={handleSubmit}>
          <div className="flex">
            <label htmlFor="mainInput"></label>
            <input
              className="border border-black"
              type="text"
              placeholder="task"
              id="mainInput"
              value={taskInput}
              onChange={(e) => setTaskInput(e.target.value)}
              required
            />
            <button type="submit">Save</button>
          </div>
        </form>
        <div className="mt-10">
          <h2>saved tasks :</h2>
          <ul>
            {tasks.map((task) => (
              <li key={task.id}>{task.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
