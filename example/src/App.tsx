import React, { useEffect } from 'react'
import TMContactsModule, { Counter } from 'rn-tap-me-contacts'

const App = () => {
  useEffect(() => {
    console.log(TMContactsModule)
  })

  return <Counter />
}

export default App
