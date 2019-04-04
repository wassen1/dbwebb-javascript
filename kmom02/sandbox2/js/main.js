(function () {
    'use strict';
    var figure = document.getElementsByClassName("figure")[0];
    var myContent = document.getElementById("content");
    var relMouseStartX = 0;
    var relMouseStartY = 0;

    figure.addEventListener("drag", function(e) {
        e.target.style.visibility = "hidden";
    });

    figure.addEventListener("dragstart", function(e) {
        e.dataTransfer.setData('Text', this.id);
    });

    figure.addEventListener("dragstart", function(e) {
        relMouseStartY = e.screenY - (figure.offsetTop + myContent.offsetTop);
        relMouseStartX = e.screenX - (figure.offsetLeft + myContent.offsetLeft);
    });

    document.addEventListener("dragover", function( event ) {
        event.preventDefault();
    }, false);

    document.addEventListener("dragend", function(e) {
        var top = e.screenY - (myContent.offsetTop + relMouseStartY);
        var left = e.screenX - (myContent.offsetLeft + relMouseStartX);
        var topTest = top + e.target.clientHeight;
        var leftTest = left + e.target.clientWidth;
        var parentHeight = e.target.offsetParent.clientHeight;
        var parentWidth = e.target.offsetParent.clientWidth;

        if ((topTest) < parentHeight && (leftTest) < parentWidth) {
            if (top > 0 && left > 0) {
                figure.style.top = top + "px";
                figure.style.left = left + "px";
            }
        }
        e.target.style.visibility = "visible";
        // console.log(e.dataTransfer.dropEffect);
    });

    window.console.log('Sandbox is ready!');
})();
