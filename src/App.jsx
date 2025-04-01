import { Route, Routes } from 'react-router-dom'
import './App.css'

import Header from './components/Header'
import NavBar from './components/NavBar'
import AllArticles from './components/AllArticles'
import ArticleById from './components/ArticleById'

function App() {
  return (
    <>
      <Header/>
      <NavBar/>
      <Routes>
        <Route path="/" element={<AllArticles />} />
        <Route path="/article/:article_id" element={<ArticleById />}/>
      </Routes>
    </>
  )
}

export default App
