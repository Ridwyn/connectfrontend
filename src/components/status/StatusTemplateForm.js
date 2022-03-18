import React,{useState, useEffect, useContext} from 'react'
import { useParams, useHistory } from 'react-router-dom';
import {customStatuses,getSpaceItem} from '../../actions/space';
import RouterPaths from '../RouterPaths'

const StatusTemplateForm = () => {
    const history = useHistory();
    const [statuses, setStatuses] = useState([{status:'open',color:'#000000',orderindex:'0'},{status:'close',color:'#0f077e',orderindex:'1'}]);
    const [templateName, setTemplateName] = useState('');
    const {space_id,template_id} = useParams();

    useEffect(async()=>{
        console.log(template_id);
       const space = await getSpaceItem({_id:space_id});
       const [custom_status]=space.custom_statuses.filter(({_id})=>(String(_id ))== String(template_id))
       
        if (custom_status) {
           setStatuses(custom_status.statuses)
           setTemplateName(custom_status.name)
        }

    },[template_id])
    

  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const updated_statuses = [...statuses];
    updated_statuses[index][name] = value;
    setStatuses(updated_statuses);
  };
 
  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const updated_statuses = [...statuses];
    updated_statuses.splice(index, 1);
    updated_statuses.forEach((status,index)=>{
        status.orderindex=String(index);
    })
    setStatuses(updated_statuses);
  };
 
  // handle click event of the Add button
  const handleAddClick = () => {
    setStatuses([...statuses, {status:'',color:'#000000',orderindex:String(statuses.length)}]);
  };


  const handleFormSubmit = async(e)=>{
    e.preventDefault();
   const updated_statuses= statuses.map((status)=>{
        status.type =templateName;
        return status
    })
    const data = {
        space_id:space_id,
        custom_status:{_id:template_id || '',name:templateName, statuses:updated_statuses }        
    }
   let s= await customStatuses(data);

   history.push(RouterPaths().StatusTemplatesView.urlPathText({space_id:space_id}))


    }
 
  return (
        <form  class="status-form text-center" method="post" onSubmit={handleFormSubmit}>
            <div className="mb-3">
                <label className="input-group-text fw-light" htmlFor="">Template Name:</label>
                <input className="w-100" type="text" name="template_name" 
                onChange={(e)=>(setTemplateName(e.target.value))}
                value={templateName || ''}
                required/>
            </div>

            {
                statuses.map((status, index)=>{
                    return(
                        <div>
                        <label className="input-group-text fw-light " htmlFor="">
                            Status 
                            <i className=" ml-auto text-danger fa-solid fa-xmark" 
                                onClick={()=>{handleRemoveClick(index)}}
                                style={{cursor:'pointer'}}></i>
                        </label>
                
                        <div className='d-flex  align-content-center'>
                
                         <input className="flex-fill" type="text" name="status" placeholder='e.g open, closed, in progress'
                            onChange={(e)=>handleInputChange(e,index)} 
                            value={status.status || ''} 
                            style={{color:status.color ? status.color : ''}}
                            required/>
                
                         <input className="flex-fill" type="color" name="color" 
                            value={status.color || '#000000 '} 
                            onChange={(e)=>handleInputChange(e,index)}
                            style={{ border: 'none', cursor: 'pointer', marginLeft: '-10px',padding: '0px', height: 'auto'}} 
                            required/>
                
                        </div>
                
                    </div>
                    )
                })
            }
         
            
            <div className='d-flex justify-content-between'>
                <input className='btn' type="submit" value="Submit"/>
                <input type='button' className='btn border border-dark rounded  my-2' onClick={handleAddClick} value='Add Status'/>
            </div>

        </form>
  );
}

export default StatusTemplateForm
