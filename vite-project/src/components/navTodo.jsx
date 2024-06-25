import { useNavigate } from "react-router-dom";
function NavTodo() {
  const navigate = useNavigate()
  const BorrarItem = ( ) =>{
      localStorage.removeItem("token")
      setTimeout(() => {
        navigate("/")
      }, 1000);
   
  }
  return (
    <div>
      <div className="containerNav">
     <input type="button" value="Cerrar Sesion" onClick={BorrarItem} />
      </div>
      <div className="Grid-txt">
        <h1 className="tareaTxt">Tareas por hacer </h1>
        </div>
    </div>
  )
}

export default NavTodo
