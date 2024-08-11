import { useState } from 'react'
import './App.css'
import Layout from "./components/Layout"
import Main from './components/Main'
import Aside from "./components/Aside"
import Blog from './components/Blog'
import "./css/footer.less"


function App() {
  

  return (
    <main>
      <Layout>
        <div>
          <Main></Main>
          <Blog></Blog>
        </div>
      </Layout>
    </main>
  )
}

export default App
