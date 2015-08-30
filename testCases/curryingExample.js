//Partially applying arguments to a native function
(window.tests.curryingExample = function () {



    //     Prototype.js implementation
    Function.prototype.partial = function () {
        var fn = this,
            args = Array.prototype.slice.call(arguments);
        return function () {
            var arg = 0;
            for (var i = 0; i < args.length && arg < arguments.length; i++) {
                if (args[i] === undefined) {
                    args[i] = arguments[arg++];
                }
            }
            return fn.apply(this, args);
        };
    };
    //Functional.js implementation
    Function.prototype.partial = function () {
        var fn = this,
            args = Array.prototype.slice.call(arguments);
        return function () {
            var arg = 0;
            for (var i = 0; i < args.length && arg < arguments.length; i++) {
                if (args[i] === undefined) {
                    args[i] = arguments[arg++];
                }
            }
            return fn.apply(this, args);
        };
    };





    //An example of a curry function (filling in the first specified arguments)

    //    Remembers the
    //function and“ prefill”
    //arguments in variables that will be
    //captured in the closure
    Function.prototype.curry = function () {
        var fn = this,
            args = Array.prototype.slice.call(arguments);
        //Creates the anonymous curried function.
        return function () {
            return fn.apply(this, args.concat(
                Array.prototype.slice.call(arguments)));
        };
    };

    //Creates new String function.
    String.prototype.csv = String.prototype.split.partial(/,\s*/);
    //Invokes curried function.
    var results = ("Mugan, Jin, Fuu").csv();

    //Tests results.
    assert(results[0] == "Mugan" &&
        results[1] == "Jin" &&
        results[2] == "Fuu",
        "The text values were split properly");





})