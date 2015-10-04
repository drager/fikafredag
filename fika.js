const d = new Date();

const week = () => {
    const target = new Date(d.valueOf());
    target.setDate(target.getDate() - ((d.getDay() + 6) % 7) + 3);
    return 1 + Math.ceil((target -
            new Date(target.getFullYear(), 0, 4)) / 86400000 / 7);

};

const year = () => {
    return d.getFullYear();
};

class Person {
    constructor() {
        this.persons = ['Andreas', 'Erik', 'Jesper', 'Rasmus', 'Sherief'];
    }

    pickPerson() {
        return this.persons[(week() + year() * week()) % this.persons.length];
    }
}


class Timer {
    constructor(display) {
        this.display = display;
    }

    start() {
        setInterval(() => {
            this.changeDisplayTime(this.friday());
        }, 1000);
    }

    changeDisplayTime(time) {
        this.display.textContent = `${time.days} dagar, ${time.hours} timmar,
            ${time.minutes} minuter och ${time.seconds} sekunder`;
    }

    friday() {
        const now = new Date(new Date().getTime() + 58 * 60 * 60 * 1000);
        return {
            days: 7 - now.getDay() || 7,
            hours: 24 - now.getHours(),
            minutes: 60 - now.getMinutes(),
            seconds: 60 - now.getSeconds()
        }
    }
}

class Background {
    constructor() {
        this.document = document;
        this.setRandomBackground();
        //this.displayIfFriday();
    }

    setRandomBackground() {
        let hex = this.getRandomHex();
        const bodyElement = this.document.querySelector('body');
        bodyElement.style.background = `#${hex}`;

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

    isFriday() {
        return new Date().getDay() === 5;
    }

    getRandomHex() {
        return (0x1000000 + (Math.random()) * 0xffffff)
            .toString(16)
            .substr(1, 6);
    }
}

(() => {

    const flex = document.querySelector('.flex');
    const h1 = document.createElement('h1');
    //const always = document.createElement('h2');

    h1.textContent = `Fika på fredag! (Vecka ${week()})`;
    //always.className = 'always';
    //always.textContent = 'Självklart är det fika!';
    flex.appendChild(h1);
    //flex.appendChild(always);
    flex.appendChild(document.createElement('time'));

    new Background();

    const timer = new Timer(document.querySelector('time'));
    timer.start();

    const person = new Person();
    const personElement = document.createElement('h3');
    personElement.textContent = `Det är ${person.pickPerson()} som bjuder
    denna fredag!`;
    flex.appendChild(personElement);

})();
