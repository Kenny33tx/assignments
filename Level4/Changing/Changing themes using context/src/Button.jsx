import React,{useContext} from 'react'
import {ThemeContext} from './ThemeContext'

export default function Button() {
    const context = useContext(ThemeContext)
  return (
    <button onClick={context.toggleTheme} className={`${context.color}-theme`}>Change Theme</button>
  )
}
