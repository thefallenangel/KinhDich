import { combineReducers } from "redux";
import MainReducer from "./MainReducer";
import ReadingReducer from "./ReadingReducer";

const AllReducer = combineReducers({
    MainReducer,
    ReadingReducer,
})

export default AllReducer;