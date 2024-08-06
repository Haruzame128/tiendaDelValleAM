import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { useState } from 'react'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import './App.css'
import Layout from './components/pages/Layout'
import Contact from './components/Contact/Contact'
import Error404 from './components/Error404/Error404'
import SingleItem from './components/Item/SingleItem'


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
          path='/Indumentaria/:categoryID'
          element={<ItemListContainer title={'Indumentaria'}/>}
        />
        <Route 
          path='/Armas/:categoryID'
          element={<ItemListContainer title={'Armas'}/>}
        />
        <Route 
          path='/Equipo/:categoryID'
          element={<ItemListContainer title={'Equipo'}/>}
        />
          <Route 
            path='/Contacto/:categoryID'
            element={<Contact />}
          />
          <Route 
            path='/Item/:categoryID'
            element={<SingleItem />}
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
