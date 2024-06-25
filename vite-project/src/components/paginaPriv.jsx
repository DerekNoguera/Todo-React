import { Navigate } from "react-router-dom";
const PaginaPriv = ({children}) => { // funcion que va a validar si usuario de localStorage existe
    const usuario = localStorage.getItem("token")
    if (!usuario) {
        // si es diferente, osea, si no existe te dirige a error
        return <Navigate to={"/error"}/>
    }
    return children
};

export default PaginaPriv