import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import Getusuarios from './componentes/Getusuarios.jsx'
import GetUserEffect from './componentes/GetUserEffect.jsx'
import PostUser from './componentes/PostUser.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PostUser />
  </StrictMode>,
)
