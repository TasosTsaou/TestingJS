//The shift method removes the element at the zeroeth index and shifts the values at consecutive indexes down, then returns the removed value. If the length property is 0, undefined is returned.

var myFish = ['angel', 'clown', 'mandarin', 'surgeon'];

console.log('myFish before: ' + myFish);
// "myFish before: angel,clown,mandarin,surgeon"

var shifted = myFish.shift(); 

console.log('myFish after: ' + myFish); 
// "myFish after: clown,mandarin,surgeon" 

console.log('Removed this element: ' + shifted); 
// "Removed this element: angel"
