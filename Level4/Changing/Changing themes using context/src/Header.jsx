import React, { useContext } from 'react'
import {ThemeContext} from "./ThemeContext"

export default function Header(props) {
  const context = useContext(ThemeContext)
  return (
    
    <div className={`${context.color}-theme`}>
        <h2>Theme context</h2>
        <h3>Currently using {context.color}</h3>
    </div>
  )
}
