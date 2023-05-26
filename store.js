import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./src/app/redux/postSlice";

// Import your reducers here
// import yourReducer from "./yourReducer";

const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});

export default store;

// Optional: Create a custom hook to get access to dispatch
// export const useAppDispatch = () => useDispatch();
