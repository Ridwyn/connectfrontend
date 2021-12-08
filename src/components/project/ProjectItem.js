import React,{useEffect,useState,useContext} from 'react'
import {Link,useHistory} from 'react-router-dom'
import { ProjectContext , httpProjectAction} from "../../context/ProjectContext"
import RouterPaths from '../RouterPaths'



const ProjectItem = ({project}) => {
    const history = useHistory();
    const [projectState,setProjectState]=useState({...project,status_template:{name:''}})
    const {projects,dispatchProject,projectStore,setProjectStore}= useContext(ProjectContext);

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
        
        // updateProjectStore(projectState);
    }, [setProjectState])

    const handleProjectClick =()=>{
        // console.log(projectState)
        history.push(RouterPaths().TaskMenu.urlPathText({space_id:projectState.workspace._id,project_id:projectState._id}))
           
        setProjectStore(projectState);
    }

    const handleProjectNewTask =()=>{
        history.push(RouterPaths().TaskForm.urlPathText({space_id:projectState.workspace._id,project_id:projectState._id}))

    }


    return (
        <>
            {projectState?
                <div className="">
                    <button onClick={handleProjectClick} className="button m-1">
                        {projectState.name}
                    </button>
                    <button onClick={handleProjectNewTask} className="button m-1">
                        + task
                    </button>
                    <span>{projectState.status_template.name }</span>
                </div>
            :null
            }

            
        </>
    )
}

export default ProjectItem
