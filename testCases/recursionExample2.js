(window.recursionTest2 = function () {


    //Declares a recursive chirping function that calls itself by name until it determines that it’s done.
    function chirp(n) {
        return n > 1 ? chirp(n - 1) + "-chirp" : "chirp";
    }


    //Asserts that a ninja can chirp as planned.
    assert(chirp(3) == "chirp-chirp-chirp",
        "Calling the named function comes naturally.");


    //Declares a recursive chirp function as a property of the ninja object. We now need to call the method from within
    //itself using the reference to the object’s method.
    var ninja = {
        chirp: function (n) {
            return n > 1 ? ninja.chirp(n - 1) + "-chirp" : "chirp";
        }
    };

    assert(ninja.chirp(3) == "chirp-chirp-chirp",
        "An object property isn't too confusing, either.");


})