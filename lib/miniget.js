// nativescript-http module
const http = require("http");

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
        url,
        method: "GET",
    }, options);
    return http.request(requestOptions)
    .then(validateCode)
    .then(function (response) {
        callback(null, response, response.content.toString());
    }).catch( (error) => {
        callback(error, null);
        throw error;
    });
}