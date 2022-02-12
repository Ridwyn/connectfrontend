import React from 'react'
import TaskItem from './TaskItem'
import TaskList from './TaskList'

const TaskStatusFilter = ({statuses,tasks}) => {
    return (
        <>
        {
             statuses.map((status,index)=>{
                //  Filter task based on their status 
                const filteredTasks=tasks.filter((task)=>{
                    if (task.status) {
                        return String(task.status.status)=== String(status.status)
                    }
                }) 
                return<TaskList status={status} tasks={filteredTasks} key={index}/>
            })
        }
            
        </>
    )
}

export default TaskStatusFilter
