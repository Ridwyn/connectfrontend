import React , {useContext, useEffect, useState} from 'react'
import { useParams, useHistory } from 'react-router-dom';
import {getSpaceItem} from "../../actions/space"
import RouterPaths from '../RouterPaths'

const StatusTemplatesView = () => {
    const {space_id} = useParams();
    const [currentSpace, setCurrentSpace] = useState({})

    useEffect(async()=>{
        // let foundspace=spaces.find((space)=>(space._id.toString()===space_id.toString()))
        let foundspace =await getSpaceItem({_id:space_id})
        
        if (foundspace) {
            setCurrentSpace(foundspace)          
        }
       

    },[space_id])

  return (
    <div>
        <h4> Custom Templates for {currentSpace.name || ''} </h4>
        <div>
            {
                currentSpace.custom_statuses?
                currentSpace.custom_statuses.map((status_template,index)=>(
                
                    <div className="accordion my-3" id="accordionExample" key={index}>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" 
                                    data-bs-toggle="collapse" data-bs-target={String('#'+status_template.name+index)} 
                                    aria-expanded="true" aria-controls={index}>

                                <a href={RouterPaths().StatusTemplateForm.urlPathText({space_id:currentSpace._id, template_id:status_template._id})} 
                                    style={{backgroundColor:'inherit', color:'black'}}>
                                    <i className="fa-solid fa-pen mr-3 p-1" title="edit"></i>
                                </a>
                                {status_template.name} 
                               
                            </button>
                           
                            </h2>
                            <div id={String(status_template.name+index)} className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body p-2">
                               {
                                   status_template.statuses.map((status)=>(
                                    <span className="badge p-2 m-2 " style={{backgroundColor:status.color}}>{status.status}</span>
                                   ))
                               }
                            
                            </div>
                            </div>
                        </div>
                    </div>
                ))
                :''
                
            }
        </div>


    </div>
  )
}

export default StatusTemplatesView