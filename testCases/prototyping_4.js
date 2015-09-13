(window.tests.prototypeTest4 = function () {
    /*
    Further observing the behavior of changes to the prototype
    */

    /*
    Defines an instance method with
same name as a prototype method
    */
    function Ninja() {
            this.swung = true;
            this.swingSword = function () {
                return !this.swung;
            };
        }
        /*
    Instantiates an instance of Ninja by calling the
constructor function via the new operator
    */
    var ninja = new Ninja();

    /*
    Defines a prototyped method with
same name as the instance method
    */
    Ninja.prototype.swingSword = function () {
        return this.swung;
    };

    /*
   Tests which
method wins
    */
    assert(ninja.swingSword(),
        "Called the instance method, not the prototype method.");
})