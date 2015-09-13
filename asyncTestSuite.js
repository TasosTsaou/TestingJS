//        /*
//    To handle asynchronous tests, we need to follow a couple of simple steps:
//1. Assertions that rely upon the same asynchronous operation need to be grouped
//into a unifying test group.
//2. Each test group needs to be placed on a queue to be run after all the previous
//test groups have finished running.
//Thus, each test group must be capable of running asynchronously.
//    */
(function () {
    var queue = [],
        paused = false,
        results;
    window.tests = {};

    //            /*
    //            test() takes a function that contains a number of assertions—assertions that
    //will be run either synchronously or asynchronously—and places it on the queue
    //to await execution.
    //*/
    this.test = function (name, fn) {
        queue.push(function () {
            results = document.getElementById("results");
            results = assert(true, name).appendChild(
                document.createElement("ul"));
            fn();
        });
        runTest();
    };
    //            /*
    //            pause() should be called from within a test function and tells the test suite to
    //pause executing tests until the test group is done.
    //            */
    this.pause = function () {
        paused = true;
    };
    //            /*
    //            resume() unpauses the tests and starts the next test running after a short delay
    //designed to avoid long-running code blocks.
    //*/
    this.resume = function () {
        paused = false;
        setTimeout(runTest, 1);
    };
    /*
    //runTest() , is called whenever a test is
    //queued or dequeued. It checks to see if the suite is currently unpaused and if there’s
    //something in the queue, in which case it’ll dequeue a test and try to execute it. Addi-
    //tionally, after the test group is finished executing, runTest() will check to see if the
    //suite is currently paused, and if it’s not (meaning that only asynchronous tests were
    //run in the test group), runTest() will begin executing the next group of tests.
    */
    function runTest() {
            if (!paused && queue.length) {
                queue.shift()();
                if (!paused) {
                    resume();
                }
            }
        }
        //            /*
        //            assert() creates a
        //new <li> element containing the description, assigns a class named pass or fail ,
        //depending upon the value of the assertion parameter ( value ), and appends the new
        //element to a list element in the document body
        //*/
    this.assert = function assert(value, desc) {
        var li = document.createElement("li");
        li.className = value ? "pass" : "fail";
        li.appendChild(document.createTextNode(desc));
        results.appendChild(li);
        if (!value) {
            li.parentNode.parentNode.className = "fail";
        }
        return li;
    };
})();

$(document).ready(function () {
    test("Async Test #1", function () {
        pause();
        setTimeout(function () {
            assert(true, "First test completed");
            resume();
        }, 1000);
    });
    test("Async Test #2", function () {
        pause();
        setTimeout(function () {
            assert(true, "Second test completed");
            resume();
        }, 1000);
    });
    test("sampleTest #1", sampleTest);
    test("scopeTest #1", scopeTest);
    test("function Context Vs Method Context Test #1", functionVsMethod);
    test("Ninja Constructor test #1", createNinjasTest);
    test("Call and Apply Usage test #1", applyAndCallTest);
    test("Testing custom forEach with a callback #1", forEachAndCallbackTest);
    test("Anonymous Functions Test #1", anonFunctionsTest);
    test("Recursion test #1", palindromeTest);
    test("Recursion test #2", recursionTest2);
    test("Recursion test #3 - inline Functions", recursionTest3);
    test("Inline Function Identity Test #1", inlineFunctionIdentityTest);
    test("Storing Functions Test #1", functionStore);
    test("Self Memoizing Functions test #1", memoPrecomputedValuesTest);
    test("Simulating Array methods test #1", simulateArrayMethods);
    test("Converting arrays of input arguments to lists #1", arrayMinMax);
    test("Traversing variable-length argument lists #1", traversingVarArgLists);
    test("Slicing the arguments list test #1", slicingArgsList);
    test("Function's length property Test #1", functionsLengthProperty);
    test("Method-overloading function test #1", tests.addMethodFunctionTest);
    test("Closure test #1", tests.simpleClosure);
    test("Closure test #2", tests.notSoSimpleClosure);
    test("Closure Concepts test #3", tests.closureConcepts);
    test("Closure Private variables test #4", tests.privateVarsWithClosures);
    test("Closure test #5, Prototype Bind example", tests.prototypeBind);
    test("Closure test #6, currying - partial applying of function arguments", tests.curryingExample);
    test("Overriding function behavior test #1 - Memoization", tests.memoization);
    test("Overriding function behavior test #2 - Memoization using Closure", tests.memoizationUsingClosures);
    test("Prototyping test #1 - Creating new instance", tests.prototypeTest);
    test("Prototyping test #2 - Observing the precedence of initialization activities", tests.prototypeTest2);
    test("Prototyping test #3 - Observing the behavior of changes to the prototype", tests.prototypeTest3);
    test("Prototyping test #4 - Further observing the behavior of changes to the prototype", tests.prototypeTest4);
    test("Prototyping test #5 - Examining the type of an instance and its constructor", tests.prototypeTest5);
    test("Prototyping test #6 - Instantiating a new object using a reference to a constructor", tests.prototypeTest6);

})