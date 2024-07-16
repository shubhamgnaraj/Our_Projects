import React from 'react'
import { useParams } from 'react-router-dom'


function User() {
    const params = useParams()
  return (
    <h1> i am {params.username}</h1>
  )
}

export default User