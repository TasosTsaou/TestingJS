(window.tests.addMethodFunctionTest = function () {

    //Declares an object to serve as the base, preloaded with some test data.
    var ninjas = {
        values: ["Dean Edwards", "Sam Stephenson", "Alex Russell"]
    };

    //Binds a no-argument method to the base object.
    addMethod(ninjas, "find", function () {
        return this.values;
    });

    //Binds a single-argument method to the base object. 
    addMethod(ninjas, "find", function (name) {
        var ret = [];
        for (var i = 0; i < this.values.length; i++)
            if (this.values[i].indexOf(name) == 0)
                ret.push(this.values[i]);
        return ret;
    });

    //Binds a dual-argument method to the base object.
    addMethod(ninjas, "find", function (first, last) {
        var ret = [];
        for (var i = 0; i < this.values.length; i++)
            if (this.values[i] == (first + " " + last))
                ret.push(this.values[i]);
        return ret;
    });


    //Tests the bound methods.
    assert(ninjas.find().length == 3,
        "Found all ninjas");
    assert(ninjas.find("Sam").length == 1,
        "Found ninja by first name");
    assert(ninjas.find("Dean", "Edwards").length == 1,
        "Found ninja by first and last name");
    assert(ninjas.find("Alex", "Russell", "Jr") == null,
        "Found nothing");

})