import React from 'react'
import SpaceItem from './SpaceItem'


const spaceList = ({spaces}) => {

    return (
       <>
                {spaces.map((space)=>{
                    return <SpaceItem 
                    key={space._id} 
                    space={space} 
                    ></SpaceItem>
                })}  
      </>
    )
}

export default spaceList
