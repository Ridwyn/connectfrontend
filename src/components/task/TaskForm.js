import React from 'react'

const TaskForm = () => {
    return (
        <>

        <section  className="task col my-4 p-2">
        <div className="task-header d-flex flex-row justify-content-between">
            <div className="p-1">
              <span className="fw-light">Status:</span> 
              open
              {/* {{#if data.task.status}} 
                <span className="badge p-2 text-uppercase"  style="background-color: {{data.task.status.color}};">
                  {{data.task.status.status}}</span>
                {{/if}} */}
               </div>
            <div className="p-1">
              <span className="fw-light">Assignees of task</span> 
              <a className="button " href="#" id="assignees"   data-bs-toggle="dropdown" aria-expanded="false">
                <i className="fas fa-ellipsis-h"></i>
              </a>
            </div>
            <div className="p-1">
              <span className="fw-light">Date created:</span> 
              <span>
                  {/* {{#if data.task.created_at}}{{format_date data.task.created_at "ddd DD/MM/YYYY"}}{{/if}} */}
              </span> 
            </div>
            <div className="p-1">
              <span className="fw-light">Due date:</span>  
              <span>
                  {/* {{#if data.task.due_date}}{{format_date data.task.due_date "ddd DD/MM/YYYY LT"}}{{/if}}  */}
                </span>
            </div>
        </div>

                {/* Task body */}



        </section>

     



        </>
    )
}

export default TaskForm
