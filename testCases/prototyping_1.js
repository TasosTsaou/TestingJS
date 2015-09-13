(window.tests.prototypeTest = function () {

    /*
    Defines a function that does
nothing and returns nothing.
    */
    function Ninja() {}

    /*
    Adds method to the
prototype of the function.
    */
    Ninja.prototype.swingSword = function () {
        return true;
    };

    /*
    Calls the function as a function. Testing
confirms that nothing at all seems to happen.
    */
    var ninja1 = Ninja();
    assert(ninja1 === undefined,
        "No instance of Ninja created.");

    /*
    Calls the function as a constructor.
Testing confirms that not only is
new object instance created, it
possesses the method from the
prototype of the function.
    */
    var ninja2 = new Ninja();
    assert(ninja2 &&
        ninja2.swingSword &&
        ninja2.swingSword(),
        "Instance exists and method is callable.");

})