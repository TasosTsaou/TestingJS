;
(window.tests.simpleClosure = function () {

    //Defines a value in global scope.
    var outerValue = 'ninja';

    //Declares a function in global scope.
    function outerFunction() {
        assert(outerValue == "ninja", "I can see the ninja.");
    }

    //Executes the function.
    outerFunction();


})