import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        name: 'Iron Man',
        description: "Genius Billionaire Playboy Philanthropist",
        comic_appeared_in: '1',
        super_power: 'Suit of Armor',
        date_created: '05-02-2008'
    },
    reducers: {
        chooseName: (state, action) => { state.name = action.payload},
        chooseDescription: (state, action) => { state.description = action.payload},
        chooseComic: (state, action) => { state.comic_appeared_in = action.payload},
        chooseSuperpower: (state, action) => { state.super_power = action.payload},
        chooseDate: (state, action) => { state.date_created = action.payload}
    }
})

// Export Reducer
export const reducer = rootSlice.reducer;
export const { chooseName, chooseDescription, chooseComic, chooseSuperpower, chooseDate } = rootSlice.actions;