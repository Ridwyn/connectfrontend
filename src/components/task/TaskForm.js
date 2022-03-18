import React,{useState, useRef,useContext, useEffect,useCallback} from 'react'
import { useParams, useHistory } from 'react-router-dom';
import RouterPaths from '../RouterPaths';
import { SpaceContext , httpSpaceAction} from "../../context/SpaceContext"
import { ProjectContext,httpProjectAction} from "../../context/ProjectContext"
import JoditEditor from "jodit-react"; 
import TaskCommentForm from './TaskCommentForm';
import {saveTask,getTaskItem,sseTaskUpdate} from '../../actions/task'

const TaskForm = () => {
  const [formData,setFormData] = useState({});
  const [statusTemplate,setStatusTemplate] = useState({})
  const [taskFormData,setTaskFormData]= useState({});
  const [spaceMembers,setSpaceMembers]= useState([]);
  const editor = useRef(null);
  const [spaces,dispatchSpace]= useContext(SpaceContext);
  const {projects,dispatchProject,projectStore,setProjectStore}= useContext(ProjectContext);
  const {space_id,project_id,task_id} = useParams();
  const history = useHistory();

  useEffect (()=>{
    
    const space = spaces.find(space => String(space._id === String(space_id)))
    const project = projects.find(project => String(project._id)===String(project_id))

    if (project) {
      const allStatuses=[project.workspace.default_statuses,...project.workspace.custom_statuses]
      const temp =allStatuses.find(status=> String(status._id) === String(project.active_status_template))
      if (temp) {
      setStatusTemplate(temp)
      }
    }

    if (space) {
      setSpaceMembers(space.members)
    }

    
    // Check if task is new or needs update
    if (task_id!=='undefined') {
      getTaskItem({_id:task_id}).then((data=>{
        setTaskFormData({
          ...data,
          updated_by:JSON.parse(localStorage.getItem('user'))._id,
          updated_at:(new Date(Date.now() )).toISOString()
        })
      }))
    }else{
      setTaskFormData({
        // ...taskFormData,
        created_at:(new Date(Date.now() )).toISOString(),
        created_by:JSON.parse(localStorage.getItem('user'))._id,
        workspace:space_id,
        project:project_id,
        status:statusTemplate.statuses?statusTemplate.statuses[0]: ''
      })
    }


    // console.log(sseTaskUpdate({task_id:task_id,start:'yes'}));
    
    // WHEN COMPONENT UNMOUNTS
    return()=>{
      // sseTaskUpdate({task_id:'',start:''})
    }

  },[projects,statusTemplate,getTaskItem,dispatchProject,spaceMembers,setSpaceMembers])

  
 

  const config = {
		readonly: false, // all options from https://xdsoft.net/jodit/doc/
    placeholder: 'Start typing task here....',
    name:'editor'
	}

  const changeFormData = (e)=>{

    // console.log(e);
    let key = e.target ? e.target.name: undefined ;
    let data ={};
    if (key ==='name') {
      data[key]=e.target.value
      setTaskFormData({...taskFormData,...data})
    }
    if (key ==='due_date') {
      data[key]=e.target.value
      setTaskFormData({...taskFormData,...data})
    }
    if (key ==='status') {
      data[key]=JSON.parse(e.target.value)
      const newTaskFormData={...taskFormData,...data}
      setTaskFormData(newTaskFormData);
    }
    if (key ==='assignees') {
      let selectedOpts=e.target.selectedOptions
      const values= Array.from(selectedOpts).map(({ value }) => value);
      data[key]=Array.from(new Set([...taskFormData.assignees.map(assignee=>{return assignee._id}), ...values]));
      setTaskFormData({...taskFormData,...data})
    }

  }
  const handleFormSubmit =(e)=>{
    e.preventDefault();

   saveTask(taskFormData).then((data)=>{console.log(data)})
   history.push(RouterPaths().TaskForm.urlPathText({space_id:space_id,project_id:project_id,task_id:task_id}))
  }

  const removeAssignee = (assignee_id) =>{
    // Filter the assignee and transform the taskform data
    let data={assignees:taskFormData.assignees.filter(assignee=>(String(assignee._id ))!= String(assignee_id))}
    setTaskFormData({...taskFormData,...data})
    saveTask(taskFormData).then((data)=>{console.log(data)})
    history.push(RouterPaths().TaskForm.urlPathText({space_id:space_id,project_id:project_id,task_id:task_id}))
 
  }


    return (
        <>
        <section className="task col my-4 p-2 ">
          <div className="task-header row justify-content-between">
            <div className="p-1 col">
              <span className="fw-light">Status:</span>
              {
                taskFormData.status ?
                <span style={{color:taskFormData.status.color}}> {taskFormData.status.status}</span>
                :''
              }
            </div>

            <div className="p-1 col">
              <div className="dropdown mx-2 ">
                <button className="dropbtn fw-light ">Assignees of task <i className="fas fa-caret-down"></i></button>
                <ul className="dropdown-content w-100 ">
                  {
                    taskFormData.assignees ?
                    (taskFormData.assignees.map((assignee,index)=>
                    (<li className=" fw-light" key={index}>
                      {assignee.name} 
                    <i className="fas fa-user-times text-danger float-right p-1" onClick={()=>{removeAssignee(assignee._id)}} role="button"></i>
                    </li>)))
                    :(<li className="fw-light ">Assign members   </li>)

                  }
                </ul>
                </div>
            </div>

            <div className="p-1 col-md-4 col-sm-12">
              <span className="fw-light">Date created:</span>
              <span> {(new Date(taskFormData.created_at )).toUTCString()} </span>
            </div>

          </div> 

          <div className="task-body row">
            <form className="col px-4" id="taskform" encType="multipart/form-data" onSubmit={handleFormSubmit}>
                <p>Tags:
                  Bug, Sprint22
                </p>

                <div className="row justify-content-between align-items-start">
                  <div className="col mb-3">
                    <label className="input-group-text fw-light" htmlFor=""> Task Name</label>
                      <input type="text" name="name" className="mb-3 w-100" value={taskFormData.name ? taskFormData.name :''} placeholder="task name"
                      onChange={changeFormData} required/>
                  </div>


                  <div className="col mb-3">
                      <label className="input-group-text fw-light" htmlFor=""> Due date:</label>
                      <input className="w-100" type="datetime-local" name="due_date" value={taskFormData.due_date ? (new Date(taskFormData.due_date)).toISOString().split('.')[0] :''} onChange={changeFormData} />
                   </div>

                </div>
                <div className="row justify-content-between align-items-start">
                    <div className="col mb-3">
                      <label className="input-group-text fw-light" htmlFor=""> Select Members to Assign:</label>
                      
                      <select className="form-select"  id="" name="assignees" size="3" multiple onChange={changeFormData}> 
                      {
                        spaceMembers?
                        spaceMembers.map((member,index)=>(
                          <option value={member._id} key={index} >
                             {member.name}
                          </option>
                        ))
                        :''

                      }           
                      </select> 
                    </div>

                  

                    <div className="col mb-3">
                      <label className="input-group-text fw-light text-capitalize" htmlFor="inputGroupSelect01"> {statusTemplate? statusTemplate.name :''}</label>
                      <select className="custom-select" id="inputGroupSelect01" name="status" onChange={changeFormData} required>
                        {
                          statusTemplate.statuses?
                          statusTemplate.statuses.map((status,index)=>(
                            <option value={JSON.stringify(status)} style={{color:status.color}} key={index}>
                               {status.status}
                            </option>
                          ))
                          :''
                        }
                          
                      </select> 
                    </div>

                    <div className="col-12 mb-3">
                      <JoditEditor
                              ref={editor}
                              value={taskFormData.description ? taskFormData.description :''}
                              config={config}
                              tabIndex={1} // tabIndex of textarea
                              onBlur={(content)=>{ 
                                setTaskFormData({...taskFormData,description:content})
                              }} // preferred to use only this option to update the content for performance reasons
                              // onChange={(content)=>{setTaskFormData({...taskFormData,description:content})}}
                          />
                    </div>
                </div>


           

              <div className="my-3">
                <label className="fw-light">Attachments/files: </label>
                <input multiple="" type="file" name="attachments"/>
              </div>
               <input 
               type="submit" 
                value="Save"/>

            </form>


          </div>

        </section>       
        
        </>
    )}



export default TaskForm