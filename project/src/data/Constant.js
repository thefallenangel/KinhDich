import { NavigationActions } from "react-navigation";
module.exports = {
    CURSTATE: "",
    NAVI: {},
    IS_RECORD: false,
    RECORD_PATH: "",

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
    randomID(extension, length = 10) {
        var source = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var result = "";
        for (var i = 0; i < length; i++) {
            var index = Math.floor(Math.random() * source.length);
            result += source[index];
        }
        if (extension)
            return result + "." + extension;
        else
            return result;
    }
}