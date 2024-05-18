export type EventParams = {
    _id: string;
    eventDate: string;
    eventLocation: string;
    eventTheme: string;
    eventTime: string;
    eventDescription?: string;
}

export type ParishTeamParams = {
    name:string;
    role:string;
    imageUrl:string;
}