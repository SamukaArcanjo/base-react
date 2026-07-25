import React, { useEffect, useState } from "react";
import Tasks from "./components/Task";
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("Lista de tarefas") || []),
  );

  useEffect(() => {
    // GUARDANDO TASKS EM LOCAL STORAGE
    localStorage.setItem("Lista de tarefas", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {

    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
  },[])



  // FUNCÃO TAREFA COMPLETA
  function taskCompleted(taskId) {
    const newTask = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTask);
  }

  // FUNÇÃO EXCLUIR TAREFA
  function deleteTask(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  // ADICIONAR TAREFA
  function addTaskOnClick(title, description) {
    const newTask = {
      id: tasks.length + 1,
      title,
      description,
      isCompleted: false,
    };

    setTasks([...tasks, newTask]);
  }

  return (
    <div className="bg-[#080825] h-screen w-screen flex p-6 justify-center ">
      <div className="w-[500px] space-y-4">
        <h1 className="text-4xl font-bold text-[#fff] text-center p-6">
          Gerenciador de tarefas
        </h1>

        <AddTask addTaskOnClick={addTaskOnClick} />

        <Tasks
          tasks={tasks}
          taskCompleted={taskCompleted}
          deleteTask={deleteTask}
        />
      </div>
    </div>
  );
}

export default App;
