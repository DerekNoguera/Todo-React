import { useState } from "react";
import { loginUser } from "../services/Api copy";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Loginc = () => {
  const [user, Cambiar1] = useState(); //se definen los valores de cambiar1 y cambiar2 como onChanmge
  const [password, Cambiar2] = useState(); //en una constante se pone el value de el input y el setvalue es para que lo setee

  const Navegar = useNavigate();
  const perrito = async () => {
    //ejecuta la funcion perrito de el boton'
    let inicioExitoso = await loginUser();
    inicioExitoso.forEach((e) => {
      if (user === e.user && password === e.password) {
        localStorage.setItem("token", true);
        alert("Inicio Exitoso")
        setTimeout(() => {
             Navegar("/todo");
        }, 1000);
       
      } else {
        return false;
      }
    });
  };
  return (
    <>
      <div id="nav-txt">
        <h3 id="inicio">Inicio</h3>
        <h3 id="sesion">Iniciar Sesion</h3>
      </div>
      <div id="grid-inp">
        <input
          id="inp1"
          type="text"
          placeholder="User"
          value={user}
          onChange={(e) => Cambiar1(e.target.value)}
        />
        {/* // en el onChnage cambiar1 se llama y se ejecuta que a setValue, que setvalue es lo que se va a setear del input // setValue(e.target.value); */}
        <input
          id="inp2"
          type="text"
          name="name"
          placeholder="password"
          value={password}
          onChange={(e) => Cambiar2(e.target.value)}
        />
        <br />
        <br />
        <input
          id="btnLogin"
          type="button"
          value="Iniciar Sesion"
          onClick={perrito} // funcion para el boton
        />
        <br />
        <button>
          <Link to="/register">Register</Link>
        </button>
      </div>
    </>
  );
};
export default Loginc;
