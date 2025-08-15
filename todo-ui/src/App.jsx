import { useState } from 'react'
import './App.css'
import ListTodoComponent from './components/ListTodoComponent'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import {BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import TodoComponent from './components/TodoComponent'
import RegisterComponent from './components/RegisterComponent'
import LoginComponent from './components/LoginComponent'
import { isUserLoggedIn } from './services/AuthService'
function App() {

  function AuthenticatedRoute({children}){
    const isAuth = isUserLoggedIn();
    if(isAuth){
      return children;
    }else{
      return <Navigate to="/" />
    }
  }

  return (
    <>
    <BrowserRouter>
      <HeaderComponent />
      <Routes>
        {/* // http://localhost:3000/ */}
        <Route path='/' element={
            <LoginComponent />
          }></Route>
        {/* // http://localhost:3000/todos */}
        <Route path='/todos' element = {
          <AuthenticatedRoute>
            <ListTodoComponent />
          </AuthenticatedRoute>
          }></Route>
        {/* // http://localhost:3000/add-todo */}
        <Route path='/add-todo' element = {
          <AuthenticatedRoute>
            <TodoComponent/>
          </AuthenticatedRoute>
          }></Route>
        {/* http://localhost:3000/update-todo/id */}
        <Route path='/update-todo/:id' element={
          <AuthenticatedRoute>
            <TodoComponent/>
          </AuthenticatedRoute>
          }></Route>
        {/*  http://localhost:3000/register */}
        <Route path='/register' element = {
            <RegisterComponent/>
          }></Route>
        {/*  http://localhost:3000/login */}
        <Route path='/login' element={
          <LoginComponent/>
        }></Route>
      </Routes>
      <FooterComponent />
    </BrowserRouter>
    </>
  )
}

export default App
