import { useState,useEffect } from 'react'
import {Link,useHistory} from 'react-router-dom'
import Search from './Search'
import Logout from './Logout'
import RouterPaths from './RouterPaths'


import {getAssignedTasks} from '../actions/task'

import {ACCOUNT_DATA, accountAction} from '../actions/account'

const NavLoggedIn = () => {
    const [user, setUser] = useState({name:''});
    const history = useHistory();
    const [assignedTasks, setAssignedTasks] = useState();


    useEffect(async ()=>{
        accountAction({type:ACCOUNT_DATA,payload:{}}).then(data=>{
            if(!data){
                history.push('/login')
            }
            setUser(data)
        })

       const res= await getAssignedTasks();
       setAssignedTasks(res)
    },[])

    const handleTaskClick =(task)=>{
        history.push(RouterPaths().TaskForm.urlPathText({space_id:task.workspace,project_id:task.project,task_id:task._id}));
        history.go(0)
    }



    return (
        <div>

        <header className="navbar navbar-expand-sm ">
        <div className="container-fluid">
            <a href="/dashboard" className="navbar-brand" style={{'backgroundColor': 'inherit'}}><img  src="/images/connect_logo.svg" width="50"  className="img-fluid" alt=""/></a>  
                    <span>{user.name}</span>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span><i className="fas fa-ellipsis-h"></i></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <Search/>
                <ul className="navbar-nav   mb-2 mb-lg-0 align-items-center mx-auto">
                    {/* <li className="nav-item m-1">
                        <a href="/#" className="p-1">Favourites</a>
                    </li> */}
                            <li className="nav-item m-1  dropdown">
                                    <a className="dropdown-btn p-1" href="/#" id="navbarDropdown"  data-bs-toggle="dropdown" aria-expanded="false">
                                        Assigned task
                                        <i class="fa-solid fa-caret-down px-1"></i>
                                    </a>
                                   <ul className='dropdown-content'>
                                        {assignedTasks?
                                            assignedTasks.map((task)=>(
                                                
                                                <button className='w-100' onClick={()=>handleTaskClick(task)}>{task.name}</button>
                                                
                                            ))
                                            :''
                                        }
                                   </ul>
                                </li>

                               
                            {/* {{#if data.current_space }}
                                <li className="nav-item m-1  dropdown">
                                    <a className="nav-link dropdown-toggle p-1" href="#" id="navbarDropdown"  data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="fas fa-layer-group"> Status Templates</i>
                                    </a>
                                    <ul className="dropdown-menu p-2" aria-labelledby="navbarDropdown">
                                        {{#each data.current_space.all_statuses}}
                                        <li className="my-2 d-flex flex-row justify-content-between">
                                            <a className="button d-inline m-1 p-1 align-self-center" href="#">{{this.name}}</a>
                                            {{#ifnoteq this.name 'basic'}}
                                            <a className="button d-inline m-1 p-1 align-self-center" href="/status/form?_id={{this._id}}"><i className="fas fa-pen"></i></a>
                                            <a className="button d-inline m-1 p-1 align-self-center" href="#"><i className="fas fa-times text-danger"></i></a>
                                            {{/ifnoteq}}
                                        </li>
                                        {{/each}}
                                        <li className="text-center">
                                            <a href="/status/form?space_id={{data.current_space._id}}" className=" p-1">+ Status</a>
                                        </li>
                                    </ul>
                                </li>
                            {{/if}}
                            {{#if data.current_project }} 
                                <li className="nav-item m-1">
                                    <a href="/task/form?space_id={{data.current_project.workspace}}&project_id={{data.current_project._id}}" className=" p-1"><i className="fas fa-plus"> Task</i></a>
                                
                                </li>
                            {{/if}} */}
                            
                            <li className="nav-item m-1">
                                <Logout/>
                            </li>
                </ul>
            </div>
        </div>
            
        </header>

        <div>
        
        </div>
        </div>
    )
}

export default NavLoggedIn
