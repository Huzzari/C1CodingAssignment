import {exampleOne, exampleTwo} from './index';
import {account} from "./types";

describe('exampleOne', () => {
    test('should return expected result when input is valid', () => {
        // Arrange
        const testInput: number[] = [1, 2, 3, 4, 5, 6];

        //Act
        const testResult = exampleOne(testInput);

        //Assert
        expect(testResult.sum).toBe(21);
        expect(testResult.average).toBe(3.5);
    });

    test('should return expected result when input is valid one element array', () => {
        // Arrange
        const testInput: number[] = [5];

        //Act
        const testResult = exampleOne(testInput);

        //Assert
        expect(testResult.sum).toBe(5);
        expect(testResult.average).toBe(5);
    });

    test('should return expected result when input has negative values', () => {
        // Arrange
        const testInput: number[] = [-2, -3, 5];

        //Act
        const testResult = exampleOne(testInput);

        //Assert
        expect(testResult.sum).toBe(0);
        expect(testResult.average).toBe(0);
    });

    test('should return expected result when input has decimal values', () => {
        // Arrange
        const testInput: number[] = [2.3, 4.9, 7.2];

        //Act
        const testResult = exampleOne(testInput);

        //Assert
        expect(testResult.sum).toBe(14.4);
        expect(testResult.average).toBe(4.8);
    });

    test('should return null values when input has no elements', () => {
        // Arrange
        const testInput: number[] = [];

        //Act
        const testResult = exampleOne(testInput);

        //Assert
        expect(testResult.sum).toBe(null);
        expect(testResult.average).toBe(null);
    });
});

describe('exampleTwo', () => {
    test('should return correct list of accounts', () => {
        // Arrange
        const testInput: account[] = [
            {accountId: 1, accountName: 'Simple Chequing', accountType: 'chequing', balance: '53.89'},
            {accountId: 2, accountName: 'Easy Savings', accountType: 'savings', balance: '129.00'},
            {accountId: 3, accountName: 'Everyday banking', accountType: 'chequing', balance: '271.51'},
            {accountId: 4, accountName: 'My First Account', accountType: 'chequing', balance: '123.29'},
            {accountId: 5, accountName: 'Groceries Money', accountType: 'chequing', balance: '478.30'},
            {accountId: 6, accountName: 'For Renovations', accountType: 'savings', balance: '100.50'}
        ];
        // Act
        const testResult = exampleTwo(testInput);

        // Assert
        expect(testResult.length).toBe(5);
        expect(testResult[0].accountId).toBe(2);
        expect(testResult[1].accountId).toBe(3);
        expect(testResult[2].accountId).toBe(4);
        expect(testResult[3].accountId).toBe(5);
        expect(testResult[4].accountId).toBe(6);
    });

    test('should ignore balance that is not a number', () => {
        // Arrange
        const testInput: account[] = [
            {accountId: 1, accountName: 'Simple Chequing', accountType: 'chequing', balance: 'Two Hundred'},
            {accountId: 2, accountName: 'Easy Savings', accountType: 'savings', balance: '2 hundred'},
            {accountId: 3, accountName: 'Everyday banking', accountType: 'chequing', balance: '100test'},
            {accountId: 4, accountName: 'My First Account', accountType: 'chequing', balance: '-200'},
            {accountId: 5, accountName: 'Groceries Money', accountType: 'chequing', balance: '100'},
            {accountId: 6, accountName: 'For Renovations', accountType: 'savings', balance: '100.50'}
        ];
        // Act
        const testResult = exampleTwo(testInput);

        // Assert
        expect(testResult.length).toBe(1);
        expect(testResult[0].accountId).toBe(6);
    });

    test('should return empty array if no accounts match', () => {
        // Arrange
        const testInput: account[] = [
            {accountId: 1, accountName: 'Simple Chequing', accountType: 'chequing', balance: 'Two Hundred'},
            {accountId: 2, accountName: 'Easy Savings', accountType: 'savings', balance: '2 hundred'},
            {accountId: 3, accountName: 'Everyday banking', accountType: 'chequing', balance: '100test'},
            {accountId: 4, accountName: 'My First Account', accountType: 'chequing', balance: '-200'},
            {accountId: 5, accountName: 'Groceries Money', accountType: 'chequing', balance: '100'},
            {accountId: 6, accountName: 'For Renovations', accountType: 'savings', balance: '99.50'}
        ];
        // Act
        const testResult = exampleTwo(testInput);

        // Assert
        expect(testResult.length).toBe(0);
    });

    test('should return empty array if input is empty array', () => {
        // Arrange
        const testInput: account[] = [
            {accountId: 1, accountName: 'Simple Chequing', accountType: 'chequing', balance: 'Two Hundred'},
            {accountId: 2, accountName: 'Easy Savings', accountType: 'savings', balance: '2 hundred'},
            {accountId: 3, accountName: 'Everyday banking', accountType: 'chequing', balance: '100test'},
            {accountId: 4, accountName: 'My First Account', accountType: 'chequing', balance: '-200'},
            {accountId: 5, accountName: 'Groceries Money', accountType: 'chequing', balance: '100'},
            {accountId: 6, accountName: 'For Renovations', accountType: 'savings', balance: '99.50'}
        ];
        // Act
        const testResult = exampleTwo(testInput);

        // Assert
        expect(testResult.length).toBe(0);
    });
});
