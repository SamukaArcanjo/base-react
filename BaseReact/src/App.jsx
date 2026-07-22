import React, { useState } from "react";
import Tasks from "./components/Task";
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar React",
      description: "Estudar react por pelo menos 2 horas ao dia",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Treinar",
      description: "Fazer 50 flexoes",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Trabalhar",
      description: "Continuar o projeto que estava fazendo semana passada",
      isCompleted: false,
    },
  ]);

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
