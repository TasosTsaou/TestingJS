(window.inlineFunctionIdentityTest = function(){

    
    //Declares a named inline function and assigns it to variable.
var ninja = function myNinja(){
    
    //Tests that two names are equivalent inside the inline function.
    assert(ninja == myNinja,
"This function is named two things at once!");
};
    
//Invokes the function to perform the internal test.
    ninja();
    
    //Tests that the inline function’s name isn’t available outside the inline function.
    assert(typeof myNinja == "undefined",
"But myNinja isn't defined outside of the function.");
    
})