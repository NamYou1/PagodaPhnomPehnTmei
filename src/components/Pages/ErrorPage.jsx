import React from 'react'
import NotFound from "../../assets/notfound.png"
import { Link } from 'react-router-dom'
const ErrorPage = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <div>
        <Link to="/" className='btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl'>Back </Link>
        {/* <h1 className='text-6xl font-bold text-primary'>404 - Page Not Found</h1> */}
      </div>
      <img className='w-lg ' src={NotFound} alt="Not Found" />
    </div>
  )
}

export default ErrorPage
