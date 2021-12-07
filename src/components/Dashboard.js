import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Link, Switch,useParams } from 'react-router-dom';
import {SpaceProvider} from '../context/SpaceContext'
import {ProjectProvider} from '../context/ProjectContext'

import RouterPaths from './RouterPaths'



const Dashboard = () => {

    console.log()
    const params = useParams()


    return (
        <div>
            <main className="row">
                
                <SpaceProvider>
                    <ProjectProvider>
                        <Router>
                        <Suspense fallback={<div>Loading ... </div>}>
                            <aside className="col-lg-4 col-md-4 col-sm-12 ">
                                <Route path ={RouterPaths().SpaceMenu.plainPathText} component={RouterPaths().SpaceMenu.component}></Route>
                                <Suspense fallback={<h3>Projects loading ... </h3>}>
                                <Route path ={RouterPaths().ProjectMenu.plainPathText} component={RouterPaths().ProjectMenu.component}></Route>
                                </Suspense>
                                <Suspense fallback={<h3>Tasks loading ... </h3>}>
                                <Route path ={RouterPaths().TaskMenu.plainPathText} component={RouterPaths().TaskMenu.component}></Route>
                                </Suspense>
                            </aside>
                            <section className="col-lg-8 col-md-8 col-sm-12 container" style={{minHeight: '100vh', borderLeft: '1px solid #aaa',overflow: 'auto'}}>
                                <Route exact path ={RouterPaths().TaskView.plainPathText} component={RouterPaths().TaskView.component}></Route>
                                <Route exact path ={RouterPaths().TaskForm.plainPathText} component={RouterPaths().TaskForm.component}></Route>
                                <Route exact path ={RouterPaths().StatusTemplateForm.plainPathText}  component={RouterPaths().StatusTemplateForm.component}></Route>
                            </section>
                        </Suspense>
                        </Router>
                    </ProjectProvider>
                </SpaceProvider>
               

           
                {/* <TaskView/> */}

                
          
        </main>
            
        </div>
    )
}

export default Dashboard
