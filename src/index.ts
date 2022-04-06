/*
    Notes on the following code:

    There are a lot of comments in here, and that is primarily to make my intentions
    clear when ou read this. While I think comments can be very useful in quickly
    giving some context to the code, normally I would not clutter up the code with
    commenting on every single line.
 */

interface sumAndAverageResult {
    average: number | null;
    sum: number | null;
}

interface account {
    accountId: number,
    accountName: string,
    accountType: 'chequeing' | 'savings',
    balance: number
}

// Takes in an array of numbers and returns the sum and average of that list
export function exampleOne(inputNumbers: number[]): sumAndAverageResult {
    // Set initial values to null, which will be our return if the array is invalid.
    let result: sumAndAverageResult = {
        average: null,
        sum: null
    };

    // Check to see if the input is actually an array (not null or undefined) and length !==0
    if (!Array.isArray(inputNumbers) || !inputNumbers.length) {
        // Invalid array, return null values
        return result;
    }

    // You could also do this with any simple loop, or using lodash _.sum.
    // Reduce is a simple, clean way to iterate over the array and get the sum of all elements
    result.sum = inputNumbers.reduce((accumulator, currentValue) => accumulator + currentValue);
    //Divide the sum by the length of the array to get the average
    result.average = result.sum / inputNumbers.length;

    return result;
}

export function exampleTwo(inputAccounts: account[]): account[] {
    // Create an empty array to add the correct accounts into
    let result: account[] = [];

    // Loop through the input accounts
    inputAccounts.forEach((element) => {
        // Check each element, if balance is > 200 then push the account to the result array
        if (element.balance > 200){
            result.push(element)
        }
    });

    console.log(result);

    return result;
}
