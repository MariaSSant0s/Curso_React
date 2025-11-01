import { ChevronRightIcon, DeleteIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Tasks({ tasks, onTaskClick, onTrashClick }) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    /* navigate(`/task?title=${task.title}&description=${task.description}`); */
    navigate(`/task?${query.toString()}`);
  }
  return (
    <ul className="space-y-4 p-6 bg-slate-100 rounded-md shadow-amber-50">
      {" "}
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => onTaskClick(task.id)}
            className={`w-full bg-slate-400 text-white p-2 rounded-md text-left ${
              task.isCompleted && "line-through"
            }`}
          >
            {task.title}
          </button>

          <Button onClick={() => onSeeDetailsClick(task)}>
            <ChevronRightIcon />
          </Button>

          <Button onClick={() => onTrashClick(task.id)}>
            <TrashIcon />
          </Button>
        </li>
      ))}
    </ul>
    /* <h1>{tasks[0].title}</h1> */
  );
}

export default Tasks;
