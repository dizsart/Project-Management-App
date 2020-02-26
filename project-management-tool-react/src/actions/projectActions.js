import axios from "axios";
import {GET_ERRORS, GET_PROJECT} from "./types";
import {GET_PROJECTS} from "./types";



export const createProject = (project, history) => async dispatch => {
    try{
        const res = await axios.post("http://localhost:9090/api/project", project)
        history.push("/dashboard");
        dispatch({
            type: GET_ERRORS,
            payload: {}
          });
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

export const getProject = (id, history) => async dispatch => {

    try{
        const res = await axios.get(`http://localhost:9090/api/project/${id}`);
        dispatch({
            type: GET_PROJECT,
            payload: res.data
        });

    }catch(err){
        alert("project with projectIdentifier: " + id + " does not exist, you will be redirected to your dash board")
        history.push("/dashboard");
    }
    
}