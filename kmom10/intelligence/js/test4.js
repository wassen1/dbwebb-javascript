window.Test4 = (function () {
    'use strict';
    var count;
    var score;
    var listConfig;
    var config = {
        headline: 'Deltest 4',
        presentationColor: 'yellow',
        resultColor: 'rgb(47, 179, 255)',
        scorePerQuestion: 1,
        getMaxScore: function() {
            return config.scorePerQuestion * listConfig.length;
        },
        presentationArray: function() {
            return ["Välkommen till fjärde deltestet!", "\n", "Här skall du klicka på symboler i den ordning som listan visar.", "Dessa visas i 15 sekunder.", "Rätt svar ger " + config.scorePerQuestion + " poäng och fel svar 0 poäng.", "\n", "Klicka för att fortsätta..."]; // eslint-disable-line max-len
        },
        resultArray: function() {
            return ["Dina poäng: " + score, "Max möjliga poäng: " + config.getMaxScore(), "\n", "Klicka för att fortsätta..."]; // eslint-disable-line max-len
        }
    };
    var getRandomInt = window.HelpFunctions.getRandomInt;
    var testAnswer = window.HelpFunctions.testAnswer;
    var progressBarFn = window.HelpFunctions.progressBar;
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
        },
        init: function (tmpHtml) {
            this.shapeHtml = tmpHtml;
        }
    };

    listConfig = [
        {
            shape: 'Röd rektangel',
            id: 0,
        },
        {
            shape: 'Blå kvadrat',
            id: 1,
        },
        {
            shape: 'Grön triangel',
            id: 2,
        },
        {
            shape: 'Gul cirkel',
            id: 3,
        },
        {
            shape: 'Blå rektangel',
            id: 4,
        },
        {
            shape: 'Grön kvadrat',
            id: 5,
        },
        {
            shape: 'Gul triangel',
            id: 6,
        },
        {
            shape: 'Röd cirkel',
            id: 7,
        },
        {
            shape: 'Gul rectangel',
            id: 8,
        },
        {
            shape: 'blå triangel',
            id: 9,
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

        var allObjects = [rectangleRed, squareBlue, triangleGreen, circleYellow, rectangleBlue, squareGreen, triangleYellow, circleRed, rectangleYellow, triangleBlue]; // eslint-disable-line max-len

        return allObjects;
    }

    /**
     * Here the test will be built
     * @param {Element} target
     */
    function makeTheTest(target) {
        var squares;
        var progressBarContainer;
        var progressBar;
        var tableContainer;
        var tmp;
        var tmpArr;
        var tmpParent;
        var randomInt;
        var randomEl;
        var listEl;
        var questionContainer;
        var allObjects = makeShapeObjs();

        //Make progress bar
        progressBarContainer = document.createElement('div');
        progressBarContainer.id = 'progressBarContainer';
        progressBarContainer.style.height = 20 + 'px';
        progressBarContainer.style.width = 730 + 'px';
        progressBarContainer.style.backgroundColor = 'lightgrey';
        progressBar = document.createElement('div');
        progressBar.id = 'progressBar';
        progressBarContainer.appendChild(progressBar);
        target.appendChild(progressBarContainer);

        //Make the list
        tableContainer = document.createElement('div');
        tableContainer.classList.add('tablecontainer');
        tmpArr = listConfig.map(function(obj) {
            return Object.assign({}, obj);
        });
        for (var iii=0; iii<listConfig.length; iii++) {
            randomInt = getRandomInt(0, tmpArr.length);
            randomEl = tmpArr.splice(randomInt, 1)[0];
            listEl = document.createElement('button');
            listEl.innerHTML = randomEl.shape;
            listEl.id = randomEl.id;
            listEl.classList.add('listEl');
            tableContainer.appendChild(listEl);
            target.appendChild(tableContainer);
        }

        //Make the shapes
        questionContainer = document.createElement('div');
        questionContainer.classList.add('squareContainer');
        for (var i = 0; i < listConfig.length; i++) {
            tmpParent = document.createElement('div');
            tmp = document.createElement('div');
            tmp.classList.add('square');
            tmp.id = listConfig[i].id;
            tmpParent.classList.add('squareParent');
            tmpParent.style.borderColor = 'transparent';
            tmpParent.appendChild(tmp);
            questionContainer.appendChild(tmpParent);
            allObjects[i].drawShape(tmp);
        }
        target.appendChild(questionContainer);


        /**
         * Handles what will happen on click
         */
        var clickHandler = function() {
            var thatChild = this.childNodes[0];
            var correctButton = tableContainer.childNodes[count].id;

            this.childNodes[0].classList.remove('hide');
            if (testAnswer(thatChild.id, correctButton)) {
                tableContainer.childNodes[count].classList.add('correct');
                score = setScore(score);
            } else {
                tableContainer.childNodes[count].classList.add('fail');
            }
            count += 1;
            if (count >= listConfig.length) {
                this.removeEventListener('click', clickHandler);
            }
        };

        squares = document.querySelectorAll('.square');

        for (var ii = 0; ii < squares.length; ii++) {
            squares[ii].parentNode.addEventListener('click', clickHandler);
        }

        progressBarFn(15000);

        window.setTimeout(function () {
            window.HelpFunctions.clearAllElements(target);
            window.Test.resultPresentation(4);
        }, 15000);
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

    function init(target) {
        score = 0;
        count = 0;
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
