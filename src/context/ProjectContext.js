import React,{useState, createContext, useMemo,useEffect} from 'react'
import {saveProjectItem, getProjectList,deleteProjectItem} from '../actions/project'
import ProjectModel from '../models/ProjectModel'

export const httpProjectAction ={
    'DELETE':'DELETE',
    'LEAVE':'LEAVE',
    'EDIT':'EDIT',
    'CREATE':'CREATE',
    'GET':'GET',
    'GETONE':'GETONE'
    }

export const ProjectContext = createContext();

export const ProjectProvider = (props) => {
    const[projects,setProjects]= useState([]);
    const[projectStore,setProjectStore] = useState(ProjectModel)


    const fetchProjectList = async(payload)=>{
        let res =await getProjectList(payload)
        setProjects(res);
        return res;
    }
    const fetchProjectItem = async(payload)=>{
        let res =await getProjectList(payload)
        setProjects(res);
    }

    


    const dispatchProject = async({type='',payload={}}) => {
        let res=null;
      switch(type){
        case httpProjectAction.DELETE:
            await deleteProjectItem({space_id:payload._id})
           return fetchProjectList(payload);
        case httpProjectAction.EDIT:
            res= await saveProjectItem(payload)
            fetchProjectList(payload);
            return res
        case httpProjectAction.CREATE:
            res=await saveProjectItem(payload)
            fetchProjectList(payload);
            return res;
        case httpProjectAction.LEAVE:
           return fetchProjectList(payload);
        case httpProjectAction.GET:
          return fetchProjectList(payload);
        default:
        return projects;
      }
              
      };

    const updateProjectStore=(payload)=>{
        console.log(payload)
        // setProjectStore(payload)
    }
      
      
    const contextValue = useMemo(() => {
        return { projects, dispatchProject, projectStore, setProjectStore };
      }, [projects]);
    return (
        <ProjectContext.Provider value={ contextValue }>
            {props.children}
        </ProjectContext.Provider>
    )
}

