(window.functionStore = function () {

    var store = {
        //Keeps track of the next available id to be assigned.
        nextId: 1,

        //Creates an object to serve as a cache in which we’ll store functions.
        cache: {},

        //Adds functions to the cache, but only if they’re unique.
        add: function (fn) {
            if (!fn.id) {
                fn.id = store.nextId++;
                return !!(store.cache[fn.id] = fn);
            }
        }
    };

    function ninja() {};

    //Tests that all works as planned.
    assert(store.add(ninja),
        "Function was safely added.");

    assert(!store.add(ninja),
        "But it was only added once.");

})