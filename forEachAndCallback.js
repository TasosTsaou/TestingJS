(window.forEachAndCallbackTest = function () {

    //Defines the for-each function
    function forEach(list, callback) {
        for (var n = 0; n < list.length; n++) {
            //Invokes the callback
            //We use the call() method of the callback function, passing the current iteration entry as the first parameter and the loop index as the second. This should cause the current entry to become the function context and the index to be passed as the single parameter to the callback.

            callback.call(list[n], n);
        }
    }

    //Sets up the test subject
    var weapons = ['shuriken', 'katana', 'nunchucks'];


    //Tests the function
    forEach(
        weapons,
        function (index) {
            //we test that the expected entry is set as the function context for each invocation of the callback.
            assert(this == weapons[index],
                "Got the expected value of " + weapons[index]);
        }
    );

})