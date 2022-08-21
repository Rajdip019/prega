import React from 'react'

interface Props{
    name : string
}

const Chip : React.FC<Props> = ({name}) => {
  return (
    <div className=' bg-skin-tag px-4 py-2 text-md rounded-xl text-white'>
        {name}
    </div>
  )
}

export default Chip