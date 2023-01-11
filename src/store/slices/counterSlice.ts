import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Define a type for the slice state
interface PhotoState {
  photos: object[];
  loading: boolean;
  errors: string;
}

// Define the initial state using that type
const initialState: PhotoState = {
  photos: [],
  loading: false,
  errors: "",
};

export const photoSlice = createSlice({
  name: "photos",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.loading = payload;
    },

    setErrors: (state, { payload }: PayloadAction<string>) => {
      state.errors = payload;
    },

    setPhotos: (state, { payload }: PayloadAction<object[]>) => {
      state.photos = payload;
    },
  },
});

export const { setLoading, setErrors, setPhotos } = photoSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const photosSelector = ({ photosStore }: RootState) => photosStore;

export default photoSlice.reducer;
