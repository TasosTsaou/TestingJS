(window.tests.prototypeTest2 = function () {

    /*
    Defines a function that does
nothing and returns nothing.
    */
    function Ninja() {

            /*
    Creates an instance
variable that holds a
Boolean value
initialized to false.
    */
            this.swung = false;

            /*
    Creates an instance method
that returns the inverse of the
swung instance variable value.
    */
            this.swingSword = function () {
                return !this.swung;
            };
        }
        /*
    Defines a prototype method with the
same name as the instance method. Which
will take precedence?
    */
    Ninja.prototype.swingSword = function () {
        return this.swung;
    };

    /*
    Constructs a Ninja instance for testing and asserts
that the instance method will override prototype
method of the same name. Will the test pass?
    */

    var ninja = new Ninja();
    assert(ninja.swingSword(),
        "Called the instance method, not the prototype method.");

})