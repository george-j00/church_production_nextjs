import { EventType } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";


 type ShowEventsProps = {
    events: EventType[],
    title:string;
}

const ShowEvents = ({events , title} : ShowEventsProps ) => {
  const router = useRouter();

  return (
    <>
      <div className="wrapper  p-8 ">
        <h1 className="text-4xl font-bold text-center mb-8">{title}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events?.map((event: EventType) => (
            <div
              key={event._id}
              className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer hover:shadow-xl"
              onClick={() => router.push(`events/${event?._id}`)}
            >
              <Image
                src={event.imageUrls?.[0]}
                alt={event.eventTheme}
                className="w-full h-48 object-cover"
                height={1000}
                width={1000}
              />
              <div className="p-4">
                <h2 className="text-2xl font-semibold mb-2">
                  {event?.eventTheme}
                </h2>
                <p className="text-gray-700 mb-4">{event?.eventDescription}</p>
                <div className="flex gap-5">
                  <p className="text-gray-500"> Start : {event?.eventDate}</p>
                  <p className="text-gray-500"> End : {event?.endDate}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ShowEvents;
