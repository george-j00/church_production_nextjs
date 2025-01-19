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

  return (
    <>
      <div className="py-10 px-10">
        <h2 className="text-2xl font-bold mb-5">Important Registers</h2>
        <div className="grid grid-cols-2 sm:flex sm:flex-row gap-5">
          {registers?.map(
            (register: { name: string; link: string }) => (
              <RegisterButton
                key={register.name}
                href={register.link}
                label={register.name}
              />
            )
          )}
        </div>
      </div>
      <div className="flex flex-col gap-10">
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
          people={parishMembersList || []}
          otherData={parishCouncilMembers}
          isLoading={!parishMembersList && !error}
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

const RegisterButton = ({ href, label }: { href: string; label: string }) => {
  return (
    <Link
      href={href}
      className="min-w-[12rem] w-auto px-6 h-12 flex items-center justify-center bg-primary text-white rounded-full shadow-md hover:bg-blue-700 transition duration-300 ease-in-out whitespace-nowrap overflow-hidden text-ellipsis"
      target="_blank"
      rel="noopener noreferrer"
    >
      {label}
    </Link>
  )
}

export default ParishPage
