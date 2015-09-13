(window.tests.prototypeTest6 = function () {
    /*
    Instantiating a new object using a reference to a constructor
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
    Constructs a second
Ninja from the first
    */
    var ninja2 = new ninja.constructor();
    /*
    Proves the new
object’s Ninja-ness
    */
    assert(ninja2 instanceof Ninja, "It's a Ninja!");

    /*
   They aren’t the same
object but two
distinct instances
    */
    assert(ninja !== ninja2, "But not the same Ninja!");


})