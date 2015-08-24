(window.functionsLengthProperty = function () {

    function makeNinja(name) {}

    function makeSamurai(name, rank) {}


    //the length property, not to be confused with the length property of the arguments parameter, equates
    //to the number of named parameters with which the function was declared.
    assert(makeNinja.length == 1, "Only expecting a single argument");
    assert(makeSamurai.length == 2, "Two arguments expected");


})