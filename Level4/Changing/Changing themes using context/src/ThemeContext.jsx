import React, {useState}from 'react'

export  const ThemeContext = React.createContext()


export const ThemeContextProvider= ({children})=>{
    const [color,setColor]= useState("dark")

    

const toggleTheme= ()=> {
  setColor(preveColor => preveColor === "dark" ? "light" : "dark")
}

const selectTheme=()=> {
  setColor(prevColor =>prevColor ==="blue" ? "red" : "blue")
}
    return(
        <ThemeContext.Provider value= {{color,setColor,toggleTheme,selectTheme}}>
            {children}
        </ThemeContext.Provider>

    )
}
