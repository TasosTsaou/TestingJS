(window.traversingVarArgLists = function () {

    //Implements the merge() function
    function merge(root) {
            //starting at index 1 to skip the first argument.
            for (var i = 1; i < arguments.length; i++) {
                for (var key in arguments[i]) {
                    root[key] = arguments[i][key];
                }
            }
            return root;
        }
        //Calls the implemented function
    var merged = merge({
        name: "Batou"
    }, {
        city: "Niihama"
    });

    //Tests that it did the right things
    assert(merged.name == "Batou",
        "The original name is intact.");
    assert(merged.city == "Niihama",
        "And the city has been copied over.");

})