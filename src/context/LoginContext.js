import React,{useState, createContext, useMemo} from 'react'
import {accountAction} from '../actions/account'
// import server from '../config/index'
// import axios  from 'axios';



export const LoginContext = createContext();

export const LoginProvider = (props) => {
    const [user, setUser] = useState({})

    // const dispatchUser = async(userobj) => {
    //   let res= await axios.post(`${server}/api/login`,userobj);

    //     await setUser(res.data); 
    // }
    const dispatchUser = async({type,payload}) => {

      let data= await accountAction({type,payload})
        await setUser(data); 
    }

    // const dispatchUser = async(action) => {
    //   let res= null;
    //   switch(action.type){
    //     case 'LOGIN':
    //       res=await axios.post(`${server}/api/login`,action.data);
    //       await setUser(res.data);   
    //       return res.data;
    //     case 'USERDATA':
    //       res=await axios.post(`${server}/api/user/getProfile`,action.data,{headers:{authorization:parsedCookie(document.cookie).token}});
    //       await setUser(res.data);
    //     case 'SIGNUP':
    //       res=await axios.post(`${server}/api/signup`,action.data);
    //       await setUser(res.data); 
    //       return res.data;
    //     case 'LOGOUT':
    //       res=await axios.post(`${server}/api/logout`,action.data,{headers:{authorization:parsedCookie(document.cookie).token}});
    //       await setUser(res.data); 
    //       return false;
    //     default:
    //       return user;
    //   }
              
    //   };
      
      
    const contextValue = useMemo(() => {
        return { user, dispatchUser };
      }, [user]);
    return (
        <LoginContext.Provider value={ contextValue }>
            {props.children}
        </LoginContext.Provider>
    )
}

