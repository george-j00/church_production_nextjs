import { ParishTeamParams } from "@/types";
import Image from "next/image";
import React from "react";

type ParishTeamsProps = {
  people: ParishTeamParams[];
  otherData: {
    title: string;
    description: string;
  };
  isLoading: boolean;
};

const ParishTeam = ({ people, otherData, isLoading }: ParishTeamsProps) => {
  return (
    <div className="bg-dotted-pattern bg-cover bg-primary-50">
      <div className="py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {otherData?.title}
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {otherData?.description}
            </p>
          </div>
          <ul
            role="list"
            className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
          >
            {isLoading ? (
              <li className="col-span-2 text-center">Loading members...</li>
            ) : (
              people?.map((person) => (
                <li key={person.name}>
                  <div className="flex items-center gap-x-6 rounded-full">
                    {
                      person.image ? (
                        <Image
                          className="h-32 w-32 rounded-full"
                          src={person.image}
                          alt={`${person.name}'s picture`}
                          height={1000}
                          width={1000}
                        />
                      ) : null
                    }
                    <div>
                      <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                        {person?.name}
                      </h3>
                      <p className="text-sm font-semibold leading-6 text-indigo-600">
                        {person?.houseName}
                      </p>
                      <p className="text-sm font-semibold leading-6 text-indigo-600">
                        {person?.phoneNumber}
                      </p>
                    </div>
                  </div>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ParishTeam;
