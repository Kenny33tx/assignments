const words = ['listen', 'silent', 'dog', 'god', 'hello', 'world'];
const target = "enlist";

function filterAnagrams(arr, target) {
    const sortedTarget = target.split('').sort().join('');

    const finalArr = arr.filter(word => {
        if (word.length === target.length) {
            const sortedWord = word.split('').sort().join('');
            return sortedWord === sortedTarget;
        }
        return false;
    });

    return finalArr;
}

const result = filterAnagrams(words, target);
console.log(result); // Output: ["listen", "silent"]



const people = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 },
    { name: 'David', age: 25 },
    ];
    
function sortByMultipleCriteria(people) {
return people.sort((a,b)=>{
    if(a.age !== b.age){
   return a.age-b.age
        
    }else{
        return a.name < b.name ? -1 : (a.name > b.name ? 1 : 0)
    }
    })    

}

const sortedPeople = sortByMultipleCriteria(people);
console.log(sortedPeople);





// Expected outcome: [
//  { name: 'Bob', age: 25 },
//  { name: 'David', age: 25 },
//  { name: 'Alice', age: 30 },
//  { name: 'Charlie', age: 35 }
// ]


// Write a function called calculateTotalPrice that calculates the total price for each product in an array of objects representing products, where each object has a name (string), price (number), and quantity (number) property. The function should return a new array containing objects with the name and totalPrice properties, where totalPrice is the result of multiplying the price with the quantity for each product.

function calculateTotalPrice(products) {
  const Arr = products.map(product =>({
    name:product.name, totalPrice:product.price * product.quantity
  })
    
  )
  return Arr
}

const products = [
  { name: 'Apple', price: 1.5, quantity: 3 },
  { name: 'Banana', price: 0.75, quantity: 5 },
  { name: 'Orange', price: 1.25, quantity: 2 },
];

const totalPriceArray = calculateTotalPrice(products);
console.log(totalPriceArray);

// Output: [
//  { name: 'Apple', totalPrice: 4.5 },
//  { name: 'Banana', totalPrice: 3.75 },
//  { name: 'Orange', totalPrice: 2.5 }
// ]
