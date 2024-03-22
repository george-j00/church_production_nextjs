import React from 'react'

const VisionMission = () => {
  return (
   <>
        <div className="flex flex-col md:flex-row w-full mt-10 p-5">
          <div className="flex flex-col items-center md:w-1/2">
            <h2 className="text-3xl font-bold mb-8">Vision</h2>
            <div className="md:w-2/3 w-full">
              <p className="text-justify">
                We envision a vibrant and welcoming community where everyone
                feels empowered to explore their faith, connect with others, and
                live out their purpose in God's light. Through transformative
                experiences, we aim to inspire and equip individuals to deepen
                their relationship with Jesus Christ, impacting the world with
                love, compassion, and service.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center md:w-1/2 mt-5 md:mt-0">
            <h2 className="text-3xl font-bold mb-8">Mission</h2>
            <div className="md:w-2/3 w-full">
              <p className="text-justify">
                Our mission is to foster a thriving community of believers by
                providing engaging worship services, educational programs, and
                fellowship opportunities. We guide individuals on their faith
                journeys through Christ-centered teachings, compassionate care,
                and service opportunities, empowering them to use their talents
                for God's glory. By creating a welcoming space for exploration
                and growth, we strive to share the love of Christ with our
                neighbors and the world, building bridges and making a positive
                difference.
              </p>
            </div>
          </div>
        </div>
   </>
  )
}

export default VisionMission