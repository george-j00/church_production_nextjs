"use client"

import ParishTeam from "@/components/pages/core-team/ParishTeam"
import { fetchParishMembers, fetchRegisters } from "@/lib/actions/user.actions"
import Link from "next/link"
import React, { useState } from "react"
import useSWR from "swr"

const ParishPage = () => {
  const spiritualLeaders = {
    title: "Meet our spiritual Leaders",
    description:
      "At our church, we are blessed with a dedicated and compassionate leadership team committed to guiding and supporting our congregation.",
  }
  const leadershipTeam = {
    title: "Meet our leadership",
    description:
      "The Parish Council is composed of diverse members from our congregation, each bringing unique perspectives and skills. They meet regularly to discuss and plan initiatives that foster spiritual growth, community engagement, and service to others.",
  }
  const parishCouncilMembers = {
    title: "Parish Council Members",
    description:
      "The Parish Council is composed of diverse members from our congregation, each bringing unique perspectives and skills.",
  }
  const eminentPersons = {
    title: "Distinguished members",
    description:
      "Our church is privileged to be associated with several eminent personalities whose remarkable achievements extend far beyond our community.",
  }
  const specialInvitees = {
    title: "Special Invitees",
    description:
      "Our church is privileged to be associated with several special invitees whose remarkable achievements extend far beyond our community.",
  }

  // SWR fetcher function
  const fetcher = async () => {
    const members = await fetchParishMembers()
    return members
  }
  const registerFetcher = async () => {
    const registers = await fetchRegisters()
    return registers
  }

  // Use SWR for caching and data fetching
  const { data: parishMembers, error } = useSWR("parishMembers", fetcher)
  const { data: registers, error: registerError } = useSWR(
    "registers",
    registerFetcher
  )

  // Filtering data
  const spiritualLeadersList = parishMembers?.filter(
    (member: { category: string }) => member.category === "spiritual-leaders"
  )
    const leadershipTeamList = parishMembers?.filter(
      (member: { category: string }) => member.category === "parish-council"
    )
  const eminentPersonsList = parishMembers?.filter(
    (member: { category: string }) =>
      member.category === "eminent-personalities"
  )
  const parishMembersList = parishMembers?.filter(
    (member: { category: string }) => member.category === "parish-members"
  )

  const specialInviteesList = parishMembers?.filter(
    (member: { category: string }) => member.category === "special-invitee"
  )

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Registers Section */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Important Registers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {registers?.map((register: { name: string; link: string }) => (
              <RegisterButton
                key={register.name}
                href={register.link}
                label={register.name}
              />
            ))}
          </div>
        </div>

        {/* Teams Section */}
        <div className="space-y-12">
          <ParishTeam
            people={spiritualLeadersList || []}
            otherData={spiritualLeaders}
            isLoading={!spiritualLeadersList && !error}
          />
           <ParishTeam
            people={specialInviteesList || []}
            otherData={specialInvitees}
            isLoading={!specialInviteesList && !error}
          />
          <ParishTeam
            people={leadershipTeamList || []}
            otherData={leadershipTeam}
            isLoading={!leadershipTeamList && !error}
          />
          <ParishTeam
            people={parishMembersList || []}
            otherData={parishCouncilMembers}
            isLoading={!parishMembersList && !error}
          />
          <ParishTeam
            people={eminentPersonsList || []}
            otherData={eminentPersons}
            isLoading={!eminentPersonsList && !error}
            type="eminent-personalities"
          />
        </div>
      </div>
    </div>
  )
}

const RegisterButton = ({ href, label }: { href: string; label: string }) => {
  return (
    <Link
      href={href}
      className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl shadow-md hover:from-blue-700 hover:to-blue-800 transition duration-300 ease-in-out text-sm font-medium"
      target="_blank"
      rel="noopener noreferrer"
    >
      {label}
    </Link>
  )
}

export default ParishPage
