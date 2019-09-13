import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => (
  <>
  <h1>
    Sinatra doesn't know this ditty.
  </h1>
  <Link to='/'>Back Home</Link>
 </>
)

export default NotFound