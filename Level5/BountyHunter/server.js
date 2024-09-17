const express= require("express")
const app= express()
const {v4: uuidv4} = require('uuid')


// 1.end point(mount/path)
// 2. CallBack Fucntion
app.use(express.json())

// fake users
const BountyHunters =[
    { firstName:"Malice", lastName:"Vornak", living:true,amount:100,type:"Jedi",_id: uuidv4()},
    { firstName:"Lord", lastName:"Zythorian", living:true,amount:500,type:"Sith",_id: uuidv4()},
    { firstName:"Xaria ", lastName:"Helix", living:false,amount:200,type:"Jedi",_id: uuidv4()},
]


app.get("/",(req,res)=>{
res.send(BountyHunters)
})

app.post("/",(req,res)=>{
const newBounty= req.body
newBounty._id = uuidv4()
BountyHunters.push(newBounty)
res.send(`Successfully added ${newBounty.firstName} to the database!`)
})

app.put("/:id",(req,res)=>{
    const id = req.params.id
    const updateBounty = req.body
    const bountyIndex = BountyHunters.findIndex((bounty)=> bounty._id === id)
    const updatedBounty= Object.assign(BountyHunters[bountyIndex],updateBounty)
    res.send(updatedBounty)
    console.log("Successfully updated bounty.")
})
app.delete("/:id",(req,res)=>{
    const id =req.params.id
    const bountyIndex = BountyHunters.findIndex((bounty)=> bounty._id === id)
    const deleteBounty = BountyHunters.splice(bountyIndex,1)
    res.send(deleteBounty)
    console.log("Successfully captured Bounty")
})

// needs two arguments- ports || call backs
app.listen(8050, ()=>{
    console.log("server is running on port 8050.")
})