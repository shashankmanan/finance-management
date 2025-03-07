import React from 'react'
import Dashboard from '../components/Dashboard'
import ListItemView from '../components/ListItemView'
import AddAsset from '../components/AddAsset'
import List from '../components/List'

export default function Stocks() {
  return (
    <div>
        <h2>My stocks</h2>
        <Dashboard category="stocks" selfpage="false"/>
        <AddAsset />
        <h3>List:</h3>
        <List category="stocks"/>
    </div>
  )
}
