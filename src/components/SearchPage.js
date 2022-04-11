import React, {useEffect, useState} from 'react'
import { useLocation, useHistory } from "react-router-dom";
import {searchTasks} from "../actions/task"
import RouterPaths from '../components/RouterPaths'

const SearchPage = () => {
    const {search} = useLocation();
    const [term, setTerm] = useState();
    const [results, setResults] = useState([]);
    const history = useHistory();



    useEffect( async() => {
        const query = new URLSearchParams(search)
        console.log(query.get('term'));
        setTerm(query.get('term'));

        const results = await  searchTasks({search_term:query.get('term')});
        setResults(results);
        console.log(results)
    
    }, [search])
    
    const handleTaskClick = (task) =>{
        history.push(RouterPaths().TaskForm.urlPathText({space_id:task.workspace._id,project_id:task.project._id, task_id:task._id}))
    }

    const handleProjectClick = (task)=>{
        history.push(RouterPaths().TaskView.urlPathText({space_id:task.workspace._id,project_id:task.project._id}))
    }
    const handleSpaceClick = (task)=>{
        history.push(RouterPaths().ProjectMenu.urlPathText({space_id:task.workspace._id,project_id:task.project._id, task_id:task._id}))
    }

    
    

  return (
    <div>
        <h4>Task Search Results for {term} </h4>
        <div className='row border-bottom mx-auto'>
            <div className='col-3'>Task Name</div>
            <div className='col-3'> Status</div>
            <div className='col-3'> Project</div>
            <div className='col-3'>Space</div>
        </div>
        {
            results.map((task)=>(
                <div className='row py-3 border-bottom mx-auto'>
                    <div className='col-3'>
                        <button onClick={()=>(handleTaskClick(task))}>{task.name}</button>   
                    </div>
                    <div className='col-3'>
                       <span className='p-2 border rounded' style={{backgroundColor:task.status.color, color:'white'}}> {task.status.status}</span> 
                    </div>
                    <div className='col-3'>
                        <button onClick={()=>(handleProjectClick(task))}>{task.project.name}</button> 
                    
                    </div>
                    <div className='col-3'>
                        <button onClick={()=>(handleSpaceClick(task))}>{task.workspace.name}</button> 
                    </div>
                </div>
            ))
        }

    </div>
  )
}


export default SearchPage