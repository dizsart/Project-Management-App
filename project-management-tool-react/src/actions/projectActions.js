import axios from "axios";
import {GET_ERRORS} from "./types";
import {GET_PROJECTS} from "./types";



export const createProject = (project, history) => async dispatch => {
    try{
        const res = await axios.post("http://localhost:9090/api/project", project)
        history.push("/dashboard");
    }catch (err) {
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        });
    }
}

export const getProjects = () => async dispatch => {
    const res = await axios.get("http://localhost:9090/api/project/all")
    dispatch({
        type: GET_PROJECTS,
        payload: res.data
    });
}