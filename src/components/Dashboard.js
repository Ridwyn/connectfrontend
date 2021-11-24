import { BrowserRouter as Router, Route, Link, Switch,useParams } from 'react-router-dom';
import {SpaceProvider} from '../context/SpaceContext'
import {ProjectProvider} from '../context/ProjectContext'
import SpaceMenu from "./space/SpaceMenu"
import ProjectMenu from "./project/ProjectMenu"
import TaskMenu from "./task/TaskMenu"
import taskView from './task/TaskView';
import TaskView from './task/TaskView';

const Dashboard = () => {
    const params = useParams()

    
    const changeViewStructure = ()=>{

    }

    return (
        <div>
            <main className="row">
                
                <SpaceProvider>
                    <ProjectProvider>
                        <Router>
                        <aside className="col-lg-3 col-md-4 col-sm-12 ">
                            <Route path ="/dashboard" component={SpaceMenu}></Route>
                            <Route path ="/dashboard/space/:space_id/" component={ProjectMenu}></Route>
                            <Route path ="/dashboard/space/:space_id/project/:project_id" component={TaskMenu}></Route>
                        </aside>
                        <section className="col-lg-9 col-md-8 col-sm-12">
                            <Route path ="/dashboard/space/:space_id/project/:project_id" component={TaskView}></Route>
                        </section>
                        </Router>
                    </ProjectProvider>
                </SpaceProvider>
               

           
                {/* <TaskView/> */}

                
          
        </main>
            
        </div>
    )
}

export default Dashboard
