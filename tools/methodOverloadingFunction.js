(window.addMethod = function addMethod(object, name, fn) {

    //Stores the previous function because we may need to call it if the //passed function doesn’t have a matching number of arguments.
    var old = object[name];

    //Creates a new anonymous function that becomes the method.
    object[name] = function () {

        if (fn.length == arguments.length)
        //Invokes the passed function if its parameter and argument counts match.
            return fn.apply(this, arguments);
        else if (typeof old == 'function')
        //Invokes the previous function if passed function isn’t a match.
            return old.apply(this, arguments);


    }
})