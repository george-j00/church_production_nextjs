import Image from "next/image"

const StAntonyPage = () => {
  return (
    <div className="flex justify-center p-5 ">
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden max-w-6xl">
        <div className="flex-1">
          <Image
            src="/assets/stantony1.jpg"
            alt="St. Antony"
            className="w-full h-full object-cover"
            width={500}
            height={500}
          />
        </div>
        <div className="flex-1 p-8">
          <h1 className="text-3xl font-bold mb-4">St. Antony</h1>
          <p className="text-gray-600 leading-relaxed">
            St. Antony, also known as Antony the Great, is revered as the father
            of monasticism. His life of solitude, prayer, and dedication to God
            serves as a model of spiritual discipline and devotion. His legacy
            has inspired generations to seek a deeper relationship with God
            through a life of simplicity and sacrifice. The St. Antony Jacobian
            Syrian Cathedral is dedicated in his honor, and it stands as a
            testament to his unwavering faith and the impact he has made on
            Christian spirituality.
          </p>
        </div>
      </div>
    </div>
  )
}

export default StAntonyPage
