import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/login";
import Singin from "../pages/singin";
import Todo from "../pages/todo";
import PaginaError from "../components/paginaError";
import PaginaPriv from "../components/paginaPriv";


// import { Auth0Provider } from '@auth0/auth0-react';
const Rutas = () => {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Singin />} />
          <Route path="/error" element={<PaginaError/>}/>
          <Route path="/*" element={<PaginaError/>}/>
          <Route path="/todo" element={<PaginaPriv>
            <Todo/>
            </PaginaPriv>}/>
        </Routes>
      </Router>
    </>
  );
};

export default Rutas;
