
import Image from "next/image";

const Entombed = () => {
  const entombedList = [
    {
      image: "/assets/entombed/entombed1.JPG",
      name: "Rev. Fr. P.I. Joseph Mulanthuruthy",
    },
    {
      image: "/assets/entombed/entombed2.JPG",
      name: "V.Rev. Thomas Abraham Cor.Episcopa",
    },
    {
      image: "/assets/entombed/entombed3.jpg",
      name: "Geevarghese mor poly carpose",
    },
  ];


  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-6 text-indigo-500">
        Entombed in the church 
      </h2>
      <div className="grid md:grid-cols-3 gap-6 grid-cols-1">
        {entombedList?.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
          >
            <div className="overflow-hidden rounded-lg shadow-md w-72 h-82">
              <Image
                width={300} // Set the width to 300
                height={300} // Set the height to 300
                src={item?.image}
                alt={`Church Image ${index + 1}`}
                className="w-full h-full object-cover cursor-pointer"
              />
            </div>

            <div className="md:pl-4 mt-4 text-justify">
              <h3 className="text-lg font-bold mb-2">{item?.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Entombed;
