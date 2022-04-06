# C1CodingAssignment

## Overview
Here are my solutions to the 2 example questions and the bonus question. I made a simple Typescript project to be able to use types and add some basic testing for the functions using Jest.

## Question One:

Instead of outputting a string like 'The total is 21 and the average is 3.5' I've opted to return the values of both the sum and the average contained in an object, and an interface 'sumAndAverage' was created for this. This is much more reusable in other scenarios than outputting a string containing the values. I decided to return null for the values when the array is invalid (no elements, null, undefined etc.) to make it clear in the return that no sum or average was computed. Array.reduce() was used to get the sum of the array of numbers. This visually is slightly more clean than using a loop and accomplishes the same thing. If I were to bring Lodash into the project, there is a specific array sum function that would be even better to use. Then we just divide the sum by the length of the array for the average, and return our sumAndAverage object with the correct values.

## Question Two:

For this question I decided to made an account interface to enforce types. I went with the assumption that balance should be a string since that was in the object provided, but if I was setting thsi up I would likely go with a number. An empty array will be returned if no accounts have a balance greater than 100, or if the input is somehow not an array, if it is null, udefined, or if it has no elements. If the input array does have accounts, we will loop trough the array and try to convert the balance string to a number. So long as we have a valid number, we will then check if the balance is greater than 100, and if it is we will push that account to the result array. The result array is then returned

## Bonus Question

At the time of writing this there was no specification for the type of value that would be filling the array, so I made it accept any array type. It currently should work for any basic types in Typescript. It likely will not work currently with objects, nested arrays, or anything beyond your basic type arrays. First, we create an empty result array. We simply loop through the input array and use Array.includes to check if the result array has a copy of this value or not. If it does not exist in the result array, push the element to the array.

### Notes
#### Strings:
This function is case sensitive, I am assuming that APPLE and apple are unique. Empty strings and whitespace are also valid strings for this function.

#### Numbers:
This function considers 5.0 and 5 to be the same number, and not unique. While they are slightly different, one has a decimal place and one doesn't, they are the same value numerically. 5 and 5.1 are unique.

#### Boolean:
For a strict boolean array, you can only have one of each present.

#### Mixed:
You can have an any array with strings, booleans, numbers, null, undefined, all that jazz. As far as uniqueness, I am considering the following:

true != 'true' != 1 != '1'
false != 'false' != 0 != '0' != null != undefined

While some of these values can be equated to true or false, in this instance I am considering them unique. Since 0 can also be a number, but false can only be false, it's not equivalent.

#### Other:
Things like objects and nested arrays that are outside the scope of the basic types won't work well here. To properly compare object equivalence you need much more than just a simple includes, and need to look at the values in each object to check that all the same fields are present, and equivalent.
