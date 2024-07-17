import React from 'react'
import "./home.css"
import Header from './header/Header'
import Sidebar from './Sidebar/Sidebar'


export default function Home() {
    return (
        <div className='homeContainer'>
            <Header />
            <Sidebar />
            <div className='home-info-cont'>
                <section className='hm'>
                    <h1>Welcome to employee Management System</h1>
                    <h4>You can find the details of any Employee....</h4>
                </section>
            </div>
        </div>
    )
}
