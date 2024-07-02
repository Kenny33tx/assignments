
// axios.get("https://swapi.dev/api/people/1")
// .then(reponse => console.log(reponse.data.name))
// .catch(error => console.log(error))

const people = [ "John", "Adam", "Amber" ]

function peopleElements(arr) {
    const newPeople = arr.map((name)=>{
       return `<h1> ${name}</h1>`
    })
    return newPeople
}

console.log(peopleElements(people))