import { INCREASE, DECREASE } from "../action/ActionType";

const ReadingReducer = (value = 0, action) => {
    switch (action.type) {
        case INCREASE: {
            return ++value;
        }
        case DECREASE: {
            return --value;
        }
        default: {
            return value
        }
    }
}

export default ReadingReducer;