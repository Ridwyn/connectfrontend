import React,{useState, useRef,useContext} from 'react'
import { SpaceContext , httpSpaceAction} from "../../context/SpaceContext"
import JoditEditor from "jodit-react"; 
import TaskCommentForm from './TaskCommentForm';

const TaskForm = () => {
  const [formData,setFormData] = useState({});
  const [spaces,dispatchSpace]= useContext(SpaceContext);

  const editor = useRef(null);
	const [content, setContent] = useState('');
  const [taskFormData,setTaskFormData]= useState({});

  const config = {
		readonly: false, // all options from https://xdsoft.net/jodit/doc/
    placeholder: 'Start typing task here....'
	}

  const changeFormData = (e)=>{

    console.log(taskFormData.due_date);
    let key = e.target.name;
    let data ={};
    if (key ==='name') {
      data[key]=e.target.value
      setTaskFormData({...taskFormData,...data})
    }
    if (key ==='due_date') {
      data[key]=e.target.value
      setTaskFormData({...taskFormData,...data})
    }
    if (key ==='due_date') {
      data[key]=e.target.value
      setTaskFormData({...taskFormData,...data})
    }
  }


    return (
        <>
        <section className="task col my-4 p-2 ">
          <div className="task-header d-flex flex-row justify-content-between">
            <div className="p-1">
              <span className="fw-light">Status:</span>
              <span> Open</span>
            </div>

            <div className="p-1">
              <span className="fw-light">Assignees of task:</span>
              <span> Dropdown names</span>
            </div>

            <div className="p-1">
              <span className="fw-light">Date created:</span>
              <span> Tue/13/11/2021 i.e.date-local</span>
            </div>
            <div className="p-1">
              <span className="fw-light">Due created:</span>
              <span> Tue/13/11/2021 i.e.date-local</span>
            </div>

          </div> 

          <div className="task-body row">
            <form className="col-8 left" id="taskform" enctype="multipart/form-data">
                <p>Tags:
                  Bug, Sprint22
                </p>

                <div>
                    <input type="text" name="name" className="mb-3" value={taskFormData.name ? taskFormData.name :''} placeholder="name"
                    onChange={changeFormData}/>
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
                      <label className="input-group-text fw-light" for=""> Due date:</label>
                      <input className="w-100" type="datetime-local" name="due_date" value={taskFormData.due_date ? taskFormData.due_date :''} onChange={changeFormData} />
                    </div>

                    <div className="col mb-3">
                      <label className="input-group-text fw-light text-capitalize" for="inputGroupSelect01"> STATUS_TEMPLATE_NAME:</label>
                      <select className="custom-select" id="inputGroupSelect01" name="status" >
                          <option value="" >
                            STATUS_TEXT
                          </option>
                      </select> 
                    </div>

                    <div className="col mb-3">
                      <JoditEditor
                              ref={editor}
                              value={taskFormData.name ? taskFormData.name :''}
                              config={config}
                              tabIndex={1} // tabIndex of textarea
                              // onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                              onBlur={(content)=>{setTaskFormData({...taskFormData,description:content})}} // preferred to use only this option to update the content for performance reasons
                              // onChange={(content)=>{setTaskFormData({...taskFormData,description:content})}}
                          />
                    </div>
                </div>


           

              <div className="my-3">
                <label className="fw-light">Attachments/files: </label>
                <input multiple="" type="file" name="attachments"/>
              </div>
               <input type="submit" value="Save"/>

            </form>

            {/* COMMENT SECTIOMN */}
          <TaskCommentForm/>


          </div>

        </section>       
        
        </>
    )}



export default TaskForm