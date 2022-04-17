import server,{socketuri} from '../config/index'
import axios  from 'axios';



export const wsInit = (payload) =>{

      // WEBSOCKET STUUF HERE
        let ws = new WebSocket(`${socketuri}/ws/task?token=${localStorage.getItem('token').split('"')[1]}`);
        // console.log(ws) 
        // ALWAYS STRINGIFY DATA
        // ws.onmessage=(event)=>{
        // let res = JSON.parse(event.data)
        // console.log(res)
        // if (res.action ==='ASSIGNEE_ADD') {
        //     console.log(res.data);
        //     console.log('add')
        // }
        // if (res.action ==='ASSIGNEE_REMOVE') {
        //     console.log(res.data)
        //     console.log('removed')
        // }
        // if (res.action ==='TASK_UPDATE') {
        // }
        // }
        ws.onopen = (e)=>{
        console.log(' websocket is open')
        
        
        }

        ws.onclose= ()=>{
        console.log('wesocket ios closed')
        ws = new WebSocket(`${socketuri}/ws/task?token=${localStorage.getItem('token').split('"')[1]}`);
        }

        ws.onerror =()=>{
        console.log('wesocket error')
        ws = new WebSocket(`${socketuri}/ws/task?token=${localStorage.getItem('token').split('"')[1]}`);
        }

        function startConn(){
          let interval =null
          ws = new WebSocket(`${socketuri}/ws/task?token=${localStorage.getItem('token').split('"')[1]}`);
          if (ws.readyState===1) {
            clearInterval(interval);
            return true
          }else{
           interval= setInterval(()=>{
              ws = new WebSocket(`${socketuri}/ws/task?token=${localStorage.getItem('token').split('"')[1]}`);
            },4000)
          }
        }
        ws.connect=()=>{
         return startConn()
        }

    return ws
};

export const ws = wsInit();