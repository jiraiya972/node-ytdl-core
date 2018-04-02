// nativescript-http module
const http = require("tns-core-modules/http");

module.exports = (url, options, callback) => {
    const requestOptions = Object.assign({url}, options);
    return http.request(requestOptions).then(function (response) {
        callback && callback(null, response);
    }, function (e) {
        callback && callback(e, null);
    });
}