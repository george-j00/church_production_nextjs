import React from 'react'
import { AddImageDialogBox } from '../add-image/AddImageDialogBox'

const GalleryManagement = () => {
  return (
    <div className='flex justify-center items-center mt-20 gap-5'>
      <p>Add Image of type jpeg, jpg, png</p>
      <AddImageDialogBox />
    </div>
  )
}

export default GalleryManagement