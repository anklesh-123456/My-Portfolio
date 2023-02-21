import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import { AnimatePresence } from 'framer-motion';


const App = () => {
const location = useLocation()

  return (
  
    <div className='App'>
      <div className="container app__container">
        <div className="row app__row">
      <div className="col-lg-3 ">
        <Sidebar/>
      </div>
      <div className="col-lg-9 app__main-content">
       <Navbar/>
       <AnimatePresence exitBeforeEnter>
       <Routes location={location} key={location.key}>
        <Route  exact path='/' element={<About/>}></Route>
        <Route  path='/resume' element={<Resume/>}></Route>
        <Route path='/projects' element={<Projects/>}></Route>
  
        <Route path="*" element={<Navigate to ="/" />}/>
       </Routes>
       </AnimatePresence>
      </div>
      </div>
      </div>
    </div>

  )
}

export default App
