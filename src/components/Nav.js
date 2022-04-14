
import {BrowserRouter as Router, Route,Link} from 'react-router-dom'


const Nav = () => {
    return (
        
        <nav className="navbar ">
             {/* <Router>
      <div className="container">
        <Header title={'Jon'} onAdd={()=>setShowAddTask(!showAddTask)} showAdd={showAddTask}/>

        <Route path ="/about" component={About}/>
        <Footer/>
      </div>
    </Router> */}

            <h1></h1>   
            <Link to="/dashboard" className="navbar-brand" style={{"backgroundColor": "inherit"}}>
             <img  src="/images/connect_logo.svg" width="50"  className="img-fluid" alt=""/>
            </Link>  

            <ul className="navbar-nav flex-row ml-auto">
                <li className="nav-item mx-1">
                    <Link to="/about" className="p-2 ">About </Link>
                </li> 
                <li className="nav-item mx-1">
                    <Link to="/login" className="p-2 ">Login </Link>
                </li>
                <li className="nav-item mx-1">
                    <Link to="/signup" className="p-2 ">Signup </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
