import React from 'react'

const Error = () => {
  return (
    <div className=' flex justify-center items-center h-screen'>
      <div>
        <div className=' flex justify-center'>
          <img src="/invalid_link.svg" alt="" className=' w-72 mb-16' />
        </div>
        <p className=' text-4xl mx-5'>This Link is <span className=' text-red-500'>expired</span> or the URL is <span className=' text-red-500'>invalid</span>!</p>
      </div>
    </div>
  )
}

export default Error