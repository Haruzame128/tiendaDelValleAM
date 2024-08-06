import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { useState } from 'react'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import './App.css'
import Layout from './components/pages/Layout'
import Contact from './components/Contact/Contact'
import Error404 from './components/Error404/Error404'


function App() {
  const Welcome = "Bienvenido a Hashi Indumentaria"
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route 
            path='/'
            element={<ItemListContainer title={Welcome}/>}
          />
          <Route 
            path='/Contact'
            element={<Contact />}
          />
          <Route 
          path='*'
          element={<Error404 />}
        />
        </Routes>
        
      </Layout>
    </BrowserRouter>
  )
}

export default App
