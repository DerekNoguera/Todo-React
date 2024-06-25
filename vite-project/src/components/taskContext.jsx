import { createContext, useContext, useReducer } from 'react';

// Crear contextos para tareas y su dispatch
const TasksContext = createContext(null);
const TasksDispatchContext = createContext(null);

 function TasksProvider({ children }) {
  const [tasks, dispatch] = useReducer(tasksReducer, []); // Estado inicial como arreglo vacío

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}

// Custom hooks para usar los contextos
export function useTasks() {
  return useContext(TasksContext);
}

export function useTasksDispatch() {
  return useContext(TasksDispatchContext);
}

// Reducer para manejar las acciones de las tareas
function tasksReducer(tasks, action) {
  switch (action.type) {
    case 'Agregar Tarea':
      return [...tasks, { id: action.id, text: action.text, done: false }];

    case 'Cambiar Tarea':
      return tasks.map(t => (t.id === action.task.id ? action.task : t));

    case 'Eliminar Tarea':
      return tasks.filter(t => t.id !== action.id);

    default:
      throw new Error('Acción desconocida: ' + action.type);
  }
}
export default TasksProvider