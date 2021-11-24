
import Nav from './Nav'
import NavLoggedIn from './NavLoggedIn'
import Footer from './Footer'
import{useLocation} from 'react-router-dom'

const navlayouts = {
    nav1: Nav,
    nav2: NavLoggedIn,
    none:null,
    
  };

const Layout = ({children}) => {
    const location = useLocation();
    const _nav={
        "/":<Nav/>,
        "/about":<Nav/>,
        "/login":null,
        "/signup":null,
    }

    return (
        <div >
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"/>
            
            {
                _nav.hasOwnProperty(location.pathname) ? _nav[location.pathname] : <NavLoggedIn/>
            }

            <main id="#main"  >
                {children}

            </main>
           <Footer/>
        </div>
    )
}

export default Layout