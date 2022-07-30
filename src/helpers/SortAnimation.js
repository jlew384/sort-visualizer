export const SortAction = {
    Swap: 'Swap',
    Compare: 'Compare',
    Done: 'Done'
};

export class SortAnimation {
    constructor() {
        this.steps = [];
    }

    get length() {
        return this.steps.length;
    }

    getStep(index) {
        return this.steps[index];
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
            indexes: Array.from(Array(this.steps.length).keys())
        });
    }
}