import React from 'react'

interface Props{
    name : string
}

const Tag : React.FC<Props> = ({name}) => {
  return (
    <span className=' bg-skin-tag px-4 py-1 text-xs rounded-xl ml-3 text-white'>
        {name}
    </span>
  )
}

export default Tag