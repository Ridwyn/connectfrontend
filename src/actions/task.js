import server from '../config/index'
import axios  from 'axios';


export const newTask = async(payload) =>{
    let res = await    axios.post(`${server}/api/task/newTask`,payload,{headers:{authorization:localStorage.getItem('token').split('"')[1]}})
    return res.data
};
export const getTaskList = async(payload) =>{
    let res = await  axios.get(`${server}/api/task/getList/${payload.project_id}`,{headers:{authorization:localStorage.getItem('token').split('"')[1]}})
    return res.data
};
export const getTaskItem = async(payload) =>{
    let res = await  axios.get(`${server}/api/task/getItem/${payload._id}`,{headers:{authorization:localStorage.getItem('token').split('"')[1]}})
    return res.data
};
export const deleteTaskItem = async(payload) =>{
    let res = await  axios.post(`${server}/api/task/deleteItem`,payload,{headers:{authorization:localStorage.getItem('token').split('"')[1]}})
    return res.data
};


