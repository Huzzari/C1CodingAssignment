import {bonusQuestion, questionOne, questionTwo} from './index';
import {account} from "./types";

describe('questionOne', () => {
    test('should return expected result when input is valid', () => {
        // Arrange
        const testInput: number[] = [1, 2, 3, 4, 5, 6];

        //Act
        const testResult = questionOne(testInput);

        //Assert
        expect(testResult.sum).toBe(21);
        expect(testResult.average).toBe(3.5);
    });

    test('should return expected result when input is valid one element array', () => {
        // Arrange
        const testInput: number[] = [5];

        //Act
        const testResult = questionOne(testInput);

        //Assert
        expect(testResult.sum).toBe(5);
        expect(testResult.average).toBe(5);
    });

    test('should return expected result when input has negative values', () => {
        // Arrange
        const testInput: number[] = [-2, -3, 5];

        //Act
        const testResult = questionOne(testInput);

        //Assert
        expect(testResult.sum).toBe(0);
        expect(testResult.average).toBe(0);
    });

    test('should return expected result when input has decimal values', () => {
        // Arrange
        const testInput: number[] = [2.3, 4.9, 7.2];

        //Act
        const testResult = questionOne(testInput);

        //Assert
        expect(testResult.sum).toBe(14.4);
        expect(testResult.average).toBe(4.8);
    });

    test('should return null values when input has no elements', () => {
        // Arrange
        const testInput: number[] = [];

        //Act
        const testResult = questionOne(testInput);

        //Assert
        expect(testResult.sum).toBe(null);
        expect(testResult.average).toBe(null);
    });
});

describe('questionTwo', () => {
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
        const testResult = questionTwo(testInput);

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
        const testResult = questionTwo(testInput);

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
        const testResult = questionTwo(testInput);

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
        const testResult = questionTwo(testInput);

        // Assert
        expect(testResult.length).toBe(0);
    });
});

describe('bonusQuestion', () => {
    test('should return empty array if input is empty', () => {
        // Arrange
        const testInput: any[] = [];

        // Act
        const testResult = bonusQuestion(testInput);

        // Assert
        expect(testResult.length).toBe(0);
    });

    test('should return unique numbers', () => {
        // Arrange
        const testInput: number[] = [1, 2, 4, 5, 7, 4, 6, 4, 8, 8.0, 8, 5, 6, 3];

        // Act
        const testResult = bonusQuestion(testInput);

        // Assert
        expect(testResult.length).toBe(8);
        expect(testResult[0]).toBe(1);
        expect(testResult[1]).toBe(2);
        expect(testResult[2]).toBe(4);
        expect(testResult[3]).toBe(5);
        expect(testResult[4]).toBe(7);
        expect(testResult[5]).toBe(6);
        expect(testResult[6]).toBe(8);
        expect(testResult[7]).toBe(3);
    });

    test('should return unique strings', () => {
        // Arrange
        const testInput: string[] = [
            'apple',
            'banana',
            'ApPlE',
            'orange',
            'grape',
            'orange',
            'Grape',
            'MELON',
            '',
            '',
        ];

        // Act
        const testResult = bonusQuestion(testInput);

        // Assert
        expect(testResult.length).toBe(8);
        expect(testResult[0]).toBe('apple');
        expect(testResult[1]).toBe('banana');
        expect(testResult[2]).toBe('ApPlE');
        expect(testResult[3]).toBe('orange');
        expect(testResult[4]).toBe('grape');
        expect(testResult[5]).toBe('Grape');
        expect(testResult[6]).toBe('MELON');
        expect(testResult[7]).toBe('');
    });

    test('should return unique booleans', () => {
        // Arrange
        const testInput: boolean[] = [
            true,
            false,
            false,
            true,
            true
        ];

        // Act
        const testResult = bonusQuestion(testInput);

        // Assert
        expect(testResult.length).toBe(2);
        expect(testResult[0]).toBeTruthy();
        expect(testResult[1]).toBeFalsy();
    });

    test('should return unique booleans and other values', () => {
        // Arrange
        const testInput: any[] = [
            true,
            false,
            0,
            1,
            null,
            undefined,
            'true',
            'false',
            true,
            false,
            0,
            1,
            null,
            undefined,
            'TRUE',
            'FaLsE'
        ];

        // Act
        const testResult = bonusQuestion(testInput);

        // Assert
        expect(testResult.length).toBe(10);
        expect(testResult[0]).toBeTruthy();
        expect(testResult[1]).toBeFalsy();
        expect(testResult[2]).toBe(0);
        expect(testResult[3]).toBe(1);
        expect(testResult[4]).toBe(null);
        expect(testResult[5]).toBe(undefined);
        expect(testResult[6]).toBe('true');
        expect(testResult[7]).toBe('false');
        expect(testResult[8]).toBe('TRUE');
        expect(testResult[9]).toBe('FaLsE');
    });




});
