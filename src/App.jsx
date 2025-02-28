import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GetAllStudents from './GetAllStudents'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import GetStudentById from './GetStudentById'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/students' element={<GetAllStudents/>}/>
          <Route path='/students/:id' element={<GetStudentById/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
