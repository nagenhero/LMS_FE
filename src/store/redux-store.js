import { configureStore } from "@reduxjs/toolkit";
import pizzaReducer from "../slicer/pizzaSlice";
import bookReducer from "../slicer/bookSlice";
// import userReducer from "../slice/userSlice";
export default configureStore({
  reducer: {
    pizzaInfo: pizzaReducer,
    bookInfo: bookReducer,
    // transaction: transactionReducer
  },
});
