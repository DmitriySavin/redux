import { createSlice } from "@reduxjs/toolkit";
import statusFilters from "./constans";

const filtersInitialState = {
    status: statusFilters.all
}

export const filterSlice = createSlice({
    name: "filters",
    initialState: filtersInitialState,
    reducers: {
        setStatusFilters(state, action) {
            state.status = action.payload;
        }
    }
})

export const { setStatusFilters } = filterSlice.actions;
export const filtersReducer = filterSlice.reducer;