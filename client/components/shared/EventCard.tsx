import React from 'react'

type eventCardProps = {
    title:string;
    description:string;
}

const EventCard = ({ title, description } : eventCardProps) => {
  return (
    <>
      <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col max-w-md mt-5">
      <div className="px-6 py-4 flex flex-col justify-between">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
    </>
  )
}

export default EventCard