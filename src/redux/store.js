import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./taskSlice.js";

const store = configureStore({
  reducer: {
    tasks: taskSlice.reducer,
  },
});
export default store;
