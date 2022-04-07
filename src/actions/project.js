import server from '../config/index'
import axios  from 'axios';


export const saveProjectItem = async(payload) =>{
    let res = await    axios.post(`${server}/api/project/saveForm`,payload,{headers:{authorization:localStorage.getItem('token').split('"')[1]}})
    return res.data
};
export const getProjectList = async(payload) =>{
    let res = await  axios.get(`${server}/api/project/getList/${payload.space_id}`,{headers:{authorization:localStorage.getItem('token').split('"')[1]}})
    return res.data
};
export const deleteProjectItem = async(payload) =>{
    let res = await  axios.post(`${server}/api/project/deleteItem/${payload._id}`,{headers:{authorization:localStorage.getItem('token').split('"')[1]}})
    return res.data
};


