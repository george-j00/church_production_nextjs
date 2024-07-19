'use client'

import ParishTeam from '@/components/pages/core-team/ParishTeam'
import ParishMembersListPage from '@/components/pages/parish-memeber/ParishMembers'
import { fetchParishMembers } from '@/lib/actions/user.actions'
import { ParishTeamParams } from '@/types'
import React, { useEffect, useState } from 'react'

const ParishPage = () => {

    const spiritualLeaders = {
      title : "Meet our spiritual Leaders",
      description:"At our church, we are blessed with a dedicated and compassionate leadership team committed to guiding and supporting our congregation"
    }
    const leadershipTeam = {
      title : "Meet our leadership",
      description:"The Parish Council is composed of diverse members from our congregation, each bringing unique perspectives and skills. They meet regularly to discuss and plan initiatives that foster spiritual growth, community engagement, and service to others. "
    }
    const eminenetPersons = {
      title : "Eminent personalities",
      description:"Our church is privileged to be associated with several eminent personalities whose remarkable achievements extend far beyond our community."
    }

    const [parishMembers , setParishMembers ] = useState<ParishTeamParams[]>();


    useEffect(() =>  {
      const fetchMembers = async () => {
        const members  = await fetchParishMembers()
        setParishMembers(members);
      }

      fetchMembers()

    }, [])

    const spiritualLeadersList = parishMembers?.filter(member => member.category === 'spiritual-leaders')
    const leadershipTeamList = parishMembers?.filter(member => member.category === 'parish-council')
    const eminenetPersonsList = parishMembers?.filter(member => member.category === 'eminent-personalities')
    // const parishMembersList = parishMembers?.filter(member => member.category === 'parish-members')
    

      
  return (
    <>
    {
      !parishMembers && <div className='flex justify-center items-center h-screen '> Loading ... </div>
    }
    <div className='flex flex-col gap-10'>
     {spiritualLeadersList && <ParishTeam people={spiritualLeadersList} otherData= {spiritualLeaders}/>} 
     {leadershipTeamList && <ParishTeam people={leadershipTeamList} otherData= {leadershipTeam}/>} 
     {eminenetPersonsList && <ParishTeam people={eminenetPersonsList}  otherData= {eminenetPersons}/>} 
      {/* <div className="wrapper flex flex-col mt-14">
        <h1 className="text-3xl text-center font-bold">Parish <span className="text-indigo-600">Members</span> </h1>
        <div className='mt-10'>
            {parishMembersList && <ParishMembersListPage people={parishMembersList} />}
        </div>
      </div> */}
    </div>
    </>
  )
}

export default ParishPage