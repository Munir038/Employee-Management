import axios from 'axios';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from './header/Header';
import Sidebar from './Sidebar/Sidebar';
import "./EmployeeData.css";

export default function EditEmployeeData(props) {
    // debugger;
    const location = useLocation();
    const navigate = useNavigate();

    // Object Destructuring
    // const id = props.data;
    // console.log(id);
    const { id, name, department, salary } = location.state;
    const [empName, setEmpName] = useState(name);
    const [empDept, setEmpDept] = useState(department);
    const [empSalary, setEmpSalary] = useState(salary);

    const handleCancel = () => {
        navigate("/empData");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const empData = {
                name: empName,
                department: empDept,
                salary: empSalary
            };
            await axios.patch(`http://localhost:3005/employee/${id}`, empData);

            navigate("/empData");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className='employeeData-Container'>
            <Header />
            <div className="sidebar-cont">
                <Sidebar />
            </div>

            <div className='w-50' style={{ marginLeft: "15.5rem", marginTop: "1rem", zIndex: "999" }}>
                <form>
                    <div className="mb-3">
                        <label htmlFor="empName" className="form-label">Employee Name</label>
                        <input type="text" required className="form-control" id="empName" onChange={(e) => setEmpName(e.target.value)} value={empName} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="empDept" className="form-label">Employee Department</label>
                        <input type="text" required className="form-control" id="empDept" onChange={(e) => setEmpDept(e.target.value)} value={empDept} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="empSalary" className="form-label">Employee Salary</label>
                        <input type="text" required className="form-control" id="empSalary" onChange={(e) => setEmpSalary(e.target.value)} value={empSalary} />
                    </div>
                    <button type="submit" className="btn btn-primary m-2" onClick={handleSubmit}>Submit New Details</button>
                    <button className="btn btn-secondary m-2" onClick={handleCancel}>Cancel</button>
                </form>
            </div>
        </div>
    );
}