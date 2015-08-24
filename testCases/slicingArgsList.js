(window.slicingArgsList = function () {

    function multiMax(multi) {
        //Fools the slice() method into working on the arguments list, which you may recall isn’t an instance of Array.
        return multi * Math.max.apply(Math, Array.prototype.slice.call(arguments, 1));
    }

    assert(multiMax(3, 1, 2, 3) == 9, "3*3=9 (First arg, by largest.)");

})