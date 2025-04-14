import { Calendar, Clock } from "lucide-react"
import Image from "next/image"

const RegularServicesPage = () => {
  const regularServices = [
    {
      title: "Sunday Services",
      services: [
        {
          name: "Morning Prayer",
          time: "7:45 AM",
          description: "Start your Sunday with morning prayers",
          image: "https://images.unsplash.com/photo-1457139621581-298d1801c832?q=80&w=2903&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          name: "Holy Qurbana",
          time: "8:30 AM",
          description: "Join us for the Divine Liturgy",
        }
      ],
      frequency: "Every Sunday"
    },
    {
      title: "Evening Service",
      services: [
        {
          name: "Evening Prayer",
          time: "7:30 PM",
          description: "Join us for evening prayers",
        }
      ],
      frequency: "Every Saturday"
    }
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="relative w-full h-[300px] mb-12 rounded-xl overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1438032005730-c779502df39b?q=80&w=1920&auto=format&fit=crop"
          alt="Church Interior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white text-center">Regular Services</h1>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {regularServices.map((serviceGroup, index) => (
          <div 
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
          >
            <div className="mb-4">
              <h2 className="text-2xl font-semibold text-primary mb-2">{serviceGroup.title}</h2>
              <p className="text-gray-600 flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {serviceGroup.frequency}
              </p>
            </div>
            
            <div className="space-y-4">
              {serviceGroup.services.map((service, serviceIndex) => (
                <div key={serviceIndex} className="border-l-4 border-primary pl-4">
                  <h3 className="text-xl font-semibold">{service.name}</h3>
                  <p className="text-gray-600 flex items-center gap-2 mt-1">
                    <Clock className="w-4 h-4" />
                    {service.time}
                  </p>
                  <p className="text-gray-500 text-sm mt-1">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RegularServicesPage
