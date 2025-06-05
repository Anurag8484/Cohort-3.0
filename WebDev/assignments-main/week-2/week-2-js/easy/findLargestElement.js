/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let max = numbers[0]
    if (numbers.length === 0){
        return undefined
    }


    for (let num of numbers){
        if (num > max){
            max = num
        }
    }

    return max
}

module.exports = findLargestElement;