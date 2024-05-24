export type EventParams = {
    _id: string;
    eventDate: string;
    eventLocation: string;
    eventTheme: string;
    eventTime: string;
    eventDescription?: string;
    eventImages? : null;
}

export type ParishTeamParams = {
    name:string;
    role:string;
    imageUrl:string;
}

export type EventType = {
    _id: string;
    eventDate: Date;
    eventLocation: string;
    eventTheme: string;
    eventTime: string;
    endDate: Date;
    endTime: string;
    status: string;
    eventDescription?: string;
    imageUrls: string[]; 
  };
  

export type EventStatus = "Completed" | "Upcoming" | "Ongoing" ;