import React from 'react'
import './App.css'
import Card from './Card'
import data from './data'
import Nav from './Nav'


export default function App() {
  const dataCard = data.map(function(item){
    return <Card
      key = {item.id}
      {...item}
    />
  })
  return ( 
    <div>
    <Nav />
    {dataCard}
    </div> 
  )

}


