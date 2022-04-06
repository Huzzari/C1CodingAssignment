import {account, sumAndAverageResult} from "./types";

// Takes in an array of numbers and returns the sum and average of that list
export function exampleOne(inputNumbers: number[]): sumAndAverageResult {
    let result: sumAndAverageResult = {
        average: null,
        sum: null
    };

    if (!Array.isArray(inputNumbers) || !inputNumbers.length) {
        // Invalid array, null, or undefined. Return null values.
        return result;
    }

    result.sum = inputNumbers.reduce((accumulator, currentValue) => accumulator + currentValue);
    result.average = result.sum / inputNumbers.length;

    return result;
}

// Takes in an array of accounts and returns an array of accounts with a balance over $100
export function exampleTwo(inputAccounts: account[]): account[] {
    // Create an empty array to add the correct accounts into
    let result: account[] = [];

    if (!Array.isArray(inputAccounts) || !inputAccounts.length) {
        // Invalid array, null, or undefined. Return empty array.
        return result;
    }

    inputAccounts.forEach((element) => {
        const parsedBalance: number = Number(element.balance);
        // If the balance string is a valid number and it is over 100, push to our result array
        if (!isNaN(parsedBalance) && parsedBalance > 100) {
            result.push(element);
        }
    });

    return result;
}

// Takes in an array of any type and returns an array of unique values.
// Note, this is not yet tested / coded to handle anything but basic types.
export function bonusQuestion(inputArray: any[]): any[] {
    let result: any[] = [];

    if (!Array.isArray(inputArray) || !inputArray.length) {
        // Invalid array, null, or undefined. Return empty array.
        return result;
    }

    // For each element in the array, if we haven't already added it to the result array, add it
    inputArray.forEach((element) => {
        if (!result.includes(element)) {
            result.push(element);
        }
    });

    return result;
}
