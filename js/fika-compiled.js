'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var d = new Date();

var week = function week() {
    var target = new Date(d.valueOf());
    target.setDate(target.getDate() - (d.getDay() + 6) % 7 + 3);
    return 1 + Math.ceil((target - new Date(target.getFullYear(), 0, 4)) / 86400000 / 7);
};

var year = function year() {
    return d.getFullYear();
};

var Person = (function () {
    function Person() {
        _classCallCheck(this, Person);

        this.persons = ['Andreas', 'Erik', 'Jesper', 'Rasmus', 'Sherief'];
    }

    _createClass(Person, [{
        key: 'pickPerson',
        value: function pickPerson() {
            return this.persons[(week() + year() * week()) % this.persons.length];
        }
    }]);

    return Person;
})();

var Timer = (function () {
    function Timer(display) {
        _classCallCheck(this, Timer);

        this.display = display;
    }

    _createClass(Timer, [{
        key: 'start',
        value: function start() {
            var _this = this;

            setInterval(function () {
                _this.changeDisplayTime(_this.friday());
            }, 1000);
        }
    }, {
        key: 'changeDisplayTime',
        value: function changeDisplayTime(time) {
            this.display.textContent = time.days + ' dagar, ' + time.hours + ' timmar,\n            ' + time.minutes + ' minuter och ' + time.seconds + ' sekunder';
        }
    }, {
        key: 'friday',
        value: function friday() {
            var now = new Date(new Date().getTime() + 60 * 60 * 60 * 1000);
            return {
                days: 7 - now.getDay() || 7,
                hours: 24 - now.getHours(),
                minutes: 60 - now.getMinutes(),
                seconds: 60 - now.getSeconds()
            };
        }
    }]);

    return Timer;
})();

var Background = (function () {
    function Background() {
        _classCallCheck(this, Background);

        this.document = document;
        this.setRandomBackground();
        //this.displayIfFriday();
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

        // TODO: Display when counter ends!
        //displayIfFriday() {
        //    const flex = this.document.querySelector('.flex');
        //    const text = this.document.querySelector('.always');
        //    if (this.isFriday()) {
        //        text.textContent = 'Yes! Idag är det finfika!';
        //    }
        //    flex.appendChild(text);
        //}

    }, {
        key: 'isFriday',
        value: function isFriday() {
            return new Date().getDay() === 5;
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

    var flex = document.querySelector('.flex');
    var h1 = document.createElement('h1');
    //const always = document.createElement('h2');

    h1.textContent = 'Fika på fredag! (Vecka ' + week() + ')';
    //always.className = 'always';
    //always.textContent = 'Självklart är det fika!';
    flex.appendChild(h1);
    //flex.appendChild(always);
    flex.appendChild(document.createElement('time'));

    new Background();

    var timer = new Timer(document.querySelector('time'));
    timer.start();

    var person = new Person();
    var personElement = document.createElement('h3');
    personElement.textContent = 'Det är ' + person.pickPerson() + ' som bjuder\n    denna fredag!';
    flex.appendChild(personElement);
})();

//# sourceMappingURL=fika-compiled.js.map