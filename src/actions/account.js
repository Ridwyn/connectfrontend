import server from '../config/index'
import axios  from 'axios';

export const LOGIN = 'LOGIN';
export const SIGNUP = 'SIGNUP';
export const LOGOUT = 'LOGOUT';
export const ACCOUNT_DATA = 'ACCOUNT_DATA';



export const accountAction = async({type,payload}) =>{
    let res= null;
       switch(type){
            case 'LOGIN':
              res=await axios.post(`${server}/api/login`,payload); 
              return  res.data;
            case 'ACCOUNT_DATA':
               
              res=await axios.get(`${server}/api/user/getProfile`,{headers:{authorization:localStorage.getItem('token').split('"')[1]}});
              console.log(res.data)
              return res.data
            case 'SIGNUP':
              res=await axios.post(`${server}/api/signup`,payload);
              return res.data;
            case 'LOGOUT':
              res=await axios.post(`${server}/api/logout`,payload,{headers:{authorization:localStorage.getItem('token').split('"')[1]}});
              return res.data
            default:
              return payload;
          }
}

// export const accountLogin=()=>{
//    let res=await axios.post(`${server}/api/login`,action.data);
//           await setUser(res.data);   
//           return res.data;
// }
    
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
      