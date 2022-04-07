import React, { useEffect, useState,useContext } from 'react'
import ModalForm from '../ModalForm'
import ModalButton from '../ModalButton'
import SpaceList from './SpaceList'
import { SpaceContext , httpSpaceAction} from "../../context/SpaceContext"

const SpaceMenu = () => {
    const [spaces,dispatchSpace]= useContext(SpaceContext);
    const[formData,setFormData]= useState({})
    const[modalTitle,setModalTitle]=useState('');

   

    const handleDataSubmit= async (data)=>{
        // Join a Space or Create a Space
        if (data.join_code) {
            data.user_id=JSON.parse(localStorage.getItem('user'))._id
          await dispatchSpace({type:httpSpaceAction.JOIN,payload:data})
        }else{
            dispatchSpace({type:httpSpaceAction.EDIT,payload:data})
        }
    
    }




    return (
        <div className="border-top border-bottom p-2  d-flex flex-column flex-wrap  align-items-start ">
            <div className="my-2 d-flex flex-row align-items-center">
                <h6 className="">Spaces</h6>
                <ModalButton className='m-2' modalFormId='spacemenu' text='+ New' onClick={()=>{setFormData({name:''});setModalTitle('New Space')}}/>
                <ModalButton className='m-2' modalFormId='spacemenu' text='<i class="fas fa-handshake"></i> Join '  onClick={()=>{setFormData({join_code:''});setModalTitle('Join A Space')}}/>
            </div>
            <ModalForm  modalFormId='spacemenu' onSubmit={(data)=>{ handleDataSubmit(data)}} modalTitle={modalTitle} inputData={formData} />


            <SpaceList spaces={spaces} />
            
        </div>
    )
}

export default SpaceMenu
