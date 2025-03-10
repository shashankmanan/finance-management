import React, { useEffect, useState } from 'react'
import ListItemView from './ListItemView';

export default function List({list}) {

    return ( 
       <>
            { list.map( (i) => <ListItemView item={i}/>) }
       </>
  )
}
