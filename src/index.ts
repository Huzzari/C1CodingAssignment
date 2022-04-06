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

    // Loop through the input accounts
    inputAccounts.forEach((element) => {
        // Check each element, if balance is > 200 then push the account to the result array
        if (element.balance >= 100){
            result.push(element)
        }
    });

    return result;
}
