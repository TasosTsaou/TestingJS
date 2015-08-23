(window.simulateArrayMethods = function () {

    var elems = {

        //Stores the count of elements. If we’re going to pretend we’re an array, we’re going to need someplace to store the number of items that we’re storing.
        length: 0,

        //Implements the method to add elements to our collection. The prototype for Array
        //already has a method to do this, so why not use it instead of reinventing the wheel?
        add: function (elem) {
            Array.prototype.push.call(this, elem);
        },

        //Implements a method named gather() to find elements by their id values and add them to our collection.
        gather: function (id) {
            this.add(document.getElementById(id));
        }
    };

    //Tests the gather() and add() methods.
    elems.gather("first");
    assert(elems.length == 1 && elems[0].nodeType,
        "Verify that we have an element in our stash");
    elems.gather("second");
    assert(elems.length == 2 && elems[1].nodeType,
        "Verify the other insertion");
})