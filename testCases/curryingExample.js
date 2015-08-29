//Partially applying arguments to a native function
(window.tests.curryingExample = function () {

    //An example of a curry function (filling in the first specified arguments)

    //    Remembers the
    //function and“ prefill”
    //arguments in variables that will be
    //captured in the closure
    Function.prototype.curry = function () {
        var fn = this,
            args = Array.prototype.slice.call(arguments);
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