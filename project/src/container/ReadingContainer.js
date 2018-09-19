import { connect } from "react-redux";
import ReadingView from "../screen/Reading";

import {
    increaseAction,
    decreaseAction
} from "../action/ActionIndex";


const mapStateToProps = (state) => {
    return {
        CurrentNumber: state.MainReducer ? state.MainReducer : 0
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrease: (value) => {
            dispatch(increaseAction(value));
        },
        onDecrease: (value) => {
            dispatch(decreaseAction(value));
        }
    };
}

const ReadingContainer = connect(mapStateToProps, mapDispatchToProps)(ReadingView);
export default ReadingContainer;