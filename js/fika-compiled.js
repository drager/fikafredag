'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Background = (function () {
    function Background() {
        _classCallCheck(this, Background);

        this.document = document;
        this.setRandomBackground();
    }

    _createClass(Background, [{
        key: 'setRandomBackground',
        value: function setRandomBackground() {
            var hex = this.getRandomHex();
            var bodyElement = this.document.querySelector('body');
            bodyElement.style.background = '#' + hex;

            if (hex == "FFFFFF") {
                this.document.querySelector('h1').style.color = this.getRandomHex();
            }
        }
    }, {
        key: 'getRandomHex',
        value: function getRandomHex() {
            return (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);
        }
    }]);

    return Background;
})();

(function () {
    new Background();
})();

//# sourceMappingURL=fika-compiled.js.map