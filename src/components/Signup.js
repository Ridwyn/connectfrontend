import {useState} from 'react'
import {LOGIN,accountAction, SIGNUP} from '../actions/account'
import { useHistory } from 'react-router-dom';


const Signup = () => {
    const history = useHistory();
    const [inputData, setInputData] = useState({email:'',password:'',name:''});
    const [error, setError] = useState('');

 

    
    

    const handleSingup = async (e) => {
        e.preventDefault();

        // reset error 
        setError('');

        // fields check
        if (!inputData.email || !inputData.password) return setError('All fields are required');

        // Make a axios Request
      accountAction({type:SIGNUP, payload:inputData}).then(data=>{
        if (!data.errorMsg) {
            console.log(data)
            document.cookie=`token=${data.token};`
            localStorage.setItem('user', JSON.stringify(data));
            localStorage.setItem('token', JSON.stringify(data.token));
            history.push("/dashboard");
         }else{
            setError(data.errorMsg)
         }
         
            
      })

        
    };

    return (
        <div>
            
            <form className="form-signin text-center" onSubmit={handleSingup}>

                <img className="mb-4 ml-" src="/images/connect_logo.svg" alt="" width="72" height="72"/>
                <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                {/* {{#if errorMsg}} */}
                <span className="text-danger">{error}</span>
                {/* {{/if}} */}
                <div className='my-2'>
                <label htmlFor="inputEmail" className="sr-only">Name</label>
                <input type="name" name="name" 
                    id="inputEmail" className="form-control " 
                    placeholder="Name" required="" autoFocus=""
                    onChange={(e) => setInputData({...inputData,name:e.target.value})}
                    value={inputData.name}
                required/>
                </div>
                <label htmlFor="inputEmail" className="sr-only">Email address</label>
                <input type="email" name="email" 
                    id="inputEmail" className="form-control " 
                    placeholder="Email address" required="" autoFocus=""
                    onChange={(e) => setInputData({...inputData,email:e.target.value})}
                    value={inputData.email}
                required/>
                <label htmlFor="inputPassword" className="sr-only">Password</label>
                <input type="password" name="password"
                    id="inputPassword" className="form-control mt-2"
                    placeholder="Password" required=""
                    onChange={(e) => setInputData({...inputData,password:e.target.value})}
                    value={inputData.password}
                required/>

                <button className="btn btn-lg  btn-block mt-3" type="submit">Sign Up</button>
            </form>
        </div>
    )
}



export default Signup
