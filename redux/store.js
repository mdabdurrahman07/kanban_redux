import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./features/tasks//tasksSlice.js"
const store = configureStore({
  reducer: {
    tasks: taskSlice
  },
  
});

export default store
