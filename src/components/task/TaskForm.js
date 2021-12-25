import React,{useState, useRef,useContext, useEffect,useCallback} from 'react'
import { useParams } from 'react-router-dom';
import { SpaceContext , httpSpaceAction} from "../../context/SpaceContext"
import { ProjectContext,httpProjectAction} from "../../context/ProjectContext"
import JoditEditor from "jodit-react"; 
import TaskCommentForm from './TaskCommentForm';
import {newTask} from '../../actions/task'

const TaskForm = () => {
  const [formData,setFormData] = useState({});
  const [statusTemplate,setStatusTemplate] = useState({})
  const [taskFormData,setTaskFormData]= useState({});
  const editor = useRef(null);
  const [spaces,dispatchSpace]= useContext(SpaceContext);
  const {projects,setProjects,projectStore,setProjectStore}= useContext(ProjectContext);
  const {space_id,project_id} = useParams();
  useEffect (()=>{
    // console.log(projects)
    const project = projects.find(project => String(project._id)===String(project_id))
    if (project) {
      const allStatuses=[project.workspace.default_statuses,...project.workspace.custom_statuses]
      const temp =allStatuses.find(status=> String(status._id) === String(project.active_status_template))
      if (temp) {
      setStatusTemplate(temp)
      }
    }

      
    //New task Created i.e Add additional data to fields
    if (!taskFormData.created_at) {
      setTaskFormData({
        ...taskFormData,
        created_at:(new Date(Date.now() )).toISOString(),
        created_by:JSON.parse(localStorage.getItem('user'))._id,
        workspace:space_id,
        project:project_id
      })

    }

  },[projects,statusTemplate])

  
 

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
      setTaskFormData({...taskFormData,...data})
    }

  }
  const handleFormSubmit =(e)=>{
    e.preventDefault();
    console.log(taskFormData)

    newTask(taskFormData).then((res)=>{
      console.log(res)
    });
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
              <span className="fw-light">Assignees of task:</span>
              <span> Dropdown names</span>
            </div>

            <div className="p-1 col-md-4 col-sm-12">
              <span className="fw-light">Date created:</span>
              <span> {(new Date(taskFormData.created_at )).toUTCString()} </span>
            </div>

          </div> 

          <div className="task-body row">
            <form className="col-8 left" id="taskform" encType="multipart/form-data" onSubmit={handleFormSubmit}>
                <p>Tags:
                  Bug, Sprint22
                </p>

                <div className="row justify-content-between align-items-start">
                  <div className="col mb-3">
                    <label className="input-group-text fw-light" for=""> Task Name</label>
                      <input type="text" name="name" className="mb-3 w-100" value={taskFormData.name ? taskFormData.name :''} placeholder="task name"
                      onChange={changeFormData}/>
                  </div>


                  <div className="col mb-3">
                      <label className="input-group-text fw-light" for=""> Due date:</label>
                      <input className="w-100" type="datetime-local" name="due_date" value={taskFormData.due_date ? taskFormData.due_date :''} onChange={changeFormData} />
                   </div>

                </div>
                <div className="row justify-content-between align-items-start">
                    <div className="col mb-3">
                      <label className="input-group-text fw-light" for=""> Select Members to Assign:</label>
                      <select className="form-select"  id="" name="assignees" size="3" multiple onChange={changeFormData}>             
                          <option value="ASSIGNEES_NAMES" >ASSIGNEES_NAMES</option>
                          <option value="ASSIGNEES_NAMES" >ASSIGNEES_NAMES_5</option>
                          <option value="ASSIGNEES_NAMES" >ASSIGNEES_NAMES_7</option>
                      </select> 
                    </div>

                  

                    <div className="col mb-3">
                      <label className="input-group-text fw-light text-capitalize" for="inputGroupSelect01"> {statusTemplate? statusTemplate.name :''}</label>
                      <select className="custom-select" id="inputGroupSelect01" name="status" onChange={changeFormData}>
                        {
                          statusTemplate.statuses?
                          statusTemplate.statuses.map((status,index)=>(
                            <option value={JSON.stringify(status)} style={{color:status.color}}>
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

            {/* COMMENT SECTIOMN */}
          <TaskCommentForm/>


          </div>

        </section>       
        
        </>
    )}



export default TaskForm