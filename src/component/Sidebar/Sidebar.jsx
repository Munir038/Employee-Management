import "./sidebar.css"
import { Link } from "react-router-dom"

export default function Sidebar() {
    return (
        <div className="sidebar-container">
            <Link to="/home" className="text-dark sidebar-link" >Home</Link>
            <Link to="/empData" className="text-dark sidebar-link" >Employee Data</Link>
        </div>
    )
}
