(window.tests.privateVarsWithClosures = function privateVarsWithClosures() {

    //Defines the constructor for a Ninja.
    function Ninja() {
        //Declares a variable inside the function (constructor).
        //Because the scope of the variable is limited to inside the constructor, 
        //it’s a “private” variable. We’ll use it to count how many times the ninja has feinted.
        var feints = 0;

        //Creates an accessor method for the feints counter. As the variable is not accessible to code outside the constructor,
        //this is a common way to give read-only access to the value.
        this.getFeints = function () {
            return feints;
        };
        //Declares the increment method for the value. Because the value is private,
        //no one can screw it up behind our backs; they are limited to the access that we give them via methods.
        this.feint = function () {
            feints++;
        };
    }

    //Now for testing; first we construct an instance of Ninja.
    var ninja = new Ninja();
    //Calls the feint() method, which increments the count of the number of times that our ninja has feinted.
    ninja.feint();
    ninja.feint();
    ninja.feint();


    /*Shows that we’ve caused the value to increment to 1, even though i
we had no direct access to it. We can affect the feints value because,
even though the constructor in which it’s declared has finished executing and gone
out of scope, the feints variable is bound into the closure (think protective bubble)
created by the declaration of the feint() method, and is available to that method.*/
    assert(ninja.getFeints() == 3,
        "We're able to access the internal feint count.");

    //Verifies that we can’t get at the variable directly.
    assert(ninja.feints === undefined,
        "And the private data is inaccessible to us.");


})