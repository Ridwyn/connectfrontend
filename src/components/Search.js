import React from 'react'
import { useState,useEffect } from 'react'

const Search = () => {
    return (
        <div>
            <form className="d-flex me-auto my-2">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
    )
}

export default Search
