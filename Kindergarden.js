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
        if (this.kidList.length > this.kidCount) {
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

            if (kidName === this.kidList[this.kidList.length - 2]) {
                kidNameList += `${this.kidList[this.kidList.length - 2]} and ${this.kidList[this.kidList.length - 1]}`;
                break;
            } else {
                kidNameList += this.kidList.length === 1 ? kidName : kidName + ', ';
            }

        }
        console.log(`"${this.name}" is visited by: ${kidNameList}.`);
    }
    removeKid(kidsName) {

        let updatedKidList = [];
        for (let i = 0; i < this.kidList.length; i++) {
            if (kidsName !== this.kidList[i]) {
                updatedKidList.push(this.kidList[i])
            }
        }
        this.kidList = updatedKidList;
        console.log(`${kidsName} has left "${this.name}" kindergarden.`);

    }

}

module.exports = Kindergarden;