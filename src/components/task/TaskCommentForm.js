import React from 'react'

const TaskCommentForm = () => {
    return (
        <div className="col-4 right d-flex flex-column justify-content-between ">
        <div>
          <h4>Comments</h4>
          <div style={{overflow: 'auto', maxHeight:'80vh'}}> 
          <div className="d-flex felx-row flex-wrap my-3 p-2 border-bottom"> 
              <span className=" fw-light">COMMENTER: </span>
              <span className="text-break">COMMENT</span>
              
              <span className="ms-auto"><button className="button" ><i className="fas fa-times text-danger"></i></button></span>
            
          </div>
          </div>                
        </div>
        
        
        <form action="/task/comment" method="post">
          <div className="my-3" id="commentParentDiv">
            <input type="text" name="task_id" value ="" hidden/>
            <input data-emojiable="true" id="commentText" type="text" name="comment" placeholder="comment on this task"/>
            <input type="submit" value="Comment"/>
            
          </div>
        </form>
        

      </div>
    )
}

export default TaskCommentForm
