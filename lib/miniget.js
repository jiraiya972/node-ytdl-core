// nativescript-http module
const http = require("tns-core-modules/http");

const validateCode = response => {
    if (response.statusCode >= 200 && response.statusCode < 300) {
        return response;
    }
    throw new Error(
        `Response with code: ${
        response.statusCode
      }\nContent: ${response.content.toString()}`
    );
};

module.exports = (url, options, callback) => {
    const requestOptions = Object.assign({
        url
    }, options);
    return http.request(requestOptions)
    .then(validateCode)
    .then(function (response) {
        callback && callback(null, response, response.content.toString());
    }, function (e) {
        callback && callback(e, null);
    });
}