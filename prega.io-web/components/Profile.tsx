/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { IUser } from '../interface/user'
import { daysToWeeks, differenceInDays } from 'date-fns'
import Chip from './shared/Chip'
import { CircularProgress } from '@mui/material'

interface Props {
    userData: IUser
}

const Profile: React.FC<Props> = ({ userData }) => {

    const pregnancyStartingDate = userData.account_created && new Date(userData.account_created?.seconds * 1000);
    const today = new Date();
    const daysGap = pregnancyStartingDate && differenceInDays(today, pregnancyStartingDate);
    const weeksGap = daysGap && daysToWeeks(daysGap);
    const progressBar =  daysGap && (daysGap/280)*100

    return (
        <div className=''>
            <div className=' sm:flex text-center sm:text-left text-white items-center bg-skin-tag_sec p-6 rounded-2xl my-10 pr-5'>
                {/* Profile Info */}
                <div className=" flex justify-center mb-5 sm:mb-0 ">
                    <img src={userData.image} alt="" className=' rounded-full w-28 mr-5 ring-2 ring-gray-300' />
                </div>
                <div>
                    {/* Profile Data */}
                    <p> <span className='font-medium mb-2' >Name :</span> {userData.name}</p>
                    <p><span className='font-medium mb-2'>Age :</span> {userData.age}</p>
                    <p> <span className='font-medium mb-2'>Blood Group :</span> {userData.blood_group} </p>
                    {userData.account_created?.seconds && <p> <span className=' font-medium mb-2'> Pregnancy Time : </span><>{weeksGap} Weeks </></p>}
                </div>
            </div>
            <div className='flex mt-10 items-center mb-10 lg:mb-0'>
                <div className=' aspect-square'>
                <CircularProgress variant="determinate" value={progressBar} thickness={22} size={100} sx={{mr: 5, color : '#416AD1', backgroundColor : "#EFF2FF" , borderRadius : '100%'}}/>
                </div>
                <p className=' text-xl'>Here is a pogress bar for your baby!</p>
            </div>
            <div className='mt-10 mb-10 lg:mb-0'>
                <p className='text-lg mb-2'>Current Medicines</p>
                <div className=' flex gap-4 flex-wrap'>
                    {userData.current_medicines?.map((med: string, i: number) => {
                        return <Chip name={med} key={i} />
                    })}
                </div>
            </div>
            <div className='mt-5 mb-10 lg:mb-0'>
                <p className='text-lg mb-2'>Diseases</p>
                <div className=' flex gap-4 flex-wrap'>
                    {userData.diseases?.map((med: string, i: number) => {
                        return <Chip name={med} key={i} />
                    })}
                </div>
            </div>
            <div className='mt-5 mb-10 lg:mb-0'>
                <p className='text-lg mb-2'>Allergies</p>
                <div className=' flex gap-4 flex-wrap'>
                    {userData.allergies?.map((med: string, i: number) => {
                        return <Chip name={med} key={i} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Profile