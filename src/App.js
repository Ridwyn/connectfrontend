import {useState, useEffect} from 'react'
import {BrowserRouter as Router, Route,Switch } from 'react-router-dom'
import {LoginProvider} from './context/LoginContext'
import Home from './components/Home'
import About from './components/About'
import Layout from './components/Layout'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Nav_Hompage from './components/NavLoggedIn'


function App() {
  // const [showAddTask, setShowAddTask] = useState(false)
  // const[ tasks, setTasks] = useState([])

  // useEffect(() => {
  //   const getTasks= async()=>{
  //     const taskFromServer = await fetchTasks();
  //     setTasks(taskFromServer)
  //   }
  //   getTasks()
  // },[])

  // // Fetch tasks from server
  // const fetchTasks = async ()=>{
  //   const res = await fetch('http://localhost:5050/tasks')
  //   const data  = await res.json()
  //   return data
  // }
  // // Fetch task from server
  // const fetchTask = async (id)=>{
  //   const res = await fetch(`http://localhost:5050/tasks/${id}`)
  //   const data  = await res.json()
  //   return data
  // }

// // Add Task
// const addTask= async (task)=>{
//   const res = await fetch('http://localhost:5050/tasks',{
//     method:'POST',
//     headers:{'Content-type':'application/json'},
//     body: JSON.stringify(task),
//   })

//   // const id = Math.floor(Math.random()*10000)+1
//   const newTask = await res.json()
//   setTasks([...tasks, newTask])
// }

// // Delete Task
// const deleteTask=async (id)=>{
//   await fetch(`http://localhost:5050/tasks/${id}`,{method:'DELETE'})
//   setTasks(tasks.filter((task)=>
//     task.id !==id
//   ))
// }

// // Toggle Task Reminder
// const toggleReminder = async(id)=>{
//   const taskToToggle = await fetchTask(id)
//   const updatedTask ={...taskToToggle,reminder:!taskToToggle.reminder}

//   const res = await fetch(`http://localhost:5050/tasks/${id}`,{
//     method:'PUT',
//     headers:{
//       'Content-type': 'application/json'
//     },
//     body:JSON.stringify(updatedTask)
//   })

//   const data = await res.json()

//   setTasks(tasks.map((task)=> 
//   task.id===id ? 
//   {...task, reminder:data.reminder} :task))
// }

  return (
    <Router>
      <LoginProvider>
        <Layout>
          <Switch >
            <Route path="/" exact component={Home}/>
            <Route path ="/about" component={About}/>
            <Route path ="/login" component={Login}/>
            <Route path ="/dashboard" component={Dashboard}/>
          </Switch>
        </Layout>
      </LoginProvider>
    </Router>

  );
}

export default App;


// Continue with storing cookie