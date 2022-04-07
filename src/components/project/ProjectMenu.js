import React ,{useState,useEffect,useContext}from 'react'
import {useParams, useHistory} from 'react-router-dom'
import RouterPaths from '../RouterPaths';
import ProjectList from './ProjectList'
import ModalForm from '../ModalForm'
import ModalButton from '../ModalButton'
import { ProjectContext , httpProjectAction} from "../../context/ProjectContext"
import { SpaceContext , httpSpaceAction} from "../../context/SpaceContext"
import {saveProjectItem} from "../../actions/project"

const ProjectMenu = () => {
    const params = useParams();
    const {projects,dispatchProject}= useContext(ProjectContext);
    const [spaces]= useContext(SpaceContext);
    const[projectListSpace,setprojectListSpace]= useState({name:''})
    const [allStatuses,setAllStatuses]= useState([])
    const[formData,setFormData]= useState({})
    const[modalTitle,setModalTitle]=useState('');
    const history = useHistory();
    const {space_id,project_id,task_id} = useParams();

    useEffect(async()=>{
        dispatchProject({type:httpProjectAction.GET,payload:params})

        // const projects =await getProjectList({space_id:params.space_id});

        const foundspace= await spaces.find((space)=>(space._id.toString()===params.space_id.toString()))
        setprojectListSpace({...foundspace});
       
        if (foundspace) {
            const template_statuses = [...foundspace.custom_statuses,foundspace.default_statuses]
            setAllStatuses([...foundspace.custom_statuses ,foundspace.default_statuses])
          
        }
       

    },[params,setprojectListSpace,setAllStatuses,spaces])
   



    const handleDataSubmit= async (data)=>{
        data.space_id=params.space_id;
       
        if (data.active_status_template && Array.isArray(data.active_status_template)) {
            data.active_status_template=data.active_status_template[1]._id
            //  dispatchProject({type:httpProjectAction.EDIT,payload:data})
            await saveProjectItem(data)
            history.push(RouterPaths().ProjectMenu.urlPathText({space_id:space_id,project_id:project_id}))

            
        }else{
        //  dispatchProject({type:httpProjectAction.EDIT,payload:data})
        await saveProjectItem(data)
        history.push(RouterPaths().ProjectMenu.urlPathText({space_id:space_id,project_id:project_id}))

        }
        console.log(data)
    }

    


    return (
        <>
            <div className="border-top border-bottom p-2  d-flex flex-column flex-wrap  align-items-start ">
            <div className="my-2 d-flex flex-row align-items-center">
                <h6 className="">Projects on {projectListSpace.name} </h6>
                <ModalButton className='m-2' modalFormId='projectmenu' text='+ New' onClick={()=>{setFormData({name:'',active_status_template:allStatuses||[]});setModalTitle('New Project')}}/>
            </div>
            <ModalForm  modalFormId='projectmenu' onSubmit={(data)=>{ handleDataSubmit(data)}} modalTitle={modalTitle} inputData={formData} />

            {
                projects?<ProjectList projects={projects}/> :null
            }
           
           </div>
        </>
    )
}

export default ProjectMenu
