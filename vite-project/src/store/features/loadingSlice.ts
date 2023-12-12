import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface loadingState {
  value: number;
}
const initialState: loadingState = {
  value: 0,
};
const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    incremented: (state) => {
      state.value += 1;
    },
    decremented: (state) => {
      if (state.value === 0) state.value = 0;
      else state.value -= 1;
    },
    setLoading(state, action: PayloadAction<number>) {
      return {
        ...state,
        value: action.payload,
      };
    },
  },
});
// console.log(loadingSlice);
export const { incremented, decremented, setLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
