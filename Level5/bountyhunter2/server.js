const express= require("express")
const app= express()
const {v4: uuidv4} = require('uuid')


// 1.end point(mount/path)
// 2. CallBack Fucntion
app.use(express.json())

// fake users
const BountyHunters =[
    { make:"Honda", model:"civic",_id:uuidv4()},
   {make:"jeep", model:"odyssey",_id:uuidv4()},
   {make:"mercedes", model:":Benz",_id:uuidv4()},
   {make:"dodge", model:"hellcat",_id:uuidv4()},
   {make:"chevrolet", model:"tahoe",_id:uuidv4()}
]


app.get("/BountyHunters",(req,res)=>{
res.send(BountyHunters)
})

app.post("/BountyHunters",(req,res)=>{
const newCar= req.body
newCar._id = uuidv4()
BountyHunters.push(newCar)
res.send(`Successfully added ${newCar.make} to the database!`)
})

// needs two arguments- ports || call backs
app.listen(8000, ()=>{
    console.log("server is running on port 8000.")
})