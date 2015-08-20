(window.applyAndCallTest = function () {

    //Defines the function    
    function juggle() {
            var result = 0;
            //Sums up arguments
            for (var n = 0; n < arguments.length; n++) {
                result += arguments[n];
            }
            //Stores result on context
            this.result = result;
        }
        //Sets up test subjects
    var ninja1 = {};
    var ninja2 = {};

    //Applies function
    juggle.apply(ninja1, [1, 2, 3, 4]);
    //Calls function
    juggle.call(ninja2, 5, 6, 7, 8);

    //Tests expected results
    assert(ninja1.result === 10, "juggled via apply");
    assert(ninja2.result === 26, "juggled via call");

})