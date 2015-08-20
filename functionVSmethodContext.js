(window.functionVsMethod = function(){
//Defines a function that returns its function context. This will allow //us to examine the function context of a function from
//outside of it, after it has been invoked.
function creep(){ return this; }

//Tests invocation “as a function” and verifies that function
//context was the window object (the global scope).
//this test passes.
assert(creep() === window, "Creeping in the window");

//Creates a reference to the same function in variable sneak.
var sneak = creep;

//Invokes the function using the sneak variable. Even
//though we’ve used a variable, the function is still invoked
//as a function, and the function context is window.
assert(sneak() === window, "Sneaking in the window");

//Creates an object in ninja1 and creates a skulk property
//that references the original creep() function.
var ninja1 = {
    skulk: creep
};

//Invokes the function through skulk property, thus invoking
//it as a method of ninja1. The function context is no
//longer window but is ninja1. That’s object orientation!
assert(ninja1.skulk() === ninja1,
"The 1st ninja is skulking");


//Creates another object, ninja2, that also has
//a skulk property referencing creep().
var ninja2 = {
skulk: creep
};

//Invokes the function as a method of ninja2,
//and behold, the function context is ninja2.
assert(ninja2.skulk() === ninja2,
"The 2nd ninja is skulking");
    
})