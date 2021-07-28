class Kindergarden {
    constructor(name) {
        this.name = name;
        this.kidCount = 3;
        this.kidList = [];
    }
    intro() {
        console.log(`"${this.name}" can accept ${this.kidCount} kids.`);
    }
    updateKidsLimit(newCount) {
        if (this.kidList.length > newCount) {
            console.log(`"${this.name}" can not update kids limit right now.`);
            return;
        } else {
            this.kidCount = newCount;
            console.log(`"${this.name}" can accept ${this.kidCount} kids now.`);
        }

    }
    addKid(newKid) {
        if (this.kidList.length >= this.kidCount) {
            console.log(`${newKid} can not enter "${this.name}" kindergarden - it's at a full capacity of ${this.kidCount} kids.`);
            return;
        } else {
            this.kidList.push(newKid);
            console.log(`${newKid} has entered "${this.name}" kindergarden.`);
        }

    }
    sayHi() {
        let kidNameList = '';
        for (let i = 0; i < this.kidList.length; i++) {
            const kidName = this.kidList[i];

            if (kidName === this.kidList[this.kidList.length - 1]) {
                kidNameList += `and ${kidName}.`;
                break;
            } else {
                kidNameList += kidName + ', ';
            }

        }
        console.log(`"${this.name}" is visited by: ${kidNameList}`);
    }


}

module.exports = Kindergarden;