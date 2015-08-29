//window.animateIt = function animateIt(elementId) {
//
//    //Inside the animateIt() function, we get a reference to that element.
//    var elem = document.getElementById(elementId);
//    //Establishes a counter to keep track of animation ticks (steps).
//    var tick = 0;
//
//    //Creates and starts an interval timer given a callback function that will be invoked every 10 milliseconds. For 100 ticks it will adjust the position of the element.
//    var timer = setInterval(function () {
//        if (tick < 100) {
//            elem.style.left = elem.style.top = tick + "px";
//            tick++;
//        } else {
//            /*
//            After 100 ticks we stop the timer and perform
//            tests to assert that we can see all relevant variables needed to
//            perform the animation.
//            */
//            clearInterval(timer);
//            assert(tick == 100, "Tick accessed via a closure.");
//            assert(elem, "Element also accessed via a closure.");
//            assert(timer, "Timer reference also obtained via a closure.");
//        }
//
//    }, 10);
//}
//
////Now that it’s all set up, we set it in motion!
//animateIt('box');