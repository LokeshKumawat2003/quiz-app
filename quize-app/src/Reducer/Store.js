import { configureStore } from "@reduxjs/toolkit";
import Productslice from "./quizAction";
import  seroseSlice  from "./Scrose";
// import  Productslice  from "./quizAction";

export const store = configureStore({
  reducer: {
    quiz: Productslice,
    count: seroseSlice,
  },
});
