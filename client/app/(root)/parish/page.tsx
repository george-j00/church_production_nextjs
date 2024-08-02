'use client'

import ParishTeam from '@/components/pages/core-team/ParishTeam'
import ParishMembersListPage from '@/components/pages/parish-memeber/ParishMembers'
import { fetchParishMembers } from '@/lib/actions/user.actions'
import { ParishTeamParams } from '@/types'
import React, { useState } from 'react'
import useSWR from 'swr'

const ParishPage = () => {
    const spiritualLeaders = {
      title : "Meet our spiritual Leaders",
      description:"At our church, we are blessed with a dedicated and compassionate leadership team committed to guiding and supporting our congregation."
    }
    const leadershipTeam = {
      title : "Meet our leadership",
      description:"The Parish Council is composed of diverse members from our congregation, each bringing unique perspectives and skills. They meet regularly to discuss and plan initiatives that foster spiritual growth, community engagement, and service to others."
    }
    const eminentPersons = {
      title : "Eminent personalities",
      description:"Our church is privileged to be associated with several eminent personalities whose remarkable achievements extend far beyond our community."
    }

    // SWR fetcher function
    const fetcher = async () => {
      const members = await fetchParishMembers();
      return members;
    };

    // Use SWR for caching and data fetching
    const { data: parishMembers, error } = useSWR('parishMembers', fetcher);

    // Filtering data
    const spiritualLeadersList = parishMembers?.filter((member: { category: string }) => member.category === 'spiritual-leaders');
    const leadershipTeamList = parishMembers?.filter((member: { category: string }) => member.category === 'parish-council');
    const eminentPersonsList = parishMembers?.filter((member: { category: string }) => member.category === 'eminent-personalities');

    return (
      <>
        <div className='flex flex-col gap-10'>
          {/* Static Content, visible while dynamic data loads */}
          <ParishTeam 
            people={spiritualLeadersList || []} 
            otherData={spiritualLeaders} 
            isLoading={!spiritualLeadersList && !error}
          />
          <ParishTeam 
            people={leadershipTeamList || []} 
            otherData={leadershipTeam} 
            isLoading={!leadershipTeamList && !error}
          />
          <ParishTeam 
            people={eminentPersonsList || []} 
            otherData={eminentPersons} 
            isLoading={!eminentPersonsList && !error}
          />
        </div>
      </>
    )
}

export default ParishPage;
