import React,{useEffect,useState,useContext} from 'react'
import {Link,useHistory} from 'react-router-dom'
import { ProjectContext , httpProjectAction} from "../../context/ProjectContext"
import {deleteProjectItem} from "../../actions/project"
import RouterPaths from '../RouterPaths'
import ModalForm from '../ModalForm'
import ModalButton from '../ModalButton'



const ProjectItem = ({project}) => {
    const[modalTitle,setModalTitle]=useState('');
    const [errors,setErrors]=useState({})
    const [formData,setFormData] = useState({});
    const history = useHistory();
    const [projectState,setProjectState]=useState({...project,status_template:{name:''}})
    const {projects,dispatchProject,projectStore,setProjectStore}= useContext(ProjectContext);
    const [colors, setColors] =useState([])

    useEffect(() => {
        let statuses = [
            ...projectState.workspace.custom_statuses,
            projectState.workspace.default_statuses,
        ]
        
        let mappedStatuses={};
        for (let i = 0; i < statuses.length; i++) {
            mappedStatuses[statuses[i]._id]=statuses[i]
        }

        // Adding the project status to State
        setProjectState({...projectState,status_template:mappedStatuses[projectState.active_status_template]})  

       setColors(mappedStatuses[projectState.active_status_template].statuses.map(({color})=>(color)))
        
    }, [setProjectState,setColors])

    const handleProjectClick =()=>{
        // console.log(projectState)
        history.push(RouterPaths().TaskMenu.urlPathText({space_id:projectState.workspace._id,project_id:projectState._id}))
           
        setProjectStore(projectState);
    }

    const handleProjectNewTask =()=>{
        history.push(RouterPaths().TaskForm.urlPathText({space_id:projectState.workspace._id,project_id:projectState._id}))

    }

    const checkLeaveDeleteInput=(obj)=>{
        let bol=false;
        if (obj.hasOwnProperty('Delete Project') && obj['Delete Project'] === 'del') {
            setErrors({})            
        }else if(obj.hasOwnProperty('Delete Project') && obj['Delete Project'] !== 'del'){
            setErrors({'Delete Project':'Invalid! Enter Lowercase del'})
            bol=true;
        }
        return bol
      }
    
      const handleIsErrorCheck =(submittedData)=>{
        console.log(submittedData)
        return checkLeaveDeleteInput  (submittedData);
        
      }

    const handleProjectDelete = async()=>{
        if (Object.keys(errors).length === 0) {
            await deleteProjectItem({_id:projectState._id})
            history.push(RouterPaths().ProjectMenu.urlPathText({space_id:projectState.workspace._id}))
    

        }

    }


    return (
        <>
            {projectState?
                <div className="">
                    <button onClick={handleProjectClick} className="button m-1">
                        {projectState.name}
                    </button>
                    <button onClick={handleProjectNewTask} className="button m-1">
                        + task
                    </button>
                    
                    <span className='border rounded p-2'>
                        {projectState.status_template.name }
                        {
                        colors?
                        colors.map((color,index)=>(
                            <span key={index} className='border rounded p-2' style={{backgroundColor:color}}></span>
                        ))
                        :''
                    }   
                    
                    </span>

                    <span className=''>
                        <ModalButton className='m-2 btn btn-outline-danger p-1' modalFormId='task' text='Delete' onClick={()=>{setFormData({name:''});setModalTitle('Delete this Project')}}/>                                    
                        
                        <ModalForm  modalFormId='task' onSubmit={(data)=>{ handleProjectDelete(data)}} modalTitle={modalTitle} inputData={{'Delete Project':''}} placeholders={{'Delete Project': 'type del'}} errors={errors} isError={(submittedData)=>{return handleIsErrorCheck(submittedData)}}/>
                    </span>


                    {/* <button onClick={handleProjectDelete} className="button m-1 btn-outline-danger">
                        delete
                    </button> */}
                    
                </div>
            :null
            }

            
        </>
    )
}

export default ProjectItem
