(function () {
    'use strict';

    var boxCounter = 1;
    var myContent = document.getElementById('content');
    var box1 = document.getElementById('box1');

    /**
     * Gets a random integer
     * @param {Number} min start of range including this number
     * @param {Number} max end of range exluding this number
     * @returns random integer in a range
     */
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    /**
     * Places element at random position inside window
     * @param {Element} element
     * @param {Number} height
     * @param {Number} width
     * @param {Element} parent
     */
    function placeNodeRandom(element, height, width, parent) {
        var maxHeight = getWindowDimensions().height - height;
        var maxWidth = getWindowDimensions().width - width;

        element.style.left = getRandomInt(0, maxWidth) + 'px';
        element.style.top = getRandomInt(0, maxHeight) + 'px';
        parent.appendChild(element);
    }

    /**
     * Prints window dimensions and elements position and dimensions
     * @param {Element} element
     */
    function printInfo(element) {
        console.log("Dimensioner på webbläsarens fönster: " +
            getWindowDimensions().height + "px X " + getWindowDimensions().width + "px.");
        console.log("Dimensioner på elementet: " +
            element.clientHeight + "px X " + element.clientWidth + "px.");
        console.log("Positionen på elementet enligt top, left: " +
            element.offsetTop + " och " + element.offsetLeft + ".");
    }

    /**
     * Gets windowdimensions, innerHeight and innerWidth
     * @returns {Object} windowdimensions
     */
    function getWindowDimensions() {
        return {
            height: window.innerHeight,
            width: window.innerWidth
        };
    }

    /**
     * Calculates middle of window, half height and width
     * @returns {Object} middle point of window
     */
    function calcMidWindow() {
        return {
            height: getWindowDimensions().height / 2,
            width: getWindowDimensions().width / 2
        };
    }

    /**
     * Calculates middle of element, half height and width
     * @param {Element} element
     * @returns {Object} returns object with middle of element
     */
    function calculateMiddleElement(element) {
        return {
            height: element.clientHeight / 2,
            width: element.clientWidth / 2
        };
    }

    /**
     * Places node in middle of window
     * @param {Element} element
     */
    function placeElementInMiddle(element) {
        element.style.zIndex = 0;
        element.style.top = calcMidWindow().height - calculateMiddleElement(element).height + "px";
        element.style.left = calcMidWindow().width - calculateMiddleElement(element).width + "px";
    }

    /**
     * Prints in element
     * @param {Element} parent
     * @param {String} str String with html
     */
    function printInElement(parent, str) {
        parent.insertAdjacentHTML('beforeend', "<h2>" + str);
    }

    /**
     * Circulates the background color
     * @param {Element} element
     */
    function cirkulateColors(element) {
        switch (getComputedStyle(element).backgroundColor) {
            case 'rgb(0, 128, 0)':
                element.classList.remove('green');
                element.classList.add('yellow');
                break;
            case 'rgb(255, 255, 0)':
                element.classList.remove('yellow');
                element.classList.add('red');
                break;
            case 'rgb(255, 0, 0)':
                element.classList.remove('red');
                element.classList.add('blue');
                break;
            case 'rgb(0, 0, 255)':
                element.classList.remove('blue');
                element.classList.add('green');
                break;
        }
    }

    /**
     * Enlarges the element
     * @param {Element} element
     * @param {Number} enlarger
     */
    function enlargeElement(element, enlarger) {
        element.style.height = (element.clientHeight + enlarger) + "px";
        element.style.width = (element.clientWidth + enlarger) + "px";
        element.style.left = element.offsetLeft - enlarger / 2 + "px";
        element.style.top = element.offsetTop - enlarger / 2 + "px";
    }

    /**
     * Delarges element
     * @param {*} element
     * @param {Number} delarger
     */
    function deLargeElement(element, delarger) {
        element.style.height = (element.clientHeight - delarger) + "px";
        element.style.width = (element.clientWidth - delarger) + "px";
        element.style.left = element.offsetLeft + delarger / 2 + "px";
        element.style.top = element.offsetTop + delarger / 2 + "px";
    }

    /**
     * Creates an element with random color, shape and position
     * @param {Element} element
     */
    function makeRandomElement(element) {
        var randomColor = getRandomInt(0, 4);
        var randomShape = getRandomInt(0, 2);

        boxCounter++;
        element.classList.remove('red', 'green', 'blue', 'yellow');
        switch (randomColor) {
            case 0:
                element.classList.add('yellow');
                break;
            case 1:
                element.classList.add('blue');
                break;
            case 2:
                element.classList.add('red');
                break;
            case 3:
                element.classList.add('green');
                break;
        }
        if (randomShape == 1) {
            element.classList.add('circle');
        } else if (randomShape == 0) {
            element.classList.remove('circle');
        }
        element.id = "box" + boxCounter;
        element.addEventListener('click', function () {
            this.classList.toggle('selected');
        });
        element.addEventListener("dblclick", function () {
            animateRemove(this);
        });
        placeNodeRandom(element, box1.offsetHeight, box1.offsetWidth, myContent);
    }

    /**
     * Animate remove element
     * @param {Element} element
     */
    function animateRemove(element) {
        element.classList.add('animateSize');
        element.style.width = '2px';
        element.style.height = '2px';
        window.setTimeout(function () {
            myContent.removeChild(element);
        }, 2000);
    }

    /**
     * Animates 5 changes of elements in 1sec
     * @param {Element} element
     */
    function animate5Changes(element) {
        var nIntervId;

        nIntervId = window.setInterval(function () {
            makeRandomElement(element);
        }, 200);
        window.setTimeout(function () {
            clearInterval(nIntervId);
        }, 1000);
    }

    /**
     * Duplicates selected nodes
     * @param {Node} nodes
     */
    function duplicateNodes(nodes) {
        for (var i = 0; i < nodes.length; i++) {
            var nodeCopy = nodes[i].cloneNode();
            var z = nodeCopy.style.zIndex;
            var height = nodes[i].offsetHeight;
            var width = nodes[i].offsetWidth;

            boxCounter++;
            nodeCopy.id = "box" + boxCounter;
            nodeCopy.style.zIndex = z ? +z + 1 : 0;
            nodeCopy.addEventListener('click', function () {
                this.classList.toggle('selectedNodesed');
            });
            nodeCopy.addEventListener("dblclick", function () {
                animateRemove(this);
            });
            placeNodeRandom(nodeCopy, height, width, myContent);
        }
    }

    /**
     * Moves element forward
     * @param {Node} node
     */
    function moveForward(node) {
        var z = node.style.zIndex;

        node.style.zIndex = z ? +z + 1 : 0;
        z = node.style.zIndex;
    }

    /**
     * Moves element backward
     * @param {Node} node
     */
    function moveBackward(node) {
        var z = node.style.zIndex;

        node.style.zIndex = z ? +z - 1 : 0;
        z = node.style.zIndex;
    }

    box1.classList.add('center');
    printInfo(box1);

    placeElementInMiddle(box1);
    var contentStr = "Positionen på #box1-elementet enligt top, left: " +
        box1.offsetTop + " och " + box1.offsetLeft + "." + "<br>" +
        "Storleken på #box1: " + box1.clientHeight + "px X " + box1.clientWidth + "px.";

    printInElement(myContent, contentStr);

    window.addEventListener("resize", function () {
        placeElementInMiddle(box1);
    }, false);

    box1.addEventListener('click', function (event) {
        box1.classList.toggle('selected');
        console.log(event);
    });

    box1.addEventListener("dblclick", function () {
        animateRemove(this);
    });

    document.addEventListener('keydown', function (e) {
        var selectedNodes = document.querySelectorAll('.selected');
        var selectedNodesByClassName = document.getElementsByClassName('selected');
        var nodes = myContent.querySelectorAll("div");
        var copyNode = box1.cloneNode();

        switch (e.key) {
            case "ArrowLeft":
                selectedNodes.forEach(function (node) {
                    node.style.left = parseInt(node.style.left) - 10 + "px";
                });
                break;
            case "ArrowRight":
                selectedNodes.forEach(function (node) {
                    node.style.left = parseInt(node.style.left) + 10 + "px";
                });
                break;

            case "ArrowUp":
                selectedNodes.forEach(function (node) {
                    node.style.top = parseInt(node.style.top) - 10 + "px";
                });
                break;
            case "ArrowDown":
                selectedNodes.forEach(function (node) {
                    node.style.top = parseInt(node.style.top) + 10 + "px";
                });
                break;
            case "a":
                selectedNodes.forEach(function (node) {
                    moveBackward(node);
                });
                break;
            case "d":
                selectedNodes.forEach(function (node) {
                    animate5Changes(node);
                });
                break;
            case "e":
                for (let i = 0; i < selectedNodesByClassName.length; i++) {
                    selectedNodesByClassName[i].classList.toggle('circle');
                }
                break;
            case "i":
                console.log('Antal valda element: ', nodes.length);
                nodes.forEach(function (node) {
                    node.classList.add('selected');
                });
                break;
            case "p":
                makeRandomElement(copyNode);
                break;
            case "q":
                for (let i = 0; i < selectedNodesByClassName.length; i++) {
                    enlargeElement(selectedNodesByClassName[i], 10);
                }
                break;
            case "r":
                for (let i = 0; i < selectedNodesByClassName.length; i++) {
                    cirkulateColors(selectedNodesByClassName[i]);
                }
                break;
            case "s":
                selectedNodes.forEach(function (node) {
                    moveForward(node);
                });
                break;
            case "t":
                console.log('Antal kopierade nodes: ', selectedNodes.length);
                duplicateNodes(selectedNodes);
                break;
            case "u":
                selectedNodes.forEach(function (node) {
                    node.classList.remove('selected');
                });
                break;
            case "w":
                for (let i = 0; i < selectedNodesByClassName.length; i++) {
                    deLargeElement(selectedNodesByClassName[i], 10);
                }
                break;
            case "x":
                selectedNodes.forEach(function (node) {
                    node.classList.toggle('rotate');
                });
                break;
            case "y":
                selectedNodes.forEach(function (node) {
                    myContent.removeChild(node);
                });
                break;
        }
    });
    window.console.log('Sandbox is ready!');
})();
