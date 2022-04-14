
import React,{useState,useContext} from 'react'
import { useHistory,Link } from 'react-router-dom'
import ModalForm from '../ModalForm'
import ModalButton from '../ModalButton'
import { SpaceContext , httpSpaceAction} from "../../context/SpaceContext"
import RouterPaths from '../RouterPaths'

const SpaceItem = ({space}) => {

    const history = useHistory();
    const [spaces,dispatchSpace]= useContext(SpaceContext);
    const [spaceState,setSpaceState]=useState(space)
    const [formData,setFormData]= useState({})
    const [modalTitle,setModalTitle]=useState('');
    const [errors,setErrors]=useState({})
    const [placeholders,setPlaceholders]=useState({'Leave Space':'type lev','Delete Space':'type del'})
    const [submitAction,setSubmitAction]=useState('')




    const handleSpaceClick =()=>{
        history.push(RouterPaths().ProjectMenu.urlPathText({space_id:spaceState._id}))
    }
    const handleStatusTemplate =()=>{
        history.push(RouterPaths().StatusTemplateForm.urlPathText({space_id:spaceState._id}))
    }

    const hadnleOnClickTemplates =()=>{
        history.push(RouterPaths().StatusTemplatesView.urlPathText({space_id:spaceState._id}))
    }

    const handleOnClickEdit =()=>{
        let editableData={name:spaceState.name};
        setFormData(editableData);
        setModalTitle(`Edit  ${spaceState.name}`);
        setSubmitAction(httpSpaceAction.EDIT);
    }
    const handleOnClickLeave =()=>{
        let editableData={'Leave Space':''};
        setFormData(editableData);
        setModalTitle(`Leave  ${spaceState.name}`);
        setSubmitAction(httpSpaceAction.LEAVE);
    }
    const handleOnClickDelete =()=>{
        let editableData={'Delete Space':''};
        setFormData(editableData);
        setModalTitle(`Delete  ${spaceState.name}`);
        setSubmitAction(httpSpaceAction.DELETE);
    }

  

    const checkLeaveDeleteInput=(obj)=>{
        let bol=false;
        if (obj.hasOwnProperty('Leave Space') && obj['Leave Space'] === 'lev') {         
           setErrors({})
        }else if(obj.hasOwnProperty('Leave Space') && obj['Leave Space'] !== 'lev'){
            setErrors({'Leave Space':'Invalid! Enter Lowercase lev'})
            bol=true;
        }
        if (obj.hasOwnProperty('Delete Space') && obj['Delete Space'] === 'del') {
            setErrors({})            
        }else if(obj.hasOwnProperty('Delete Space') && obj['Delete Space'] !== 'del'){
            setErrors({'Delete Space':'Invalid! Enter Lowercase del'})
            bol=true;
        }
        return bol
    }

    const handleIsErrorCheck =(submittedData)=>{
       return checkLeaveDeleteInput(submittedData);
       
    }

    
    const handleDataSubmit= async (submittedData)=>{
         
        if (Object.keys(errors).length === 0) {
            switch (submitAction) {
                case httpSpaceAction.DELETE:
                    dispatchSpace({type:httpSpaceAction.DELETE,payload:space})
                    setSpaceState({})
                case httpSpaceAction.LEAVE:
                    let data ={};
                    data.user_id=JSON.parse(localStorage.getItem('user'))._id
                    data.space_id=space._id
                    dispatchSpace({type:httpSpaceAction.LEAVE,payload:data})
                    setSpaceState({})
                case httpSpaceAction.EDIT:
                    let updatedSpace={...space,...submittedData};
                    updatedSpace= await dispatchSpace({type:httpSpaceAction.EDIT,payload:updatedSpace}) 
                    setSpaceState( updatedSpace)
                default:
                    break;
            }
            
        }
        
    }



  
    return (
        <>
        {
           spaceState ? 
           
           <div className=" my-2 d-flex flex-row">
               <button className=" mx-2" onClick={handleSpaceClick}>{spaceState.name}</button>

               <button className=" mx-2" onClick={handleStatusTemplate}>+ Template</button>
               
   
               <div className="dropdown mx-2 ">
                   <button className="dropbtn "><i className="fas fa-ellipsis-h dropbtn"></i></button>
                   
                   <ul className="dropdown-content">
                       <li >
                       {spaceState.canEdit ?
                            <ModalButton modalFormId={'spaceitem'+spaceState._id} text='edit' onClick={handleOnClickEdit}/>
                            : ''
                       }
                       </li>
                       <li >
                           <ModalButton modalFormId={'spaceitem'+spaceState._id}  text='invite' onClick={()=>{setFormData({email:''});setModalTitle(`Invite ${space.name}`)}}/>
                       </li>
                       {space.canLeave?
                        <li >
                            <ModalButton modalFormId={'spaceitem'+spaceState._id}  text='leave' onClick={handleOnClickLeave}/>
                        </li>
                        :''
                        }
                       <li>
                           {space.canDelete?
                               <ModalButton modalFormId={'spaceitem'+spaceState._id}  text='delete' color='red' onClick={handleOnClickDelete}/>
                               :''
                           }
                       </li>
                       
                       <li>
                            <button onClick={hadnleOnClickTemplates}>Custom Templates</button>
                       </li>
                       <li >
                          <span className='badge' title='Join Code'>{space.join_code}</span> 
                          
                       </li>
                   </ul>
               </div>
   
               <ModalForm  modalFormId={'spaceitem'+spaceState._id}  onSubmit={(submittedData)=>{ handleDataSubmit(submittedData)}} modalTitle={modalTitle} inputData={formData} placeholders={placeholders} errors={errors} isError={(submittedData)=>{return handleIsErrorCheck(submittedData)}}/>
   
               </div>
                
                :null
         } 
        </>
        
    )
}

export default SpaceItem
