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
    houseName:string;
    image:string;
    category:string;
}

export type EventType = {
    _id: string;
    eventDate:  string;
    eventLocation: string;
    eventTheme: string;
    eventTime: string;
    endDate: string;
    endTime: string;
    status: string;
    eventDescription?: string;
    imageUrls: string[]; 
  };
  

export type EventStatus = "Completed" | "Upcoming" | "Ongoing" ;