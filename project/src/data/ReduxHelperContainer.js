import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const CHANGE_SCREEN = "CHANGE_SCREEN";

function changeScreen(value) {
    return value;
}


function mapStateToProps(state) {
    return {
        CurrentScreen: state.CurrentScreen
    }
}

function mapDispatchToProps(dispatch) {
    return {
        changeScreen: (value) => {
            dispatch(changeScreen(value));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps);