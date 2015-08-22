(window.memoPrecomputedValuesTest = function () {


    function isPrime(value) {
        //Creates the cache
        if (!isPrime.answers) isPrime.answers = {};
        // Checks for cached values
        if (isPrime.answers[value] != null) {
            return isPrime.answers[value];
        }
        var prime = value != 1; // 1 can never be prime
        for (var i = 2; i < value; i++) {
            if (value % i == 0) {
                prime = false;
                break;
            }
        }

        //Stores the computed value
        return isPrime.answers[value] = prime;
    }

    function isOdd(value) {
        // create a cache if not existent
        if (!isOdd.cache) {
            isOdd.cache = {};
        }
        //check for cached precomputed values
        if (isOdd.cache[value] != null) {
            return isOdd.cache[value];
        }
        // if not cached, compute, cache and return the value:
       
        return !!(isOdd.cache[value] = value % 2)


    }

    //Tests that it all works
    assert(isPrime(5), "5 is prime!");
    assert(isPrime.answers[5], "The answer was cached!");
    assert(isOdd(5), "5 is odd too!");
    assert(isOdd.cache[5], "This answer was cached too!");


})