(window.tests.memoizationUsingClosures = function () {

    Function.prototype.memoized = function (key) {

        //        We’ re going to store a cache of
        //values in property values. Here
        //we check to see if we’ve already
        //created it, and do so if not.
        this._values = this._values || {};
        //        When we get called with a key,
        //we check to see if we have a
        //cached value for it. If so, we return it. If 
        //not, we call the
        //function and store its value for
        //next time.
        return this._values[key] !== undefined ?
            this._values[key] :
            this._values[key] = this.apply(this, arguments);
    };

    Function.prototype.memoize = function () {
        //        Brings the context into the
        //closure by assigning it to a
        //variable. Otherwise, the context
        //is lost, as this is never part of a closure.
        var fn = this;
        //        Wraps original function in memoization function.
        return function () {
            return fn.memoized.apply(fn, arguments);
        };
    };

    //We’ll compute prime numbers as a test.
    var isPrime = (function (num) {
        var prime = num != 1;
        for (var i = 2; i < num; i++) {
            if (num % i == 0) {
                prime = false;
                break;
            }
        }
        return prime;
    }).memoize();
    assert(isPrime(17), "17 is prime");
})