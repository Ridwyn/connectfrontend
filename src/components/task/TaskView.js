import React,{useState,useEffect,useContext} from 'react'
import {useParams } from 'react-router-dom';
import { ProjectContext , httpProjectAction} from "../../context/ProjectContext"
import StatusList from '../status/StatusList';

const TaskView = () => {
    const {projectStore}= useContext(ProjectContext);
    const [statuses,setStatuses]=useState([]);
    // const [html,sethtml]=useState('<div>htllo</div>');

    useEffect(() => {
        if (projectStore.status_template) {
            setStatuses(projectStore.status_template.statuses);
        }

       
    }, [projectStore])

    const changeViewStructure =()=>{
        let data =''
        let structureBtns=document.getElementById('structureBtns')
    if (!structureBtns) {
        return
    }
    // Change the structure either list view or board view for tasks
    structureBtns.addEventListener("click",(e)=>{
        
    let structure  = document.getElementById('#structure');
    
    if(e.target.id=='boardview' && structure.classList.contains('flex-column')){
        data="flex-row"
        structure.classList.replace('flex-column',data)
    }else if(e.target.id=='listview' &&  structure.classList.contains('flex-row')){
        data="flex-column"
        structure.classList.replace('flex-row',data)
    }else{
        structure.classList.add('flex-row')
    }
    
    })
    }

    return (
        <div className="">
                    <div className="m-3" id="structureBtns" onClick={changeViewStructure}>
                    <button id="listview" className="m-2">LIST VIEW</button>
                    <button id="boardview" className="m-2">BOARD VIEW</button>
                    </div>  
                    
                             
                    <ul  id="#structure" className="structure d-flex flex-row justify-content-between overflow-auto">
                        {
                            statuses?
                            <StatusList statuses={statuses}/>   
                            :null
                        }  
                    </ul>
                        
                                                 
        </div> 
    )
}

export default TaskView
