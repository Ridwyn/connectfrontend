// import React from 'react'
// import SpaceMenu from "./space/SpaceMenu"
// import ProjectMenu from "./project/ProjectMenu"
// import TaskMenu from "./task/TaskMenu"
// import TaskView from './task/TaskView';
// import StatusTemplateForm from './status/StatusTemplateForm';
import React from 'react';
// import TaskForm from './task/TaskForm';


const SpaceMenu = React.lazy(() => import('./space/SpaceMenu'))
const ProjectMenu = React.lazy(() => import('./project/ProjectMenu'))
const TaskMenu = React.lazy(() => import('./task/TaskMenu'))
const TaskView = React.lazy(() => import('./task/TaskView'))
const TaskForm = React.lazy(() => import('./task/TaskForm'))
const StatusTemplateForm = React.lazy(() => import('./status/StatusTemplateForm'))
const StatusTemplatesView = React.lazy(() => import('./status/StatusTemplatesView'))



const RouterPaths=()=>{
       let paths={
           'SpaceMenu':{
               'component':SpaceMenu,
               'urlPathText':'/dashboard',
               'plainPathText':'/dashboard'
           },
           'ProjectMenu':{
                'component':
                ProjectMenu,
                'urlPathText':function ({space_id}) {
                    return `/dashboard/space/${space_id}`
                },
                'plainPathText':'/dashboard/space/:space_id',
            },
           'TaskMenu':{
                'component':TaskMenu,
                'urlPathText':function ({space_id,project_id}) {
                    return `/dashboard/space/${space_id}/project/${project_id}`
                },
                'plainPathText':'/dashboard/space/:space_id/project/:project_id',
                    
                },
           'TaskView':{
                'component':TaskView,
                'urlPathText':function ({space_id,project_id}) {
                    return `/dashboard/space/${space_id}/project/${project_id}`
                },
                'plainPathText':'/dashboard/space/:space_id/project/:project_id',
            },
           'TaskForm':{
                'component':TaskForm,
                'urlPathText':function ({space_id,project_id,task_id}) {
                    return `/dashboard/space/${space_id}/project/${project_id}/task_form/${task_id}`
                },
                'plainPathText':'/dashboard/space/:space_id/project/:project_id/task_form/:task_id',
            },
           'StatusTemplateForm':{
                'component':StatusTemplateForm,
                'urlPathText':function ({space_id,template_id}) {
                    return `/dashboard/space/${space_id}/status_template_form/${template_id}`
                },
                'plainPathText':'/dashboard/space/:space_id/status_template_form/:template_id',
            },
           'StatusTemplatesView':{
                'component':StatusTemplatesView,
                'urlPathText':function ({space_id}) {
                    return `/dashboard/space/${space_id}/StatusTemplatesView`
                },
                'plainPathText':'/dashboard/space/:space_id/StatusTemplatesView',
            },
    }

    return paths
    
    }


      


export default RouterPaths
