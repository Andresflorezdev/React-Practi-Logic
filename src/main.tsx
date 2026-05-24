import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { FirstStepsApp } from './FirstStepsApp'
// import { MyAwesome } from './MyAwesomeApp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <FirstStepsApp/>
    {/* <MyAwesome /> */}

  </StrictMode>
)
