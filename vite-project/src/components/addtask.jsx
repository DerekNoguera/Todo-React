import { useState, useRef } from 'react';
import { useTasksDispatch } from '../components/taskContext'; 

export default function AddTask() {
    const [text, setText] = useState('');
    const dispatch = useTasksDispatch();
    const nextIdRef = useRef(3);
  
    const nextId = () => {
      nextIdRef.current += 1;
      return nextIdRef.current;
    };
  
    return (
      <>
        <input
          placeholder="Añadir tarea"
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <button
          onClick={() => {
            setText('');
            dispatch({
              type: 'Agregar Tarea',
              id: nextId(),
              text: text,
            });
          }}
        >
          Añadir
        </button>
      </>
    );
  }
