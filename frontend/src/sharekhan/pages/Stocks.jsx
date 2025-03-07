import React from 'react'
import Dashboard from '../components/Dashboard'
import ListItemView from '../components/ListItemView'

export default function Stocks() {
  return (
    <div>
        <h2>My stocks</h2>
        <Dashboard category="stocks" selfpage="false"/>
        <h3>List:</h3>
        <ListItemView />
        <ListItemView />
        <ListItemView />
    </div>
  )
}
