(window.tests.memoization = function () {

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

    //We’ll compute prime numbers as a test.
    function isPrime(num) {
        var prime = num != 1;
        for (var i = 2; i < num; i++) {
            if (num % i == 0) {
                prime = false;
                break;
            }
        }
        return prime;
    }

    //Tests that the function
//returns the right value and
//that the value is cached.
    assert(isPrime.memoized(5),
        "The function works; 5 is prime.");
    assert(isPrime._values[5],
        "The answer has been cached.");


})