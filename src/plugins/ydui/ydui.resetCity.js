!function() {
    var citys = [{
        "n": "北京",
        'id': 1,
        "c": [{
            "a": [
                {
                    n:  "城区",
                    id: 2,
                }
            ],
            "n": "密云区",
            'id': 1,
        }]
    },];
    if (typeof define === "function") {
        define(citys)
    } else {
        window.YDUI_CITYS = citys
    }
}();
