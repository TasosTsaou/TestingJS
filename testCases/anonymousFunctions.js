(window.anonFunctionsTest = function () {

    //Establishes an anonymous function as event handler. There’s no need to create a named
    //function only to reference it in this location
    window.onload =
        function () {
            assert(true, 'power!');
        };

    //Creates a function to be used as a method for ninja.
    //We’ll be using the property named shout to invoke the function, so it doesn’t need its own name.
    var ninja = {
        shout: function () {
            assert(true, "Ninja");
        }
    };

    ninja.shout();

    //Passes a function to the setTimeout() function as a callback to be invoked when the timer expires. 
    //Again, why bother to give it an unneeded name?
    setTimeout(
        function () {
            assert(true, 'Forever!');
        },
        500);

})