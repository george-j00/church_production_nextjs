import React from "react";

type EventParam = {
  params: {
    eventId: string;
  };
};

const EventView = ({ params: { eventId } }: EventParam) => {
  return (
    <div className="wrapper">
      EventView{eventId}
    </div>
  );
};

export default EventView;
