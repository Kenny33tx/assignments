
   
   axios.get("https://api.vschool.io/pokemon/")
   .then(response => {
   const data = response.data
        // for(let i = 0; i < response.data.length; i++){
        //     const h2 = document.createElement("h2")
        //     h2.textContent = data[i].pokemon
        //     document.body.appendChild(h2)
        // }
        // console.log(response.data)
        data.objects[0].pokemon.forEach((item)=>{
            const h2 = document.createElement("h2")
            h2.textContent  = item.name
            document.body.appendChild(h2)

        })
   })
   .catch(error => console.log(error))
   


