(window.tests.prototypeTest5 = function () {
    /*
    Examining the type of an instance and its constructor
    */

    /*
    Defines an instance method with
same name as a prototype method
    */
    function Ninja() {}
        /*
    Instantiates an instance of Ninja by calling the
constructor function via the new operator
    */
    var ninja = new Ninja();

    /*
    Tests the type of ninja using
typeof. That tells us it’s an
object, but not much else.
    */
    assert(typeof ninja == "object",
        "The type of the instance is object.");

    /*
   Tests the type of ninja using
instanceof. This gives us more
information—that it was
constructed from Ninja.
    */
    assert(ninja instanceof Ninja,
        "instanceof identifies the constructor.");

    /*
    Tests the type of ninja using the constructor reference. This
gives us an actual reference to the constructor function.
    */
    assert(ninja.constructor == Ninja,
        "The ninja object was created by the Ninja function.");
})