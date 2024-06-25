// import NavTodo from "../components/navTodo"
// import ContenedorTareas from "../components/contenedorTareas"
import AddTask from "../components/addtask"
import TasksProvider from "../components/taskContext"
// import TaskList from "../components/listaTaks"

function Todo() {
  return (
    <div>
     {/* <NavTodo/> */}
     {/* <ContenedorTareas/> */}
     <TasksProvider/>
      <AddTask/>
      {/* <TaskList/> */}
  
    </div>
  )
}

export default Todo
