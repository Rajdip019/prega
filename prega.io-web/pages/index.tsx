import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/shared/Navbar'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Prega.io</title>
      </Head>
      <Navbar />
      <div className=' flex h-[87vh] items-center px-20'>
        <div className=' pr-20'>
          <h1 className=' text-4xl my-4 font-semibold'>You take care of your <span className=' text-blue-500'>baby</span></h1>
          <h1 className=' text-4xl mb-10 font-semibold'>We will take care of your <span className='text-blue-500'>documents.</span></h1>
          <p className=' text-gray-600'>Don't worry prega.io is complete sotuion of documents druing preganacy from sharing documents to svaing your personal moments and tour personal health during this crucial time.</p>
          <button className=' btn-blue bg-blue-500 mt-5'>Download App</button>
          <button className='btn-blue bg-gray-100 mt-5 text-black ml-5'>Explore</button>
        </div>
        <div>
          <img src="/home-image.png" alt="" className='mt-5 w-[800px]' />
        </div>
      </div>
    </div>
  )
}

export default Home
