import React from 'react'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import Register from './Pages/Register'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Layout from './Layout'
import NotFound from './Pages/NotFound'


export default function App() {
  return (
    <BrowserRouter>
    <Routes>

      <Route path='/' element={<Layout />}>
      <Route index element={<Home />}></Route>
      <Route path="login" element={<Login />}></Route>
      <Route path="register" element={<Register />}></Route>
      <Route path="*" element={<NotFound />}></Route>
      </Route>
      
      </Routes>
      </BrowserRouter>
  )
}
