import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import Header from './header/Header';
import Sidebar from './Sidebar/Sidebar';
import "./EmployeeData.css";

export default function EmployeeData() {
    const [empData, setEmpData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState("");

    const recordsPerPage = 6;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;

    const searchData = empData.filter((data) => {
        if (search == "") {
            return data;
        }
        else if (data.name.toLowerCase().includes(search.toLowerCase())) {
            return data;
        }

    })

    const records = searchData.slice(firstIndex, lastIndex);
    const nPages = Math.ceil(empData.length / recordsPerPage);
    const numbers = [...Array(nPages + 1).keys()].slice(1); //
    // console.log(numbers);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("http://localhost:3005/employee");
                setEmpData(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3005/employee/${id}`);
            const updatedData = empData.filter((emp) => emp._id !== id);
            setEmpData(updatedData);
        } catch (error) {
            console.log(error);
        }
    };

    // console.log("Searched data", searchData);
    return (
        <div className='employeeData-Container'>
            <Header />
            <div className="sidebar-cont">
                <Sidebar />
            </div>
            <div className='container m-5'>
                <input className='m-4 p-1 margin-left' type="text" placeholder='Search...' onChange={event => setSearch(event.target.value)} />
                <Link to="/addNewEmployee">
                    <button className="btn btn-success m-4">Add New Employee</button>
                </Link>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Department</th>
                            <th scope="col">Salary</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {records.map(({ _id, name, department, salary }) => (
                            <tr key={_id}>
                                <td className='m-2 p-1'>{name}</td>
                                <td className='m-2 p-1'>{department}</td>
                                <td className='m-2 p-1'>{salary}</td>
                                <td colSpan={2}>
                                    <Link to='/editEmployeeData'
                                        state={{ id: _id, name: name, department: department, salary: salary }}
                                    >
                                        <button className="btn btn-primary m-1">Edit</button>
                                    </Link>
                                    <button
                                        className="btn btn-danger m-1"
                                        onClick={() => handleDelete(_id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <nav>
                    <ul className='pagination'>
                        <li className='page-item'>
                            <a href='#' className='page-link' onClick={prevPage}>Prev</a>

                        </li>
                        {
                            numbers.map((n, i) => (
                                <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={i} >
                                    <a href='#' className='page-link' onClick={() => changeCPage(n)}>{n}</a>
                                </li>
                            ))
                        }
                        <li className='page-item'>
                            <a href='#' className='page-link' onClick={nextPage}>Next</a>

                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
    function prevPage() {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1);
        }
    }
    function changeCPage(id) {
        setCurrentPage(id);
    }
    function nextPage() {
        if (currentPage !== nPages) {
            setCurrentPage(currentPage + 1);
        }
    }
}