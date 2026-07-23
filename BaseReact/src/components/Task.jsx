import { ChevronRightIcon, Trash } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Tasks({ tasks, taskCompleted, deleteTask }) {
  const navigate = useNavigate();

  function onSeeDetails(task) {
    navigate(
      `/details?title=${encodeURIComponent(task.title)}&description=${encodeURIComponent(task.description)}`,
    );
  }

  return (
    <ul className="flex flex-col gap-3 bg-[#ffffff] p-6 rounded-md shadow">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          {/* Botão de TAREFA COMPLETA */}
          <button
            onClick={() => taskCompleted(task.id)}
            className={`w-full text-[#fcfcfc] text-2xl rounded-md p-2 transition-colors duration-300 ${task.isCompleted ? "line-through bg-[#1b662f]" : "bg-[#080825]"}`}
          >
            {task.title}
          </button>

          {/* Botão de Ver Detalhes */}
          <button
            onClick={() => onSeeDetails(task)}
            className={`rounded-md p-2 text-[#fdfdfd] ${task.isCompleted ? "bg-[#1b662f]" : "bg-[#080825]"}`}
          >
            <ChevronRightIcon />
          </button>

          {/* Botão de Excluir TAREFA */}
          <button
            onClick={() => deleteTask(task.id)}
            className={`rounded-md p-2 text-[#fdfdfd] ${task.isCompleted ? "bg-[#1b662f]" : "bg-[#080825]"}`}
          >
            <Trash />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
