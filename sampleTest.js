(window.sampleTest = function sampleTest() {
            function isNimble() {
                return true;
            }
            assert(typeof window.isNimble === "function", "isNimble() defined");
            assert(isNimble.name === "isNimble", "isNimble() has a name");
            var canFly = function () {
                return true;
            };
            //The first test asserts that the window property
            //is established, and the second that the name
            //property of the function is recorded.
            //c
            //Creates an anonymous function that’s assigned to the
            //canFly. The variable is a window property,
            //d variable
            //and the name property of the function is empty.

            assert(typeof window.canFly === "function",
                "canFly() defined");
            assert(canFly.name === "",
                "canFly() has no name");
            // /* // Tests that the variable references //the anonymous function and that //the name property is set to the //empty string (not null). //f Creates an anonymous function //referenced by property of window. //*/
            window.isDeadly = function () {
                return true;
            };
            //Tests
            //that the
            //property g
            //references the
            //function. We
            //could also test
            //that the
            //function has an
            //empty name
            //property here.
            assert(typeof window.isDeadly === "function",
                "isDeadly() defined");

            function outer() {
                assert(typeof inner === "function",
                    "inner() in scope before declaration");

                function inner() {}
                assert(typeof inner === "function",
                    "inner() in scope after declaration");
                assert(window.inner === undefined,
                    "inner() not in global scope");
            }
            outer();
            assert(window.inner === undefined,
                "inner() still not in global scope");
            //Defines an inner function inside the
            //outer function. Tests that inner() is
            //able to be referenced before and
            //h after its declaration and that no
            //global name is created for inner().

            //Tests that outer() can be
            //referenced in the global scope,
            //but that inner() can’t.
            window.wieldsSword = function swingsSword() {
                return true;
            };
            assert(window.wieldsSword.name === 'swingsSword',
                "wieldSword's real name is swingsSword");
        })