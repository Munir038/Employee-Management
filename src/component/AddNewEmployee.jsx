import React, { useState } from 'react'
import Header from './header/Header';
import Sidebar from './Sidebar/Sidebar';
import "./EmployeeData.css";
import { useNavigate } from 'react-router-dom';

export default function AddNewEmployee() {
    const [empName, setName] = useState("");
    const [empDept, setDept] = useState("");
    const [empSalary, setSalary] = useState("");
    // const empData = {
    //     empName, empDept, empSalary
    // }
    // const navigate = useNavigate();
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     window.location.replace("/empData");
    // }
    const navigate = useNavigate();
    const handleCancel = () => {
        navigate("/empData");
    };
    return (
        <div className='employeeData-Container'>
            <Header />
            <div className="sidebar-cont">
                <Sidebar />
            </div>
            <div className='w-50' style={{ "marginLeft": "16rem", "marginTop": "1rem", "zIndex": "999" }}>
                <form action='http://localhost:3005/employee' method='post'>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Employee Name</label>
                        <input type="text" name="name" required className="form-control" id="exampleInputEmail1" onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Employee Department</label>
                        <input type="text" name="department" required className="form-control" id="exampleInputPassword1" onChange={(e) => setDept(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Employee Salary</label>
                        <input type="text" name='salary' required className="form-control" id="exampleInputPassword1" onChange={(e) => setSalary(e.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-primary" >Add Employee</button>
                    <button className="btn btn-secondary m-2" onClick={handleCancel}>Cancel</button>
                </form>
            </div>
        </div>
    )
}
