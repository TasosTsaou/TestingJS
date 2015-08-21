(window.recursionTest3 = function () {

    //Declares a named inline function.
    var ninja = {
        chirp: function signal(n) {
            return n > 1 ? signal(n - 1) + "-chirp" : "chirp";
        }
    };


    //Tests that it works just as expected.
    assert(ninja.chirp(3) == "chirp-chirp-chirp",
        "Works as we would expect it to!");

    //Creates a new object.
    var samurai = {
        chirp: ninja.chirp
    };

    //Wipes out the ninja object just like in the previous example.
    ninja = {};


    //Tests that it still works. And it does!
    assert(samurai.chirp(3) == "chirp-chirp-chirp",
        "The method correctly calls itself.");

})