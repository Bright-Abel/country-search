import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface initialStateProps {
  search: string;
  data: Country[];
  filtered_data: Country[];
}

const initialState: initialStateProps = {
  search: "",
  data: [],

  filtered_data: [],
};

const featureSlice = createSlice({
  name: "slices",
  initialState,
  reducers: {
    fetchAndSort: (state, { payload }: PayloadAction<Country[]>) => {
      state.data = payload;
      state.filtered_data = payload;
    },

    sortData: (state, { payload }: PayloadAction<string>) => {
      state.search = payload;

      state.filtered_data = state.data.filter((item) =>
        item.name.common.toLowerCase().includes(payload.toLowerCase())
      );
    },
  },
});

export const sliceReducers = featureSlice.reducer;
export const { fetchAndSort, sortData } = featureSlice.actions;
