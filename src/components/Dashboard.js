import React, { Suspense, useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch,useParams } from 'react-router-dom';
import {SpaceProvider} from '../context/SpaceContext'
import {ProjectProvider} from '../context/ProjectContext'


import RouterPaths from './RouterPaths'

const TaskForm = React.lazy(() => import('./task/TaskForm'))


const Dashboard = () => {
    const [asideClass,setAsideClass]= useState('col-lg-4 col-md-4 col-sm-12 d-block');
    const [sectionClass,setSectionClass]= useState('col-lg-8 col-md-8 col-sm-12 container');
    const [arrowSymbol,setArrowSymbol]= useState('fas fa-arrow-left');
    const [show,setShow]= useState(false);

    const handleAsideOpenClose =()=>{
        if (!show) {
            setAsideClass('d-none');
            setSectionClass('col-10 container');
            setArrowSymbol('fas fa-arrow-right');
            setShow(!show);
        }
        if (show) {
            setAsideClass('col-lg-4 col-md-4 col-sm-12 d-block');
            setSectionClass('col-lg-8 col-md-8 col-sm-12 container');
            setArrowSymbol('fas fa-arrow-left');
            setShow(!show);
        }
    }


    return (
        <div>
            <main className="row">
                
                <SpaceProvider>
                    <ProjectProvider>
                        <Router>
                        <Suspense fallback={<div>Loading ... </div>}>
                            <aside className={asideClass} style={{minHeight: '100vh', borderRight: '1px solid #aaa',overflow: 'auto',display:'block'}}>
                                <Route path ={RouterPaths().SpaceMenu.plainPathText} component={RouterPaths().SpaceMenu.component}></Route>
                                <Suspense fallback={<h3>Projects loading ... </h3>}>
                                <Route path ={RouterPaths().ProjectMenu.plainPathText} component={RouterPaths().ProjectMenu.component}></Route>
                                </Suspense>
                                <Suspense fallback={<h3>Tasks loading ... </h3>}>
                                <Route path ={RouterPaths().TaskMenu.plainPathText} component={RouterPaths().TaskMenu.component}></Route>
                                </Suspense>
                            </aside>
                            <section className={sectionClass} >
                                <button onClick={handleAsideOpenClose} ><i class={arrowSymbol}></i></button>
                                <Route exact path ={RouterPaths().TaskView.plainPathText} component={RouterPaths().TaskView.component}></Route>
                                <Route exact path ={RouterPaths().TaskForm.plainPathText} component={RouterPaths().TaskForm.component} ></Route>
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
