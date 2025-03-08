import React, { useEffect, useState } from 'react'
import { getAllBoughtStocksData } from '../../stockyoda/API/stocks'
import ListItemView from './ListItemView';

export default function List({list}) {

    return ( 
       <>
            { list.map( (i) => <ListItemView name={i.name} buy_price={i.buy_price} quantity={i.quantity} invested_amt={i.invested_amt} item={i}/>) }
       </>
  )
}
