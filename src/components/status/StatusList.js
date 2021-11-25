import React from 'react'
import StatusItem from './StatusItem'

const StatusList = ({statuses}) => {
    return (
        <>
        {
             statuses.map((status,key)=>{
                return<StatusItem 
                key={key} 
                status={status} 
                ></StatusItem>
            })
        }
            
        </>
    )
}

export default StatusList
