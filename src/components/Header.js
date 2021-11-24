// import Link from 'next/link'


// const Header = () => {
//     return (
//         <div>
//             <header className="navbar navbar-expand-sm ">
//                 <div className="container-fluid">
//                     <Link href="/dashboard" className="navbar-brand" style="background-color: inherit;"><img  src="/images/connect_logo.svg" width="50"  className="img-fluid" alt=""/></Link>  
//                         <span>data_username</span>
//                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                             <span><i className="fas fa-ellipsis-h"></i></span>
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                         <form className="d-flex me-auto ">
//                             <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//                             <button className="btn btn-outline-success" type="submit">Search</button>
//                         </form>
//                         <ul className="navbar-nav   mb-2 mb-lg-0 align-items-center">
//                             <li className="nav-item m-1">
//                                 <Link href="#" className="p-1">Favourites</Link>
//                             </li>
//                             <li className="nav-item m-1  dropdown">
//                                 <Link className="nav-link dropdown-toggle p-1" href="#" id="navbarDropdown"  data-bs-toggle="dropdown" aria-expanded="false">
//                                     Assigned task
//                                 </Link>
//                                 <ul className="dropdown-menu p-2" aria-labelledby="navbarDropdown" id="#assigned_tasks_list">
//                                     {/* {{#unless data.assigned_tasks}} */}
//                                     <p className="warning">WARNING: No assigned task !</p>
//                                     {/* {{/unless}} */}
//                                     {/* {{#each data.assigned_tasks}} */}
//                                     <li className="my-2 d-flex flex-row justify-content-between" style="min-width: 100px;">
//                                         <Link className="button d-inline m-1 p-1 " href="/task/form?_id={{this._id}}">assigned_task_name</Link>
//                                         <span className="badge m-1 p-1" style="background-color:{{this.status.color}}">assigned_task_status</span>
//                                     </li>
//                                     {/* {{/each}} */}
//                                 </ul>
//                             </li>
//                             {/* {{#if data.current_space }} */}
//                                 <li className="nav-item m-1  dropdown">
//                                     <Link className="nav-link dropdown-toggle p-1" href="#" id="navbarDropdown"  data-bs-toggle="dropdown" aria-expanded="false">
//                                         <i className="fas fa-layer-group"> Status Templates</i>
//                                     </Link>
//                                     <ul className="dropdown-menu p-2" aria-labelledby="navbarDropdown">
//                                         {/* {{#each data.current_space.all_statuses}} */}
//                                         <li className="my-2 d-flex flex-row justify-content-between">
//                                             <Link className="button d-inline m-1 p-1 align-self-center" href="#">status_name</Link>
//                                         {/* {{#ifnoteq this.name 'basic'}} */}
//                                             <Link className="button d-inline m-1 p-1 align-self-center" href="/status/form?_id={{this._id}}"><i className="fas fa-pen"></i></Link>
//                                             <Link className="button d-inline m-1 p-1 align-self-center" href="#"><i className="fas fa-times text-danger"></i></Link>
//                                             {/* {{/ifnoteq}} */}
//                                         </li>
//                                         {/* {{/each}} */}
//                                         <li className="text-center">
//                                             <Link href="/status/form?space_id={{data.current_space._id}}" className=" p-1">+ Status</Link>
//                                         </li>
//                                     </ul>
//                                 </li>
//                             {/* {{/if}} */}
//                             {/* {{#if data.current_project }}  */}
//                                 <li className="nav-item m-1">
//                                     <Link href="/task/form?space_id={{data.current_project.workspace}}&project_id={{data.current_project._id}}" className=" p-1"><i className="fas fa-plus"> Task</i></Link>
                                                
//                                     </li>
//                             {/* {{/if}} */}
                                            
//                             <li className="nav-item m-1">
//                                 <Link href="/logout" className="logout p-1 ">Logout </Link>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </header>
//         </div>
//     )
// }

// export default Header
