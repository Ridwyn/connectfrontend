import React from 'react'
import ProjectItem from './ProjectItem'


const ProjectList = ({projects}) => {

    return (
       <>
                {
                projects.map((project)=>{
                    return<ProjectItem 
                    key={project._id} 
                    project={project} 
                    ></ProjectItem>
                })
                }  
      </>
    )
}

export default ProjectList
