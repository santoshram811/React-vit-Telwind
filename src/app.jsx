import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'

import './app.css'
import Card from './components/Card.jsx'


export function App(userName) {
  
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Telwind test</h1>
 <Card username="santosh" btnText="click me"/>
 <Card username="santosh 2" btnText="visit me"/>

    </> 
  )
}
