import React from 'react'

const SpaceForm = () => {
    return (
        <div>
            <form class="col-8 left"  method="POST">
                
                <div class="mb-3">
                  <h5>WorkSpace Name:</h5>
                  <input type="text" name="name"/>
                </div>
              <div>
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <label class="input-group-text" for="inputGroupSelect01">Statuses:</label>
                    </div>
                    <select class="custom-select" id="inputGroupSelect01" name="status">
                          <option value="618dc0daa7b8dd25142776d7">basic</option>
                    </select>
                  </div>
  
                  <div>                  
                  </div>
                 <div class="my-2">
                 </div>
  
              </div>
                
                  <input type="submit" class="my-3"/>
  
              </form>
            
        </div>
    )
}

export default SpaceForm
