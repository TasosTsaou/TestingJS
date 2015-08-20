(window.scopeTest = function scopeTest(){

assert(true, "|----- BEFORE OUTER -----|");

/* test code here */
assert(true, "some descriptive text");
    assert(typeof outer === 'function',
        "outer() is in scope");
    assert(typeof inner === 'function',
        "inner() is in scope");
    assert(typeof a === 'number',
        "a is in scope");
    assert(typeof b === 'number',
        "b is in scope");
    assert(typeof c === 'number',
        "c is in scope");

function outer() {
    assert(true, "|----- INSIDE OUTER, BEFORE a -----|");
    /* test code here */
    assert(true, "some descriptive text");
    assert(typeof outer === 'function',
        "outer() is in scope");
    assert(typeof inner === 'function',
        "inner() is in scope");
    assert(typeof a === 'number',
        "a is in scope");
    assert(typeof b === 'number',
        "b is in scope");
    assert(typeof c === 'number',
        "c is in scope");
    
    var a = 1;

    assert(true, "|----- INSIDE OUTER, AFTER a -----|");
    /* test code here */
    assert(true, "some descriptive text");
    assert(typeof outer === 'function',
        "outer() is in scope");
    assert(typeof inner === 'function',
        "inner() is in scope");
    assert(typeof a === 'number',
        "a is in scope");
    assert(typeof b === 'number',
        "b is in scope");
    assert(typeof c === 'number',
        "c is in scope");

    function inner() { /* does nothing */ }
    var b = 2;

    assert(true, "|----- INSIDE OUTER, AFTER inner() AND b -----|");
    /* test code here */
    assert(true, "some descriptive text");
    assert(typeof outer === 'function',
        "outer() is in scope");
    assert(typeof inner === 'function',
        "inner() is in scope");
    assert(typeof a === 'number',
        "a is in scope");
    assert(typeof b === 'number',
        "b is in scope");
    assert(typeof c === 'number',
        "c is in scope");
    
    if (a == 1) {
        var c = 3;
        assert(true, "|----- INSIDE OUTER, INSIDE if -----|");
        /* test code here */
        assert(true, "some descriptive text");
    assert(typeof outer === 'function',
        "outer() is in scope");
    assert(typeof inner === 'function',
        "inner() is in scope");
    assert(typeof a === 'number',
        "a is in scope");
    assert(typeof b === 'number',
        "b is in scope");
    assert(typeof c === 'number',
        "c is in scope");
    }
    assert(true, "|----- INSIDE OUTER, OUTSIDE if -----|");
    /* test code here */
    assert(true, "some descriptive text");
    assert(typeof outer === 'function',
        "outer() is in scope");
    assert(typeof inner === 'function',
        "inner() is in scope");
    assert(typeof a === 'number',
        "a is in scope");
    assert(typeof b === 'number',
        "b is in scope");
    assert(typeof c === 'number',
        "c is in scope");
}
outer();
assert(true, "|----- AFTER OUTER -----|");
/* test code here */
assert(true, "some descriptive text");
    assert(typeof outer === 'function',
        "outer() is in scope");
    assert(typeof inner === 'function',
        "inner() is in scope");
    assert(typeof a === 'number',
        "a is in scope");
    assert(typeof b === 'number',
        "b is in scope");
    assert(typeof c === 'number',
        "c is in scope");
})

