import React from 'react'

const Error = () => {
  return (
    <div style={{"height":"100vh"}}  className="d-flex align-items-center justify-content-center text-center flex-column err-bg">
       <h1 style={{"fontWeight":"900","fontSize":"3rem"}}>WE ARE SORRY, PAGE NOT FOUND</h1> 
       <p className='w-50 my-3'>THE PAGE YOU HAVE BEEN LOADING FOR MIGHT HAD REMOVED OR IS TEMPORARILY UNAVALABE</p>
       <a className='btn btn-primary px-3' href='/' style={{"borderRadius":"30px"}}>Back TO HOME PAGE</a>
    </div>
  )
}

export default Error