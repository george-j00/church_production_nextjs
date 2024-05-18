import { AddRelicDialogBox } from '@/components/admin/add-relics/AddRelicsDialogBox'
import React from 'react'

const page = () => {
  return (
   <>
     <div className='flex justify-center items-center mt-20 gap-5'>
      <p>Add Image of type jpeg, jpg, png</p>
      <AddRelicDialogBox />
    </div>
   </>
  )
}

export default page