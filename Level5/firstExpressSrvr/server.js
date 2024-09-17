const express= require("express")
const app= express()


// 1.end point(mount/path)
// 2. CallBack Fucntion
app.use(express.json())

// fake users
const cars =[
    { make:"Honda", model:"civic"},
   {make:"jeep", model:"odyssey"},
   {make:"mercedes", model:":Benz"},
   {make:"dodge", model:"hellcat"},
   {make:"chevrolet", model:"tahoe"}
]


app.get("/cars",(req,res)=>{
res.send(cars)
})

app.post("/cars",(req,res)=>{
const newCar= req.body
cars.push(newCar)
res.send(`Successfully added ${newCar.make} to the database!`)
})

// needs two arguments- ports || call backs
app.listen(9000, ()=>{
    console.log("server is running on port 9000.")
})