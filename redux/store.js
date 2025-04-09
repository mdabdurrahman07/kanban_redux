import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./features/tasks/tasksSlice.js";
import userSlice from "./features/user/userSlice.js"
const store = configureStore({
  reducer: {
    tasks: taskSlice,
    userSlice : userSlice,
  },
});

export default store;
