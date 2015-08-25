;(window.tests.notSoSimpleClosure = function () {

    var outerValue = 'ninja';

    //Declares an empty variable that we’ll use later. See how proper naming helps us understand what something is used for?
    var later;


    function outerFunction() {
            //Declares a value inside the function. This variable’s scope is limited to the function and cannot be accessed from outside the function.
            var innerValue = 'samurai';

            //Declares an inner function within the outer function.
            //Note that innerValue is in scope when we declare this function.
            function innerFunction() {
                    assert(outerValue, "I can see the ninja.");
                    assert(innerValue, "I can see the samurai.");
                }
                //Stores a reference to the inner function in the later variable. 
                //Because later is in the global scope, it will allow us to call the function later.
            later = innerFunction;
        }
        //Invokes the outer function, which causes the inner function to be
        //declared and its reference assigned to later.
    outerFunction();
    //Invokes the inner function through later. We can’t invoke it directly because its scope (along with innerValue) is limited to within outerFunction().
    later();
    
})