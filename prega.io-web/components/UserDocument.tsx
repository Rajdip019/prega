/* eslint-disable @next/next/no-img-element */
import { doc } from 'firebase/firestore'
import React from 'react'
import { IDocuments } from '../interface/document'
import { Document, Page, pdfjs } from 'react-pdf';
import Tag from './shared/Tag';
import { format } from 'date-fns';
import AttachFileIcon from '@mui/icons-material/AttachFile';

interface Props {
  userDocument: IDocuments
}

// pdfjs.GlobalWorkerOptions.workerSrc = 'pdf.worker.min.js';
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

const UserDocument: React.FC<Props> = ({ userDocument }) => {

  const dateFormatted = userDocument.date && format(new Date(userDocument.date.seconds * 1000), 'do LLLLLL, yyyy');

  return (
    <>
      <p className=' text-xl mt-10'>{dateFormatted}</p>
      <div className='md:flex bg-skin-main my-5 rounded-2xl p-8'>
        <div>
          <div className=' sm:flex justify-between items-start'>
            <p className=" text-2xl flex items-center">{userDocument.title}<Tag name={userDocument.type} /></p>
            {userDocument.doc_format === 'application/pdf' && (
              <a href={userDocument.doc_url} target="_blank">
                <button className=' btn-blue bg-skin-tag_sec  py-2 mt-2 sm:mt-0'>View Pdf</button>
              </a>
            )
            }
          </div>
          {userDocument.doctor_clinic && <p className='mt-3'> <span className=' font-medium'>Doctor/Clinic : </span> {userDocument.doctor_clinic}</p>}
          {userDocument.doc_url && (
            <div className=' flex items-center mt-3'>
              <AttachFileIcon fontSize='small' sx={{ mr: 1 }} />
              <p className='font-medium'>Document attached</p>
              <Tag name={userDocument.doc_type!} />
            </div>
          )}
          {userDocument.description && (
            <>
              <p className=' font-medium mt-3'>Description</p>
              <p className='mt-1'>{userDocument.description}</p>
            </>
          )}
        </div>
        <div>
          {userDocument.doc_url ? (
            <div>
              {userDocument.doc_format !== 'application/pdf' && (
                <a href={userDocument.doc_url} target="_blank" rel="noreferrer">
                  <img src={userDocument.doc_url} alt="" className='w-full rounded-xl border-2 border-black mt-8 md:mt-0' />
                </a>
              )}
            </div>
          ) : (null)}
        </div>
      </div>
    </>
  )
}

export default UserDocument