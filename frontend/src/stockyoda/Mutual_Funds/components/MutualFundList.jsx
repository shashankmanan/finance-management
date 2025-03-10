import React, { useEffect, useState } from 'react'
import MutualFundListItem from './MutualFundListItem'

export default function MutualFundList({list}) {
    return ( 
       <>
            { list.map( (i) => <MutualFundListItem item={i}/>) }
       </>
  )
}
