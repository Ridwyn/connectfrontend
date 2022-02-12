import server from '../config/index'
import axios  from 'axios';


export const saveSpaceItem = async(payload) =>{
    let res = await    axios.post(`${server}/api/space/saveForm`,payload,{headers:{authorization:localStorage.getItem('token').split('"')[1]}})
    return res.data
};
export const joinSpace = async(payload) =>{
    let res = await    axios.post(`${server}/api/space/joinSpace`,payload,{headers:{authorization:localStorage.getItem('token').split('"')[1]}})
    return res.data
};
export const leaveSpace = async(payload) =>{
    let res = await    axios.post(`${server}/api/space/leaveSpace`,payload,{headers:{authorization:localStorage.getItem('token').split('"')[1]}})
    return res.data
};
export const getSpaceList = async() =>{
    let res = await  axios.get(`${server}/api/space/getList`,{headers:{authorization:localStorage.getItem('token').split('"')[1]}})
    return res.data
};
export const getSpaceItem = async(payload) =>{
    let res = await  axios.get(`${server}/api/space/getItem/${payload._id}`,{headers:{authorization:localStorage.getItem('token').split('"')[1]}})
    return res.data
};
export const deleteSpaceItem = async(payload) =>{
    let res = await  axios.post(`${server}/api/space/deleteItem`,payload,{headers:{authorization:localStorage.getItem('token').split('"')[1]}})
    return res.data
};


