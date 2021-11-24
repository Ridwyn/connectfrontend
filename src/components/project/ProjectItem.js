import React,{useEffect,useState} from 'react'
import {Link} from 'react-router-dom'



const ProjectItem = ({project}) => {
    const [projectState,setProjectState]=useState({...project,status_template:{name:''}})

    useEffect(() => {
        let statuses = [
            ...projectState.workspace.custom_statuses,
            projectState.workspace.default_statuses,
        ]
        
        let mappedStatuses={};
        for (let i = 0; i < statuses.length; i++) {
            mappedStatuses[statuses[i]._id]=statuses[i]
        }

        // Adding the project status to State
        setProjectState({...projectState,status_template:mappedStatuses[projectState.active_status_template]})  

    }, [setProjectState])


    return (
        <>
            {projectState?
                <div className="m-2">
                    <Link to ={`/dashboard/space/${projectState.workspace._id}/project/${projectState._id}`} className="button m-1 text-decoration-none">
                        {projectState.name}
                    </Link>
                    <span>{projectState.status_template.name }</span>
                </div>
            :null
            }

            
        </>
    )
}

export default ProjectItem
