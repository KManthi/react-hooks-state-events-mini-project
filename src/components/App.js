import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });


function App() {
  const [filteredTasks, setFilteredTasks] = useState(TASKS);

  const handleFilterChange = (category) => {
    if (category === 'All') {
      setFilteredTasks(TASKS)
    } else {
      const filteredTasks = TASKS.filter((task) => task.category === category);
      setFilteredTasks(filteredTasks)
    }
  };

  const handleTaskFormSubmit = (task) => {
    setFilteredTasks([...filteredTasks, task]);
  };

  const handleTaskDelete = (taskId, categoryId) => {
    const updatedTasks = filteredTasks.filter(
      (task) => task.id !== taskId || task.category !== categoryId
    );
    setFilteredTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onFilterChange={handleFilterChange} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleTaskFormSubmit} />
      <TaskList tasks={filteredTasks} handleDelete={handleTaskDelete} />
    </div>
  );
}

export default App;
