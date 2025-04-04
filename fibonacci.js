






/**miiooo */
function FibonacciChecker2(num) {
    let a = 0, b = 1;

    while (a <= num) {
        
        if (a === num) return "yes";

        let temp = b;
        a = a + temp;
        b = a;
        a = temp;
    }
    return "no";
}

console.log(FibonacciChecker2(10));

