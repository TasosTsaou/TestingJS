;
(window.tests.closureConcepts = function () {

    var outerValue = 'ninja';
    var later;

    function outerFunction() {
            var innerValue = 'samurai';

            //Added a parameter to inner function.
            function innerFunction(paramValue) {
                //Tests if we can see the parameter (duh!), and also tests to see if the closure includes variables that are declared after the function is declared. 
                //What do you think will happen?
                assert(outerValue, "Inner can see the ninja.");
                assert(innerValue, "Inner can see the samurai.");
                assert(paramValue, "Inner can see the wakizashi.");
                assert(tooLate, "Inner can see the ronin.");
            }
            later = innerFunction;
        }
        //Looks for a later value in the same scope. Will this fail as asserted? Or pass?
    assert(!tooLate, "Outer can't see the ronin.");

    //Declares a value after the inner function declaration.
    var tooLate = 'ronin';

    outerFunction();
    //Calls the inner function to run its contained tests. Can you predict the results?
//    var tooLate = 'ronin';
    later('wakizashi');
})