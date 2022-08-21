import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
            <div className='bg-white shadow-lg text-4xl py-7 px-8 lg:px-20 flex'>
                <Link href='/' passHref>
                    <div className='flex items-center cursor-pointer'>
                        <img src="/logo.png" alt="" />
                        <p className=' ml-5'>Prega.io</p>
                    </div>
                </Link>
            </div>
    )
}

export default Navbar