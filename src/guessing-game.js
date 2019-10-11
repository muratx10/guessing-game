class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        //guessed => 5
        //setRange(min = 0, max = 15)
        //15 / 2 = 8 => max = 8
        //8 / 2 = 4 => min = 4
        //(8+4)/2 = 6 => max = 6
        //(6+4)/2 = 5 => guessed
        return (this.result = Math.round((this.max + this.min) / 2));
   
    }

    lower() {
        this.max = this.result;
    }

    greater() {
        this.min = this.result;
    }
}

module.exports = GuessingGame;
