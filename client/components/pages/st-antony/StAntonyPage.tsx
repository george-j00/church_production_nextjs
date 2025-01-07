import Image from "next/image"

const StAntonyPage = () => {
  return (
    <div className="flex justify-center p-5">
      <div className="flex flex-col space-y-6 max-w-6xl">
        {/* Combined Content Section */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Hero Section - Now integrated */}
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3">
              <Image
                src="/assets/stantonyImage.png"
                alt="St. Antony"
                className="w-full h-full object-cover"
                width={500}
                height={500}
              />
            </div>
            <div className="md:w-2/3 p-8">
              <h1 className="text-3xl font-bold mb-4">St. Antony of Egypt</h1>
              <p className="text-gray-600 leading-relaxed">
                St. Antony (251 AD - 356 AD), also known as Antony the Great, is revered as the Father
                of Christian Monasticism. His life of solitude, prayer, and dedication to God
                serves as a model of spiritual discipline and devotion.
              </p>
            </div>
          </div>

          {/* Historical Content - Now in the same container */}
          <div className="px-8 pb-8 py-5">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Early Life</h2>
                <p className="text-gray-600 leading-relaxed">
                  Born in Coma, Egypt, into a wealthy Christian family, Antony&apos;s life changed dramatically
                  after hearing the Gospel passage from Matthew 19:21. Inspired, he distributed his
                  inheritance to the poor and dedicated his life to God.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Life in Solitude</h2>
                <p className="text-gray-600 leading-relaxed">
                  At age 20, Antony retreated to the desert as a hermit. He spent years battling spiritual
                  temptations, famously depicted in Christian art as &quot;The Temptations of Saint Antony.&quot;
                </p>  
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Father of Monasticism</h2>
                <p className="text-gray-600 leading-relaxed">
                  Though not the first hermit, Antony organized one of the first Christian monastic
                  communities in the Egyptian desert. His example inspired countless others to adopt
                  the monastic life, earning him the title &quot;Father of Monasticism.&quot;
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Legacy and Influence</h2>
                <p className="text-gray-600 leading-relaxed">
                  St. Antony&apos;s life was documented by Saint Athanasius in &quot;The Life of Antony,&quot; which
                  helped spread monasticism across the Roman Empire. His spiritual struggles have been
                  depicted in numerous works of art by masters like Hieronymus Bosch and Salvador Dalí.
                  He is celebrated on January 17th in both Eastern Orthodox and Roman Catholic traditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StAntonyPage
