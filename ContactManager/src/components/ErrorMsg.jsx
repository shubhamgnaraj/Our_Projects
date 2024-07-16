import React from 'react'

function ErrorMsg({error}) {
  return (
    {error} && <p style={{ color: "red" }}>{error}</p>
  )
}

export default ErrorMsg;