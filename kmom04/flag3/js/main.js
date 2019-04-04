(function () {
    'use strict';

    var flagHtml = {
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

    var flag = {
        flagHtml: "",
        flagTarget: document.getElementsByClassName('flag-canvas')[0],
        drawFlag: function () {
            this.flagTarget.insertAdjacentHTML('beforeend', this.flagHtml);
        },
        init: function (flagHtml) {
            this.flagHtml = flagHtml;
        }
    };

    var swedenFlag = Object.create(flag);
    var belgiumFlag = Object.create(flag);
    var franceFlag = Object.create(flag);
    var indonesiaFlag = Object.create(flag);

    swedenFlag.init(flagHtml.sweden);
    belgiumFlag.init(flagHtml.belgium);
    franceFlag.init(flagHtml.france);
    indonesiaFlag.init(flagHtml.indonesia);

    var allObjects = [swedenFlag, belgiumFlag, franceFlag, indonesiaFlag];

    for (var i = 0; i < allObjects.length; i++) {
        allObjects[i].drawFlag();
    }

    window.console.log('Sandbox is ready!');
})();
