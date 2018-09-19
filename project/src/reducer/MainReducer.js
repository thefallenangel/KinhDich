import { INCREASE, DECREASE } from "../action/ActionType";

const MainReducer = (value = 0, action) => {
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

export default MainReducer;