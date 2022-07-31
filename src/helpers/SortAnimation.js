export const SortAction = {
    Start: 'Start',
    Swap: 'Swap',
    Compare: 'Compare',
    Done: 'Done'
};

export class SortAnimation {
    constructor(array) {
        this.array = array;
        this.steps = [];
    }

    get length() {
        return this.steps.length;
    }

    getStep(index) {
        return this.steps[index];
    }

    addStartStep() {
        this.steps.push({
            action: SortAction.Start,
            indexes: Array.from(Array(this.array.length).keys())
        })
    }

    addSwapStep(i1, i2) {
        this.steps.push({
            action: SortAction.Swap,
            indexes: [i1, i2]
        });
    }

    addCompareStep(i1, i2) {
        this.steps.push({
            action: SortAction.Compare,
            indexes: [i1, i2]
        });
    }

    addCompleteStep() {
        this.steps.push({
            action: SortAction.Done,
            indexes: Array.from(Array(this.array.length).keys())
        });
    }
}