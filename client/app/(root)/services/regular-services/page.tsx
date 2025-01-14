import { Calendar, Clock } from "lucide-react"

const RegularServicesPage = () => {
  const regularServices = [
    {
      name: "Evening Prayer",
      time: "7:00 PM",
      frequency: "Daily",
      description: "Join us every evening for communal prayer",
    },
    {
      name: "Sunday Morning Prayer",
      time: "7:45 AM",
      frequency: "Every Sunday",
      description: "Start your Sunday with morning prayers",
    },
    {
      name: "Holy Qurbana",
      time: "8:30 AM",
      frequency: "",
      description: "",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Regular Services</h1>
      
      <div className="grid md:grid-cols-3 gap-6">
        {regularServices.map((service, index) => (
          <div 
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center mb-4">
              <h2 className="text-xl font-semibold">{service.name}</h2>
            </div>
            
            <div className="space-y-2">
              <p className="text-lg font-medium text-primary">
                {service.time}
              </p>
              <p className="text-gray-600">
                {service.frequency}
              </p>
              <p className="text-gray-500 text-sm">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RegularServicesPage
