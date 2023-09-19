import React from 'react'
import Parent from './children/Parent'
import Child from './children/Child'
import Second from './children/Second'

function Page() {
  return (
    <div>
        <Parent>
            <Second/>
            <Child/>
        </Parent>
    </div>
  )
}

export default Page