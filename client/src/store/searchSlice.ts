import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SearchState {
  cuisine: string;
  distance: number;
  budget: number;
  latitude: number;
  longitude: number;
  searchResults: any[];
}

const initialState: SearchState = {
  cuisine: "Choose a Cuisine",
  distance: 0,
  budget: 0,
  latitude: 0,
  longitude: 0,
  searchResults: [],
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setCuisine: (state, action: PayloadAction<string>) => {
      state.cuisine = action.payload;
    },
    setDistance: (state, action: PayloadAction<number>) => {
      state.distance = action.payload;
    },
    setBudget: (state, action: PayloadAction<number>) => {
      state.budget = action.payload;
    },
    setLatitude: (state, action: PayloadAction<number>) => {
      state.latitude = action.payload;
    },
    setLongitude: (state, action: PayloadAction<number>) => {
      state.longitude = action.payload;
    },
    setSearchResults: (state, action: PayloadAction<any[]>) => {
      state.searchResults = action.payload;
    },
    resetSearch: () => {
      cuisine: "";
      distance: 0;
      budget: 0;
      latitude: 0;
      longitude: 0;
    },
  },
});

export const {
  setCuisine,
  setDistance,
  setBudget,
  setLatitude,
  setLongitude,
  resetSearch,
  setSearchResults,
} = searchSlice.actions;

export default searchSlice.reducer;
