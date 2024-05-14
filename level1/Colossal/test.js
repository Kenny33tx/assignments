function largestNumber(num1, num2, num3){
    // return the largest 
    
    if(num1 > num2 && num1 > num3){
        return num1
    } else if(num2 > num1 && num2 > num3){
        return num2
    } else if (num3 > num1 && num3 > num2){
        return num3
    }
}

console.log(largestNumber(4, 2, 9)) // 9
console.log(largestNumber(9, 12, 1)) // 12
console.log(largestNumber(9, 2, 1)) // 9

// data in    data is being returned   // 3 nums in 1 num out
// game plan   loop and/or logic   if/else
// test and solve
