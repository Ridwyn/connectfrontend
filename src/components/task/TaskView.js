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
        //   let str=  statuses.map((status)=>{
        //         return`
        //         <li class="col">
        //             <div class="card text-center m-3" style="background-color: ${status.color}; border-top:4px solid gray">
        //                 <div class="text-white" >${status.status}</div>
        //             </div>
        //         </li>

        //         `
        //     }).join('')
        //     sethtml(str);
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
        <div className="task-view">
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
                        
                       
                    
{/* 
                            {{#each data.current_project.active_status_template.statuses}}
    <li class="col"  >
        <div class="card text-center m-3" style="background-color: {{this.color}}; border-top:4px solid gray">
            <div >{{this.status}}</div>
            </div>

            <ul class="list-group m-3">   
                {{#each this.tasks}}
                    <li class="my-1 list-group-item d-flex flex-row justify-content-between align-items-center ">
                        <span><a href="/task/form?_id={{this._id}}" class="text">{{this.name}}</a></span> 
                        <div class="dropdown">
                                <a class="button  p-1" href="#" id="navbarDropdown"  data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="fas fa-ellipsis-h"></i>
                                </a>
                                <ul class="dropdown-menu p-2" aria-labelledby="navbarDropdown" style="min-width:auto;inset: 0px 0px auto auto !important;right:0px!important;">
                                <li class="my-2 d-flex flex-column">
                                        <a href="/task/form?_id={{this._id}}" class="button m-1">
                                        <i class="fas fa-pen"></i>
                                        </a>
                                    <a href="/task/delete?_id={{this._id}}" class="button m-1"><i class="fas fa-times text-danger"></i></a>  
                                </li>
                                </ul>
                        </div>
                    </li>
                {{/each}}
            </ul>
        </li>
    {{/each}} */}
                          
        </div> 
    )
}

export default TaskView
