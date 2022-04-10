import { createSlice } from '@reduxjs/toolkit';

export const movie_or_series_slice = createSlice({
    name: "movie_or_series_view",
    initialState: {objectdDetails: {}},
    reducers: {
        create: (state, action) => {
            state.objectdDetails = action.payload
        }
    }
})

export const getObjectDetails = state => state.movie_or_series_view.objectdDetails
export const {create} = movie_or_series_slice.actions
export default movie_or_series_slice.reducer