import { Route, Routes } from 'react-router-dom'
import './App.css'

import Header from './components/Header'
import NavBar from './components/NavBar'
import AllArticles from './components/AllArticles'

function App() {
  return (
    <>
      <Header/>
      <NavBar/>
      <Routes>
        <Route path="/" element={<AllArticles />} />
      </Routes>
    </>
  )
}

export default App
