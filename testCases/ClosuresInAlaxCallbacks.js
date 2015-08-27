; //Establishes a click handler on the test button. This function passed to the click() method will be called whenever the button is clicked.
jQuery('#testButton').click(function () {

            //Declares a variable named elem$ that contains a reference to the <div> element defined at the top of the code.
            var elem$ = jQuery("#testSubject");
            //Preloads the <div> with some text to let the users know that something’s going on.
            elem$.html("Loading...");

            jQuery.ajax({
                url: "asyncTestSuite.html",
                //Within the argument list passed to the jQuery ajax() method, we define a callback to be called when the Ajax request returns its response from the server. 
                //The response text is passed to the callback in the html parameter, which we inject into the <div> element through the elem$ variable in the closure.
                success: function (html) {
                    assert(elem$,
                        "We can see elem$, via the closure for this callback.");
                    elem$.html(html);
                }
            });