import './App.css'
import Header from './components/Header'
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Hero from './components/Hero'
// import Footer from './components/Footer'

function App() {

  return (
    <>
    <BrowserRouter>
      <Header />
      <Hero />
      <main id='main-content' className='m5-btm'>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/projects' element={<Projects />}/>
          <Route path='/contact' element={<Contact />}/>
        </Routes>
      </main>
      {/* <Footer /> */}
    </BrowserRouter>
    </>
  )
}

export default App
