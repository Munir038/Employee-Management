//import { Route } from "react-router-dom";
import "./header.css"
import { Dropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  function home() {
    navigate("/home");
  }
  function logoutHandler() {
    navigate("/");
  }

  return (<>
    <div className="header-container">
      <h3 className="navbar-brand">Employee Management</h3>
      <div className="dropdown-cont">
        <Dropdown className="dropdown-btn">
          <Dropdown.Toggle variant="primary" id="dropdownMenuButton" >
            Profile
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#" onClick={home} >Home</Dropdown.Item>
            <Dropdown.Item href="#" onClick={logoutHandler}>Log out</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

    </div>
  </>
  )
}

export default Header;
