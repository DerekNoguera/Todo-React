import { useTasks } from '../components/taskContext'; // Asegúrate de tener la ruta correcta
export default function TaskList() {
  const tasks = useTasks();
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
}

function Task({ task }) {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useTasksDispatch();
  let taskContent;

  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.text}
          onChange={e => dispatch({ type: 'Cambiar Tarea', task: { ...task, text: e.target.value } })}
        />
        <button onClick={() => setIsEditing(false)}>Guardar</button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button onClick={() => setIsEditing(true)}>Editar</button>
      </>
    );
  }

  return (
    <label>
      <input
        type="checkbox"
        checked={task.done}
        onChange={e => dispatch({ type: 'Cambiar Tarea', task: { ...task, done: e.target.checked } })}
      />
      {taskContent}
      <button onClick={() => dispatch({ type: 'Eliminar Tarea', id: task.id })}>Eliminar</button>
    </label>
  );
}
