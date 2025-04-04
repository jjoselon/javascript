function ConsecutiveNumbers(arr) {

    let max = Math.max(...arr);
    let min = Math.min(...arr);

    console.log(min, max);

    return (max - min) - (arr.length - 1)

}

console.log(ConsecutiveNumbers([6,10,5,20,1]));