import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Home'
import EmployeeData from '../EmployeeData'
import AddNewEmployee from '../AddNewEmployee'
import EditEmployeeData from "../EditEmployeeData"
import { Login } from '../Login'
import Register from '../Register'



export default function Path() {
    return (
        <>
            <Routes>
                <Route exact path='/' element={<Login />} />
                <Route exact path='/register' element={<Register />} />
                <Route exact path='/home' element={<Home />} />
                <Route exact path='/empData' element={<EmployeeData />} />
                <Route exact path='/addNewEmployee' element={<AddNewEmployee />} />
                <Route exact path='/editEmployeeData' element={<EditEmployeeData />} />
            </Routes>
        </>
    )
}
