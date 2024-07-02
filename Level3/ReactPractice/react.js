// ReactDOM.render(<p>Hello, world!</p>, document.getElementById("root"));
// function Page (){
//     return(
//         <div>
//          <h1 className="header">This is JSX</h1>
//          <p>This is a paragraph</p>
//    </div>
//     )
// }

// <nav>(){
//     <Page/>
// }
// </nav>

// Level 3 midlevel assessment 
const arr1 = [-1, 150, 190, 170, -1, -1, 160, 180]
const arr2 =[5, 3, 1]
const arr3 = [100, -1, 50, -1, 75]
arr1.sort((a,b)=> a<b)

 console.log(arr1)

 arr2.sort((a,b)=>a+b)
 console.log(arr2)

 arr3.sort((a,b)=>a>b)
 console.log(arr3)

// console.log(solution([-1, 150, 190, 170, -1, -1, 160, 180]))
// console.log(solution([5, 3, 1]))
// console.log(solution([-1, -1, -1, -1]))
// console.log(solution([100, -1, 50, -1, 75]))

//Challenge 2: Counting vowels

function greeting(str){
    const vowels= ["a","e","i","o","u"] 
    let count = 0;

    for(let i = 0;i<str.length; i++){
            if(vowels.includes(str[i])){
                count++
            }
    }
        return count;

}

const str1 = 'Hello, World!';
const greetingCount = greeting(str1);
console.log(greetingCount); // Output: 3

function countVowels(str){
    const vowelArr= ["a","e","i","o","u","A","E","I","O","U"]
    let count = 0

        for(let i =0; i<str.length; i++){
            if(vowelArr.includes(str[i])){
                count++
            }
           
        }
        return count;
}
 const str2= "Counting Vowels"
 const vowelCount =countVowels(str2);
 console.log(vowelCount)

 
 function solution(arr){
     if(arr.includes(-1)) {
         const filteredArr = arr.filter(num => num !== -1)
         filteredArr.sort((a, b) => a - b)
         for(let i = 0; i < arr.length; i++) {
             if(arr[i] !== -1){
                 arr[i] = filteredArr[0]
                 filteredArr.splice(0, 1)
             }
         }
     }
     else arr.sort((a, b) => a -b)
     return arr
 }

 // Write a JavaScript function called **`findSumOfTwo`** that takes
 //in an array of numbers and a target number. The function should find
 //two numbers in the array that add up to the target number and return
 //them as an array. If there are multiple pairs that satisfy the condition,
 //return any one of them. If no such pair exists, return an empty array.
 
 // Implement the **`findSumOfTwo`** function using either the provide
 // example solutions or your own solution.
 
 function findSumOfTwo(numbers, target) {
  for(let i =0;i<numbers.length; i++){
    for(let j = i +1;j<numbers.length; j++){
        if(numbers[i] + numbers[j] === target){
            return [numbers[i],numbers[j]]
        }
    }
}
 }
 
 console.log(findSumOfTwo([2, 4, 7, 11, 15], 9)); // Output: [2, 7]
 
 console.log(findSumOfTwo([5, 12, 3, 9, 1], 8)); // Output: [3, 5]