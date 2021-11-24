import PropTypes from 'prop-types'
import { useState ,useEffect} from 'react';
import * as $ from "jquery";


const ModalForm = ({modalTitle,onSubmit,inputData,modalFormId,placeholders={},errors={},isError=false}) => {
    const [stateInputData, setStateInputData] = useState(inputData);

    const changeInput=(e)=>{
        let key = e.target.id;
        let data ={};
        data[key]=e.target.value
        
        setStateInputData({...stateInputData,...data})
    }
    
    // Run Once only when inputdata from param comes in
    useEffect(()=>{
        setStateInputData(inputData);
    },[inputData])

    const closeModal=()=>{
        // Using Jquery to close Boostrap Modal
        window.$(`#${modalFormId}`).modal('hide');
    }

   
    
  
    const handleSubmit=(e)=>{
        e.preventDefault();
        if (typeof isError === 'function' ) {
            if (!isError(stateInputData) ) {
                onSubmit(stateInputData)
                closeModal(); 
            }  
        }else{
            onSubmit(stateInputData)
                closeModal();
        }
           

    }
  
    

    return (
        <div>
           
            <div  className='modal fade' id={modalFormId} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">  
                    <h5 className="modal-title" id="exampleModalLabel">{modalTitle}</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <form onSubmit={handleSubmit} className="needs-validation" >
                        {
                            
                            Object.entries(inputData).map(([key,value], index)=>{
                                return<div className="mb-3" key={index}> 
                                        <label htmlFor="text" className="col-form-label" style={{ 'textTransform': 'capitalize'}}>{key}</label>
                                        <input type="text" className="form-control " id={key} 
                                        placeholder={placeholders[key]?placeholders[key]:''}
                                        value={stateInputData[key]} onChange={changeInput}
                                        required
                                        />
                                        <div className="text-danger form-text">
                                         {errors[key]?errors[key]:''}
                                        </div>
                                         
                                        <div className="invalid-feedback">
        Please choose a username.
      </div>
                                    </div>
                            })
                        }
                        <div className="mb-2 d-flex justify-content-end">
                            <button type="submit" className=" ml-auto" >Save</button>
                        </div>  
                   </form>

                </div>
                </div>
            </div>
            </div>
        </div>
    )
}


ModalForm.propTypes={
    modalTitle:PropTypes.string,
    inputData:PropTypes.object,
    onSubmit:PropTypes.func
}

export default ModalForm
