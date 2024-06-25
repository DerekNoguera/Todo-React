import { useEffect, useState } from "react";
import { axiosPost, axiosGet, axiosDelete } from "../services/api";
function ContenedorTareas() {
  const [inpTarea, setInpTarea] = useState();
  const [tarea, setTarea] = useState([]);

  useEffect(() => {
    getDatos();
  }, []);//actualiza los datos de la pagina porque re actualiza el getDatos()

  const getDatos = async () => {
    let data = await axiosGet();
    setTarea(data); // setTarea va a ser igual a los datos Obtenidos de el Axios
  };

  const Tarea = async () => {
    setTimeout(() => {
      getDatos(); // cuando se agregue tarea se va a actializar de una vez
    }, 10);

        if (inpTarea !== " ") { // envia los datos de la tarea
            axiosPost(inpTarea);
        }
  };

  const KeyP = (e) => { //al que e.key sea igual a enter entonces se va a ejectur
    if (e.key === "Enter") { // la funcion de Tarea()
      Tarea();
    }
  };
  const Eliminar = (id) => {
     axiosDelete(id) 
     getDatos()
  };

  return (
    <>

      <div>
        <div>
          <input
            placeholder="Ingresa la tarea"
            className="inpuTarea"
            type="text"
            onKeyPress={KeyP}
            value={inpTarea}
            onChange={(e) => setInpTarea(e.target.value)}
          />{" "}
          <br />
          <br />
          <input type="button" onClick={Tarea} value="Ingresar la tarea" />
        </div>
        {tarea.map((todo, index) => (
          <li key={index}>
            {todo.tarea}{" "}
            <input onClick={()=> Eliminar(todo.id)} value="Eliminar" type="button"/>
            <input type="checkbox" name="" id="" />
          </li>

        ))}
      </div>
    </>
  );
}

export default ContenedorTareas;
