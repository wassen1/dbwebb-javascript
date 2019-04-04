(function() {
    "use strict";
    //var value = 42;
    var output = document.getElementById("output");
    var anchor = document.getElementById("anchor");
    var confirm = document.getElementById("confirm");

    output.innerHTML = "<h3>This is a template!</h3>";
    anchor.addEventListener("click", function() {
        alert("This is a message in a popup saying Hello World");
    });

    confirm.addEventListener("click", function() {
        window.confirm("Press F12 to open the developer tools for your browser, " +
        "select the console. Then reload the page and see the message in the console.");
    });

    console.log("Hello in the consol.");
    console.log("Here you can write inline code of JavaScript and debug your programs.");
    console.log("Try writing 1+1 (at the bottom of the developer tool) and see what happens.");
    console.log("Try writing: console.log('Hi')");
    console.log("Try writing: value");
}());
