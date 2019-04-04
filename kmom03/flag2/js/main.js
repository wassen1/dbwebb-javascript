(function () {
    'use strict';

    var myContent = document.getElementsByClassName('flag-canvas');
    var linkBelgium = document.getElementById('draw-belgium-flag');
    var linkFrance = document.getElementById('draw-france-flag');
    var linkIndonesia = document.getElementById('draw-indonesia-flag');
    var linkSweden = document.getElementById('draw-sweden-flag');
    var flagObj = {
        belgium: `<div class="flag13-15 belgien">
                    <div class="part1"></div>
                    <div class="part2">
                </div></div>`,
        france: `<div class="flag2-3 france">
                    <div class="part1">
                    </div><div class="part2">
                </div></div>`,
        indonesia: `<div class="flag2-3 indonesia">
                        <div class="part1">
                        </div><div class="part2">
                    </div></div>`,
        sweden: `<div class="flag5-8 sweden">
                    <div class="part1"></div>
                    <div class="part2"></div>
                    <div class="part3"></div>
                    <div class="part4"></div>
                </div>`
    };

    linkBelgium.addEventListener('click', function() {
        console.log("draws belgium");
        drawFlag(flagObj.belgium);
    });
    linkFrance.addEventListener('click', function() {
        console.log("draws france");
        drawFlag(flagObj.france);
    });
    linkIndonesia.addEventListener('click', function() {
        console.log("draws indonesia");
        drawFlag(flagObj.indonesia);
    });
    linkSweden.addEventListener('click', function() {
        console.log("draws sweden");
        drawFlag(flagObj.sweden);
    });


    function drawFlag(str) {
        myContent[0].insertAdjacentHTML('beforeend', str);
    }

    window.console.log('Sandbox is ready!');
})();
