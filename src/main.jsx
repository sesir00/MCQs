import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {Context} from './context/contextProvider.js'

import { useState } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const ContextProvider = ({children}) => {
  const [user,setUser] = useState(null)

  return (
    <Context.Provider value={{user , setUser}}>
      {children}
    </Context.Provider>
  )
}

createRoot(document.getElementById('root')).render(
<ContextProvider>
  <App />
</ContextProvider>
  
)
