(window.isFunction = function isFunction(fn) {
    //convert the function to a string and determine its type based upon its serialized value.
    return Object.prototype.toString.call(fn) === "[object Function]";
})