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
        chirp: function (n) { //WRONG WAY
            return n > 1 ? ninja.chirp(n - 1) + "-chirp" : "chirp";
        }
    };



    assert(ninja.chirp(3) == "chirp-chirp-chirp",
        "An object property isn't too confusing, either.");


    //Creates a chirp() method on samurai by referencing the existing method of same name on ninja. Why write the
    //code twice when we already have an implementation?
    var samurai = {
        chirp: ninja.chirp
    };

    //Redefines ninja such that it has no properties.
    //This means that its chirp property goes away!
    ninja = {};

    //Tests if things still work. Hint: they don’t!
    try {
        assert(samurai.chirp(3) == "chirp-chirp-chirp",
            "Is this going to work?");
    } catch (e) {
        assert(false,
            "Uh, this isn't good! Where'd ninja.chirp go?");
    }

    ninja = {
        chirp: function (n) { //BETTER WAY
            return n > 1 ? this.chirp(n - 1) + "-chirp" : "chirp";
        }
    };

    //Tests if things still work. Hint: they don’t!
    try {
        assert(samurai.chirp(3) == "chirp-chirp-chirp",
            "Is this going to work?");
    } catch (e) {
        assert(false,
            "Uh, this isn't good! Where'd ninja.chirp go?");
    }
})