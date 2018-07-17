import { NavigationActions } from "react-navigation";
module.exports = {
    CURSTATE: "",
    NAVI: {},

    Navigate(routerName, params) {
        if (this.NAVI && routerName != this.CURSTATE) {
            this.NAVI.navigate(routerName, params);
        }
    },
    NaviBack(routerName, params) {
        if (this.NAVI && routerName == this.CURSTATE) {
            this.NAVI.goBack(null);
            if (params) {
                this.NAVI.setParams(params); //.state.params.onSelect(params);
            }
        }
    },
}