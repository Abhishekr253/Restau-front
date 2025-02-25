
import { Routes,Route } from 'react-router-dom'
import './App.css'
import Allrest from './components/Allrest'
import Footer from './components/Footer'
import Header from './components/Header'
import ViewRest from './components/ViewRest'

function App() {

  return (
    <>
     <Header/>
     <Routes>
      <Route path='/' element={<Allrest/>}/>
      <Route path='/view/:id' element={<ViewRest/>}/>
     </Routes>
     <Footer/>
    </>
  )
}

export default App
