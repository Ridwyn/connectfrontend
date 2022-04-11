import React , { useState,useEffect } from 'react'
import { useLocation, useHistory } from "react-router-dom";
import RouterPaths from '../components/RouterPaths'

const Search = () => {
    const history = useHistory();
    const [searchTerm, setSearchTerm] = useState('');


    const handleFormSubmit = (e)=>{
        e.preventDefault();
        history.push(RouterPaths().SearchPage.urlPathText({search_term:searchTerm}))
        history.go(0);

    }

    return (
        <div>
            <form className="d-flex me-auto my-2" onSubmit={handleFormSubmit}>
            <input className="form-control me-2" value={searchTerm ? searchTerm :''}
             onChange={(e)=>setSearchTerm(e.target.value)}
             type="search" placeholder="search task" aria-label="Search"/>
            {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
            <input className='btn btn-outline-success' type='submit'  value='Search'/>
            </form>
        </div>
    )
}

export default Search
