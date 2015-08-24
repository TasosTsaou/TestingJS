(window.arrayMinMax = function () {

    //Implements a function to find the smallest value
    function smallest(array) {
            return Math.min.apply(Math, array);
        }
        //Implements a function to find the largest value
    function largest(array) {
        return Math.max.apply(Math, array);
    }

    //Tests the implementations
    assert(smallest([0, 1, 2, 3]) == 0,
        "Located the smallest value.");
    assert(largest([0, 1, 2, 3]) == 3,
        "Located the largest value.");

})