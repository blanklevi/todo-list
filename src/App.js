import React, { useState } from "react";
import "./App.css";

import Input from "./components/Input.js";
import Task from "./components/Task.js";

function App() {
  const [list, setList] = useState([]);
  return (
    <div className="App container" style={{ width: 800 }}>
      {list.map((task, i) => (
        <Task task={task} setList={setList} index={i} list={list} />
      ))}
      <Input list={list} setList={setList} />
    </div>
  );
}

export default App;
