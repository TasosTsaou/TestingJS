/*
Defines generic wrapping function, taking as
parameters an object whose method is to be wrapped,
name of object method to be wrapped, and function
to be executed in place of original method.
*/
window.wrap = function wrap(object, method, wrapper) {

    /*
    Remembers original function so that we can later
reference it via a closure should we desire.
*/
    var fn = object[method];

    /*
    “Wraps” original function by creating new function that calls
function passed as wrapper. Within new function, wrapper function
is called with apply(), forcing function
context to object and passing as arguments the original
method (using bind() to force its function context to object) and
original arguments.
    */
    return object[method] = function () {
        return wrapper.apply(this, [fn.bind(this)].concat(
            Array.prototype.slice.call(arguments)));
    };
}

/*
Uses Prototype mechanism for
browser detection—remember, this code is
from Prototype so it’s eating its own dog
food—to determine if the function needs
to be wrapped.
*/
if (Prototype.Browser.Opera) {
    /*
    Uses wrap() function to
substitute new functionality if
attr argument is “title” and
uses original function if not.
    */
    wrap(Element.Methods, "readAttribute",
        function (original, elem, attr) {
            return attr == "title" ?
                elem.title :
                original(elem, attr);
        });
}