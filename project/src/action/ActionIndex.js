
import {
    CHANGE_SCREEN,
    INCREASE,
    DECREASE,
} from "./ActionType";

export const changeScreen = (value) => {
    return {
        type: CHANGE_SCREEN,
        value: value
    }
}

export const increaseAction = (value) => {
    return {
        type: INCREASE,
        value: value
    }
}

export const decreaseAction = (value) => {
    return {
        type: DECREASE,
        value: value
    }
}