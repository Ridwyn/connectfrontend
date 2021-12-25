import React from 'react'
import StatusItem from './StatusItem'

const StatusList = ({statuses,tasks}) => {
    return (
        <>
        {
             statuses.map((status,key)=>{
                const filteredTasks=tasks.filter((task)=>{
                    if (task.status) {
                        return String(task.status.status)=== String(status.status)
                    }
                })
                return<StatusItem 
                key={key} 
                status={status} 
                tasks={filteredTasks}
                ></StatusItem>
            })
        }
            
        </>
    )
}

export default StatusList
