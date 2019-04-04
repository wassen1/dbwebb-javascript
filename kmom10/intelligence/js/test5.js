window.Test5 = (function () {
    'use strict';
    var score;
    var listConfig;
    var config = {
        headline: 'Deltest 5',
        presentationColor: 'lightgreen',
        resultColor: 'rgb(47, 179, 255)',
        scorePerQuestion: 1,
        getMaxScore: function() {
            return config.scorePerQuestion * 6;
        },
        presentationArray: function() {
            return ["Välkommen till femte deltestet!", "\n", "Här skall du klicka på symboler som: 1. Har en annan färg än röd, 2. Har en annan form än kvadrat, 3. Är röd och kvadrat.", "Symbolerna visas i 1 sekund vardera.", "Rätt svar ger " + config.scorePerQuestion + " poäng och fel svar 0 poäng.", "\n", "Klicka för att fortsätta..."]; // eslint-disable-line max-len
        },
        resultArray: function() {
            return ["Dina poäng: " + score, "Max möjliga poäng: " + config.getMaxScore(), "\n", "Klicka för att fortsätta..."]; // eslint-disable-line max-len
        }
    };
    var progressBarFn = window.HelpFunctions.progressBar;
    var clearAllElements = window.HelpFunctions.clearAllElements;
    var shapeHtml = {
        rectangleRed: `<div class="rectangleShape bgColRed"></div>`,
        rectangleYellow: `<div class="rectangleShape bgColYellow"></div>`,
        rectangleBlue: `<div class="rectangleShape bgColBlue"></div>`,
        rectangleGree: `<div class="rectangleShape bgColGreen"></div>`,
        triangleRed: `<div class="triangleShape bordBtmRed"></div>`,
        triangleYellow: `<div class="triangleShape bordBtmYellow"></div>`,
        triangleBlue: `<div class="triangleShape bordBtmBlue"></div>`,
        triangleGreen: `<div class="triangleShape bordBtmGreen"></div>`,
        circleRed: `<div class="circleShape bgColRed"></div>`,
        circleYellow: `<div class="circleShape bgColYellow"></div>`,
        circleBlue: `<div class="circleShape bgColBlue"></div>`,
        circleGreen: `<div class="circleShape bgColGreen"></div>`,
        squareRed: `<div class="squareShape bgColRed"></div>`,
        squareYellow: `<div class="squareShape bgColYellow"></div>`,
        squareBlue: `<div class="squareShape bgColBlue"></div>`,
        squareGreen: `<div class="squareShape bgColGreen"></div>`,

    };

    var shape = {
        shapeHtml: "",
        shapeTarget: document.getElementsByClassName('squareContainer')[0],
        drawShape: function (targ) {
            targ.innerHTML = this.shapeHtml;
            return targ;
        },
        init: function (tmpHtml) {
            this.shapeHtml = tmpHtml;
        }
    };

    listConfig = [
        {
            criteria: 'Har en annan färg än röd',
            id: 0,
        },
        {
            criteria: 'Har en annan form än kvadrat',
            id: 1,
        },
        {
            criteria: 'Är röd och kvadrat',
            id: 2,
        },
    ];

    /**
     * Makes shape objects
     */
    function makeShapeObjs() {
        var circleBlue = Object.create(shape);
        var circleRed = Object.create(shape);
        var circleYellow = Object.create(shape);
        var circleGreen = Object.create(shape);
        var rectangleBlue = Object.create(shape);
        var rectangleRed = Object.create(shape);
        var rectangleYellow = Object.create(shape);
        var rectangleGreen = Object.create(shape);
        var squareBlue = Object.create(shape);
        var squareRed = Object.create(shape);
        var squareYellow = Object.create(shape);
        var squareGreen = Object.create(shape);
        var triangleBlue = Object.create(shape);
        var triangleRed = Object.create(shape);
        var triangleYellow = Object.create(shape);
        var triangleGreen = Object.create(shape);
        var allObjects;

        circleBlue.init(shapeHtml.circleBlue);
        circleRed.init(shapeHtml.circleRed);
        circleYellow.init(shapeHtml.circleYellow);
        circleGreen.init(shapeHtml.circleGreen);
        rectangleBlue.init(shapeHtml.rectangleBlue);
        rectangleRed.init(shapeHtml.rectangleRed);
        rectangleYellow.init(shapeHtml.rectangleYellow);
        rectangleGreen.init(shapeHtml.rectangleGreen);
        squareBlue.init(shapeHtml.squareBlue);
        squareRed.init(shapeHtml.squareRed);
        squareYellow.init(shapeHtml.squareYellow);
        squareGreen.init(shapeHtml.squareGreen);
        triangleBlue.init(shapeHtml.triangleBlue);
        triangleRed.init(shapeHtml.triangleRed);
        triangleYellow.init(shapeHtml.triangleYellow);
        triangleGreen.init(shapeHtml.triangleGreen);

        allObjects = [rectangleRed, squareBlue, triangleGreen, circleYellow, rectangleBlue, squareGreen, triangleYellow, circleRed, rectangleYellow, squareRed]; // eslint-disable-line max-len

        return allObjects;
    }

    /**
     * Here the test will be built
     * @param {Element} target
     */
    function makeTheTest(target) {
        var intervId;
        var clickHandler;
        var shapeCount = 0;
        var allObjects = makeShapeObjs();
        var tableContainer;
        var progressBarContainer;
        var progressBar;
        var squareContainer;
        var squareParent;
        var square;

        //Make the progressbar
        progressBarContainer = document.createElement('div');
        progressBar = document.createElement('div');
        progressBarContainer.id = 'progressBarContainer';
        progressBarContainer.style.height = 20 + 'px';
        progressBarContainer.style.width = 730 + 'px';
        progressBarContainer.style.backgroundColor = 'lightgrey';
        progressBar.id = 'progressBar';
        progressBarContainer.appendChild(progressBar);
        target.appendChild(progressBarContainer);

        //Make the list
        tableContainer = document.createElement('div');
        tableContainer.classList.add('tablecontainer');

        for (var iii=0; iii<listConfig.length; iii++) {
            var listEl = document.createElement('button');

            listEl.id = listConfig[iii].id;
            listEl.innerHTML = listConfig[iii].criteria;
            listEl.classList.add('listEl');
            tableContainer.appendChild(listEl);
            target.appendChild(tableContainer);
        }

        //Make container and parents for shapes
        squareParent = document.createElement('div');
        squareParent.classList.add('squareParent');
        squareParent.style.borderColor = 'transparent';
        square = document.createElement('div');
        square.classList.add('square');
        squareParent.appendChild(square);
        squareContainer = document.createElement('div');
        squareContainer.classList.add('squareContainer');
        squareContainer.appendChild(squareParent);
        target.appendChild(squareContainer);


        //make the shapes
        /**
         * Creates an chaped element with different background colors
         */
        function makeElement() {
            allObjects[shapeCount].drawShape(square).addEventListener('click', clickHandler);
            shapeCount += 1;
        }

        /**
         * Tests if this shape that was clicked meet some criterias
         * @param {*} that
         */
        function testShape(that) {
            var thatChild = that.childNodes[0];

            if (thatChild.className.includes('bgColRed') && thatChild.className.includes('squareShape')) { // eslint-disable-line max-len
                that.parentNode.style.borderColor = 'green';
                score = setScore(score);
            } else if (thatChild.className.includes('bgColRed') || thatChild.className.includes('bordBtmRed')) { // eslint-disable-line max-len
                that.parentNode.style.borderColor = 'red';
            } else if (thatChild.className.includes('squareShape')) {
                that.parentNode.style.borderColor = 'red';
            } else {
                score = setScore(score);
                that.parentNode.style.borderColor = 'green';
            }
        }

        /**
         * Handles what will happen on click
         */
        clickHandler = function () {
            testShape(this);
            this.removeEventListener('click', clickHandler);
        };

        progressBarFn(21000);
        intervId = window.setInterval(function () {
            makeElement();
            window.setTimeout(function() {
                clearAllElements(square);
                squareParent.style.borderColor = 'transparent';
            }, 1000);
        }, 2000);

        window.setTimeout(function () {
            clearInterval(intervId);
            window.HelpFunctions.clearAllElements(target);
            window.Test.resultPresentation(5);
        }, 21000);

        document.getElementById('headline').innerHTML = config.headline;
    }

    /**
     * Returns the score of the test
     */
    function getScore() {
        return score;
    }

    /**
     * Sets the score
     * @param {Number} points the scores
     */
    function setScore(points) {
        return points + config.scorePerQuestion;
    }

    /**
     * Starts this module
     * @param {Element} target the parent
     */
    function init(target) {
        score = 0;
        makeTheTest(target);
    }

    return {
        init: init,
        config: config,
        presentationArray: config.presentationArray,
        resultpresentationArray: config.resultArray,
        getScore: getScore,

    };
})();
