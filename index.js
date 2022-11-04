// 1.

/*
    Write a JavaScript function to check two given numbers and return true if one of the numbers is 50 or if their sum is 50.
 */

const function1 = (num1, num2) => {

    return num1 === 50 || num2 === 50 || num1 + num2 === 50;

};

// console.log(function1(10, 20));

// 2.

/*
    Write a JavaScript function to check if a given integer is negative or positive. 
*/

const function2 = (num) => {

    return num < 0 ? 'negative' : num > 0 ? 'positive' : 'neutral'; // ternary operator

};

// 3.

/*
    Write a JavaScript program to create a new string adding "Py" in front of a given string. 
    If the given string begins with "Py" then return the original string.
 */

const function3 = (s) => {

    return s.startsWith('Py') ? s : `Py${s}`;

};

// 4.

/* 
    Write a JavaScript program to find the largest of three given integers.

*/

const function4 = (...a) => {

    if (a.length === 0) return;

    return a.reduce((acc, curr) => {

        if (curr > acc) acc = curr;

        return acc;

    }, a[0]);

};

// 5.
/*
 Write a JavaScript program to find a value which is nearest to 100 from two different given integer values.
 */

const function5 = (...a) => {

    let smallestDiff100 = Infinity;

    let nearestTo100;

    for (let num of a) {

        if (!nearestTo100) nearestTo100 = num;

        const diff100 = 100 - num;

        if (diff100 < smallestDiff100) {

            smallestDiff100 = diff100;

            nearestTo100 = num;

        };

    };

    return nearestTo100;

};


// 6.
/*
Write a JavaScript program to check three given numbers, if the three numbers
 are same return 30 otherwise return 20 and if two numbers are same return 40
 */

const function6 = (...a) => {

    const freqMap = {};

    const freqMapInv = {};

    for (let num of a) {

        const sNum = `${num}`;

        !freqMap[sNum] ? freqMap[sNum] = 1 : freqMap[sNum]++;

    };

    for (key in freqMap) {

        const sNumVal = freqMap[key];

        freqMapInv[sNumVal] = key;

    };

    if ('3' in freqMapInv) return 30;

    if ('2' in freqMapInv) return 40;

    return 20;

};

// 7.
/*  Write a JavaScript program to reverse a given string.
 
 */

const function7 = (s) => {

    let reverseString = '';

    for (let letter of s) {

        reverseString = letter + reverseString;

    };

    return reverseString;

};

// 8.
/*
Write a JavaScript program to count the number of vowels in a given string.
*/

const function8 = (s) => {

    const vowelMap = {
        'a': true,
        'e': true,
        'i': true,
        'o': true,
        'u': true,
    };

    let vowelCount = 0;

    for (let letter of s) {

        const lowerCaseLetter = letter.toLowerCase();

        if (lowerCaseLetter in vowelMap) vowelCount++;

    };

    return vowelCount;

};


// 9.
/*
  Write a Javascript program that converts a string to an array.
 */

const function9 = (s) => {

    return [...s];

};

// 10.
/*
Create a Javascript object with 2 properties and 2 methods.
*/

const object10 = {
    property1: 'first property',
    property2: 'second property',
    getProperty1() {
        return this.property1;
    },
    getProperty2() {
        return this.property2;
    }
};



