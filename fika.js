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

const person = {
    pickPerson() {
        const persons = ['David', 'Andreas', 'Erik', 'Jesper', 'Rasmus', 'Sherief'];
        return persons[week() % persons.length];
    }
};

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
    }

    setRandomBackground() {
        let hex = this.getRandomHex();
        const bodyElement = this.document.querySelector('body');
        bodyElement.style.background = `#${hex}`;

        if (hex == "FFFFFF") {
            this.document.querySelector('h1').style.color = this.getRandomHex();
        }

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

    h1.textContent = `Fika på fredag! (Vecka ${week()})`;
    flex.appendChild(h1);
    flex.appendChild(document.createElement('time'));

    new Background();

    const timer = new Timer(document.querySelector('time'));
    timer.start();

    const personElement = document.createElement('h3');
    personElement.textContent = `Det är ${person.pickPerson()} som bjuder
    denna fredag!`;
    flex.appendChild(personElement);

})();
