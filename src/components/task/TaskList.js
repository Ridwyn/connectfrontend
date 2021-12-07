import React from 'react'
import TaskItem from './TaskItem'

const TaskList = ({tasks}) => {
    return (
        <>
             {tasks.map((task)=>{
                    return <TaskItem 
                    key={task._id} 
                    task={task} 
                    ></TaskItem>
                })}  
            
        </>
    )
}

export default TaskList
