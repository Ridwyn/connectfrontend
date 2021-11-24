import React ,{useState,useEffect,useContext}from 'react'
import {useParams} from 'react-router-dom'
import ProjectList from './ProjectList'
import ModalForm from '../ModalForm'
import ModalButton from '../ModalButton'
import { ProjectContext , httpProjectAction} from "../../context/ProjectContext"
import { SpaceContext , httpSpaceAction} from "../../context/SpaceContext"

const ProjectMenu = () => {
    const params = useParams();
    const [projects,dispatchProject]= useContext(ProjectContext);
    const [spaces]= useContext(SpaceContext);
    const[projectListSpace,setprojectListSpace]= useState({name:''})
    const[formData,setFormData]= useState({})
    const[modalTitle,setModalTitle]=useState('');

    useEffect(async()=>{
        await dispatchProject({type:httpProjectAction.GET,payload:params})
        let foundspace=spaces.find((space)=>(space._id.toString()===params.space_id.toString()))
        if (foundspace) {
            setprojectListSpace({name:foundspace.name})
        }
       

    },[params])
   



    const handleDataSubmit= async (data)=>{
        data.space_id=params.space_id;
        dispatchProject({type:httpProjectAction.EDIT,payload:data})
    }

    


    return (
        <>
            <div className="border-top border-bottom p-2  d-flex flex-column flex-wrap  align-items-start ">
            <div className="my-2 d-flex flex-row align-items-center">
                <h6 className="">Projects on {projectListSpace.name} </h6>
                <ModalButton modalFormId='projectmenu' text='+ New' onClick={()=>{setFormData({name:''});setModalTitle('New Project')}}/>
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
