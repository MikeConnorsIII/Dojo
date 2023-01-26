import React from 'react'
import { useParams } from "react-router"


function Teams() {


    const {city, color} = useParams()

  return (
    <div>
        <h1>Teams</h1>
        <h2 style={{backgroundColor: color}}>Welcome to {city} </h2>
    </div>
  )
}

export default Teams