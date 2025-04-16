import { ParishTeamParams } from "@/types"
import Image from "next/image"
import React from "react"

type ParishTeamsProps = {
  people: ParishTeamParams[]
  otherData: {
    title: string
    description: string
  }
  isLoading: boolean
  type?: string
}

const ParishTeam = ({
  people,
  otherData,
  isLoading,
  type,
}: ParishTeamsProps) => {
  return (
    <div className="bg-dotted-pattern bg-primary-50">
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {otherData?.title}
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {otherData?.description}
            </p>
          </div>
          
          {isLoading ? (
            <div className="text-center mt-12">Loading members...</div>
          ) : (
            <div className={`mx-auto mt-12 grid gap-8 ${type === "eminent-personalities" ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'}`}>
              {people?.map((person) => (
                <div key={person.name} className={`flex ${type === "eminent-personalities" ? 'flex-col sm:flex-row items-start' : 'items-center'} gap-6 bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow`}>
                  {person.image && (
                    <div className="flex-shrink-0">
                      <Image
                        className={`rounded-full object-cover ${type === "eminent-personalities" ? 'h-40 w-40 sm:h-48 sm:w-48' : 'h-32 w-32'}`}
                        src={person.image}
                        alt={`${person.name}'s picture`}
                        height={1000}
                        width={1000}
                      />
                    </div>
                  )}
                  
                  <div className={`flex-1 min-w-0 ${type === "eminent-personalities" ? 'mt-4 sm:mt-0' : ''}`}>
                    <h3 className="text-xl font-semibold leading-7 tracking-tight text-gray-900 mb-2">
                      {person?.name}
                    </h3>
                    
                    {type === "eminent-personalities" ? (
                      <div className="space-y-2">
                        <p className="text-sm leading-6 text-indigo-600 whitespace-pre-line">
                          {person?.houseName}
                        </p>
                        {person?.phoneNumber && (
                          <p className="text-sm font-medium text-gray-600 mt-2">
                            Contact: {person?.phoneNumber}
                          </p>
                        )}
                      </div>
                    ) : (
                      <>
                        <p className="text-sm font-semibold leading-6 text-indigo-600">
                          {person?.houseName}
                        </p>
                        <p className="text-sm font-semibold leading-6 text-indigo-600 mt-1">
                          {person?.phoneNumber}
                        </p>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ParishTeam
