import React,{useState, createContext, useMemo,useEffect} from 'react'
import {saveSpaceItem, getSpaceList,getSpaceItem,deleteSpaceItem} from '../actions/space'


export const httpSpaceAction ={
    'DELETE':'DELETE','LEAVE':'LEAVE',
    'EDIT':'EDIT','CREATE':'CREATE',
    'GET':'GET',
    'GETITEM':'GETITEM'
}

export const SpaceContext = createContext();

export const SpaceProvider = (props) => {
    const[spaces,setSpaces]= useState([]);


    // Run only once when componenet is loaded
    useEffect(()=>{
        fetchSpaceList()
        
    },[])

    const fetchSpaceList = async()=>{
        let res =await getSpaceList()
        setSpaces([...JSON.parse(res)]);
    }
    const fetchSpaceItem = async(payload)=>{
        let res =await getSpaceItem(payload)
        setSpaces([res]);
    }

    


    const dispatchSpace = async({type='',payload={}}) => {
        let res=null;
      switch(type){
        case httpSpaceAction.DELETE:
            await deleteSpaceItem({space_id:payload._id})
           return fetchSpaceList();
        case httpSpaceAction.EDIT:
            res= await saveSpaceItem(payload)
            fetchSpaceList();
            return res
        case httpSpaceAction.CREATE:
            res=await saveSpaceItem(payload)
            fetchSpaceList();
            return res;
        case httpSpaceAction.LEAVE:
           return fetchSpaceList();
        case httpSpaceAction.GET:
           return fetchSpaceList();
        case httpSpaceAction.GETITEM:
           return fetchSpaceItem(payload);
        default:
          return spaces;
      }
              
      };
      
      
    const contextValue = useMemo(() => {
        return [ spaces, dispatchSpace ];
      }, [spaces]);
    return (
        <SpaceContext.Provider value={ contextValue }>
            {props.children}
        </SpaceContext.Provider>
    )
}

