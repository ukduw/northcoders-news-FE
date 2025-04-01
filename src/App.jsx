import { Route, Routes } from 'react-router-dom'
import './App.css'

import Header from './components/Header'
import NavBar from './components/NavBar'
import AllArticles from './components/AllArticles'
import ArticleById from './components/ArticleById'
import { UserProvider } from './contexts/User'

function App() {
  return (
    <>
      <UserProvider>
      <Header/>
      <NavBar/>
      <Routes>
        <Route path="/" element={<AllArticles />} />
        <Route path="/article/:article_id" element={<ArticleById />}/>
      </Routes>
      </UserProvider>
    </>
  )
}

export default App
