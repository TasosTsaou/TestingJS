/*
This method is
designed to create and return a new anonymous function that calls the original
function, using apply() , so that we can force the context to be whatever object we want. In this case, it’s whatever object we pass to bind() as its first argument. This
context, along with the name of the method to call as the end function, is remem-
bered through the anonymous function’s closure, which includes the parameters
passed to bind() .
*/




//        Defines a “binding”
//function that wraps a
//call to the method of an
//object within another
function bind(context, name) {
    return function () {
        return context[name].apply(context, arguments);
    };
}

//usage:
//Uses the binding
//function to bind
//the button object
//as the context of
//the handler:
//elem.addEventListener("click",bind(button,"click"),false);


//An example of the function-binding code used in the Prototype library
Function.prototype.bind = function () {
    var fn = this,
        args = Array.prototype.slice.call(arguments),
        object = args.shift();
    return function () {
        return fn.apply(object,
            args.concat(Array.prototype.slice.call(arguments)));
    };
};
var myObject = {};

function myFunction() {
    return this == myObject;
}

assert(!myFunction(), "Context is not set yet");
var aFunction = myFunction.bind(myObject)
assert(aFunction(), "Context is set properly");