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


function sortByMultipleCriteria(people) {
return people.sort((a,b)=>{
    if(a.age !== b.age){
   return a.age-b.age
        
    }else{
        return a.name < b.name ? -1 : (a.name > b.name ? 1 : 0)
    }
    })    

}



const people = [
{ name: 'Alice', age: 30 },
{ name: 'Bob', age: 25 },
{ name: 'Charlie', age: 35 },
{ name: 'David', age: 25 },
];

const sortedPeople = sortByMultipleCriteria(people);
console.log(sortedPeople);

// Expected outcome: [
//  { name: 'Bob', age: 25 },
//  { name: 'David', age: 25 },
//  { name: 'Alice', age: 30 },
//  { name: 'Charlie', age: 35 }
// ]