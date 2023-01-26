import React, { useState } from 'react'
import {useNavigate } from 'react-router-dom'


const Form = () => {
    const [selection, setSelection] = useState("people")
    const [id, setId] = useState('')
    const navigate = useNavigate()
    
    const handleSubmit = (e) => {
        e.preventDefault()
        navigate(`/${selection}/${id}`)
}

return(
    <div>
        <form onSubmit={handleSubmit}>
            <h1>Search for?</h1>
            <select name="form-select" onChange={(e) => setSelection(e.target.value)}>
                <option value="people">People</option>
                <option value="planets">Planet</option>
            </select>
            <input type="number" name="id" onChange={(e)=> setId(e.target.value)} />
            <button type="submit">Search</button>
        </form>
    </div>
)
}

export default Form