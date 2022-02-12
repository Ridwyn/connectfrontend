import React from 'react'
import TaskItem from './TaskItem'

const TaskList = ({status,tasks}) => {
    return (
        <>
        <li className="col">
            <div className="card text-center m-3" style={{backgroundColor: `${status.color}`,borderTop:'4px solid gray'}} >
                <div className="text-white" >{status.status}</div>
            </div>
            {
                tasks.map((task,index)=>{
                    return<TaskItem task={task} key={index}/>
                    })
            }
        </li>
    
            
        </>
    )
}

export default TaskList
