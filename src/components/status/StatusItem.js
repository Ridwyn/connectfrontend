import React from 'react'

const StatusItem = ({status}) => {
    return (
        <li className="col">
                    <div className="card text-center m-3" style={{backgroundColor: `${status.color}`,borderTop:'4px solid gray'}} >
                        <div className="text-white" >{status.status}</div>
                    </div>
        </li>
    )
}

export default StatusItem
