import { configureStore } from "@reduxjs/toolkit";
import getBookSlice from "./bookReducers";

const store = configureStore({
    reducer: {
        BooksinRedux: getBookSlice
    }
});
export default store;
