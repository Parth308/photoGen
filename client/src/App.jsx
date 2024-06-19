import React from 'react'
import { HomePage,CreatePostPage } from './component'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Header from './component/Header'
import ThemeIcon from './utils/darkModeUi'

const App = () => {
  return (
    <BrowserRouter>
    <div className='w-full bg-slate-50 dark:bg-slate-800'>
     <Header />
      <main className='sm:p-8 px-4 lg:w-5/6 lg:mx-auto py-8 w-full border-b-[#e6ebf4] min-h-[calc(100vh-73px)] bg-slate-50 dark:bg-slate-800'>
        <Routes>
          <Route  path="/" element={<HomePage />}/>
          <Route  path="/create-post" element={<CreatePostPage />}/>
        </Routes>
        <div className='bg-slate-700 dark:bg-slate-900   w-[60px] h-[60px] rounded-full fixed right-5 bottom-5  z-10 flex items-center justify-center '>
            <ThemeIcon />
        </div>
      </main>
      </div>
    </BrowserRouter>
  )
}

export default App
