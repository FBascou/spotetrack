export const checkAmountIsPlural = (amount: number, word: string) => {
    if (amount === 1) {
        return `${amount} ${word}`;
    } else {
        return `${amount} ${word}s`;
    }
};

export const sortArray = (array: Array<any>, key: string) => {
    if (array.length !== 0 && array !== undefined) {
        return array.sort((a, b) => a[key] - b[key]);
    }
    return array;
};
