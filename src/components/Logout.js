import React from 'react'
import {Link} from 'react-router-dom'

const Logout = () => {
    return (
        <div>
            <Link to="/" className="logout p-1 ">Logout </Link>
        </div>
    )
}

export default Logout
