import { useState } from "react";
import { registerUser } from "../services/Api copy";
import { Link } from "react-router-dom"
const Singinc= () =>{
    const [user,SetUser] = useState();
    const [email,SetEmail] = useState()
    const [password,SetPassword] = useState()

    const perrito = async ()=>{
        try { 
          const data = await registerUser(user, email, password);
          console.log('Registration exitosa:', data);
        } catch (e) {
          console.error(e);
        }
    }
    return (
      <>
      <div>
        <h1>Registrate Aqui</h1>
      </div>
      <div>
            <input type="text" placeholder="Ingrese User" value={user} onChange={(e)=>SetUser(e.target.value)}/>
            <input type="text" placeholder="Ingrese Email" value={email} onChange={(e)=>SetEmail(e.target.value)}/>
            <input type="text" placeholder="Registra password" value={password} onChange={(e)=> SetPassword(e.target.value)}/>
            <br /><br />
            <input type="button" value="Register" onClick={perrito} /><br />
            <button><Link to='/'>Login</Link></button>
        </div>
      </>
        
    );
  }
   export default Singinc;