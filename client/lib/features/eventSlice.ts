    
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    events: null,

}

export const eventSlice = createSlice({
    name: "event",
    initialState,   
    reducers: { 
        setEvents: (state, action) => {
            console.log('action payload:', action.payload);
            state.events = action.payload.events;
        },
    },
    
});

export const { setEvents } = eventSlice.actions;
export default eventSlice.reducer;