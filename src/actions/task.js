import server from '../config/index'
import axios  from 'axios';



export const saveTask = async(payload) =>{
    let res = await    axios.post(`${server}/api/task/saveTask`,payload,{headers:{authorization:localStorage.getItem('token').split('"')[1]}})
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
export const searchTasks = async(payload) =>{
    let res = await  axios.get(`${server}/api/task/search?term=${payload.search_term}`,{headers:{authorization:localStorage.getItem('token').split('"')[1]}})
    return res.data
};
export const deleteTaskItem = async(payload) =>{
    let res = await  axios.post(`${server}/api/task/deleteItem/${payload._id}`,{headers:{authorization:localStorage.getItem('token').split('"')[1]}})
    return res.data
};



// DO SSE FETCHING HERE
export const sseTaskUpdate = async(payload) =>{
    if (!window.EventSource) {
        console.log("Your browser doesn't support SSE");
    }

    var source = new EventSource(`${server}/api/sse/task/getupdate/${payload.task_id}`)
    console.log(payload);

    source.onmessage = (e)=>{
        console.log(e.data);
    }

    source.onopen = (e)=>{
        console.log(e);
        console.log('connection opened');
    }
   

    if (payload.start=='') {
        console.log('close');
        source.close()
    }

    source.onerror = (e)=>{
        if (e.eventPhase == EventSource.CLOSED){
            source.close()
        }
        if (e.target.readyState == EventSource.CLOSED) {
        // id_state.innerHTML = "Disconnected"
        console.log('closed');
        }
         else if (e.target.readyState == EventSource.CONNECTING) {
        // id_state.innerHTML = "Connecting..."
        console.log('connecting....');
        }
    }




    // let res = await  axios.post(`${server}/api/task/deleteItem`,payload,{headers:{authorization:localStorage.getItem('token').split('"')[1]}})
    // return res.data
};

// sseTaskUpdate()


