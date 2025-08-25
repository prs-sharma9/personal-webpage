import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {

  return (
    <>
    <BrowserRouter>
      <Header />
      <div id='page'>
        <Hero />
        <main id='main-content' className='m5-btm'>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/projects' element={<Projects />}/>
            <Route path='/contact' element={<Contact />}/>
          </Routes>
        </main>
        <Footer />
      </div>
      
    </BrowserRouter>
    </>
  )
}

export default App
