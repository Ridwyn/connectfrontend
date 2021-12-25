import React from 'react'

const StatusItem = ({status,tasks}) => {
    return (
        <li className="col">
                    <div className="card text-center m-3" style={{backgroundColor: `${status.color}`,borderTop:'4px solid gray'}} >
                        <div className="text-white" >{status.status}</div>
                    </div>
                    {
                        tasks.map((task,key)=>{
                            return<div className="card m-3" >
                                <div className="card-body p-2">
                                    <p className=" card-title">{task.name}</p>
                                    <div>
                                    <span className="fw-lighter fst-italic card-subtitle mb-2 text-muted">Creator:</span>
                                    <span className="fw-lighter fst-italic card-text  ">John</span>
                                    </div>
                                    <div>
                                    <span className="fw-lighter fst-italic card-subtitle mb-2 text-muted">{(new Date (task.created_at)).toDateString()}</span>
                                    </div>
                                    
                                </div>
                            </div>
                        })
                    }
        </li>
    )
}

export default StatusItem
