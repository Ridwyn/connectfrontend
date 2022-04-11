import React,{useEffect} from 'react'
import {Link,useHistory,useParams} from 'react-router-dom'
import RouterPaths from '../../components/RouterPaths'

const TaskItem = ({task}) => {
    const history = useHistory();
    const handleTaskClick = ()=>{
        history.push(RouterPaths().TaskForm.urlPathText({space_id:task.workspace,project_id:task.project,task_id:task._id}))

    }
    useEffect(() => {
    //   console.log(task);
    
      return () => {
        
      }
    }, [])
    


    return (

        <button className="card m-3 mx-auto" onClick={handleTaskClick}>
            <div className="card-body p-2">
                <p className=" card-title">{task.name}</p>
                <div>
                <span className="fw-lighter fst-italic card-subtitle mb-2 text-muted">Creator:</span>
                <span className="fw-lighter fst-italic card-text  ">{task.created_by.name}</span>
                </div>
                <div>
                <span className="fw-lighter fst-italic card-subtitle mb-2 text-muted">{(new Date (task.created_at)).toDateString()}</span>
                </div>
                
            </div>
        </button>


    )
}

export default TaskItem
