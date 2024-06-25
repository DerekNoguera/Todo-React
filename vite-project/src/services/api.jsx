import axios from "axios";
// import { response } from 'express';
export const axiosGet = async () => {
    const response = await axios.get("http://localhost:3000/api/todo/", {
    });
    return response.data;

};
export const axiosPost = async (inpTarea) => {
        const response = await axios.post("http://localhost:3000/api/todo/", {
            tarea: inpTarea,
        });
        return response.data;
};
export const axiosDelete = async (id) => {
    const response = await axios.delete(`http://localhost:3000/api/todo/${id}`, {   
    });
    return response.data;
};
