"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomNumber = exports.getUserInput = void 0;
/**
 * Fetch input data
 * @param elementID
 * @returns input element
 */
function getInputVal(elementID) {
    var inputElement = document.getElementById(elementID);
    return inputElement.value;
}
exports.getUserInput = getInputVal;
/**
 * Generate random number within a given range
 * @param max maximum number
 * @param min minimum number
 * @returns a random number
 */
function getRandomNumber(max, min) {
    var randNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return randNum;
}
exports.getRandomNumber = getRandomNumber;
