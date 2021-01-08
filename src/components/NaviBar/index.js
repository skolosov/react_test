import React from "react";
import {Link} from "react-router-dom";
import {Navbar, Nav} from "react-bootstrap";

const NaviBar = ()=>{
    return (
        <Navbar bg="dark" variant="dark">
            <Link to='/'><Navbar.Brand href="#home">Navbar</Navbar.Brand></Link>
            <Nav className="mr-auto">
                <Nav.Link><Link className="btn btn-outline-light" style={{border:"none"}} to='/'>Главная</Link></Nav.Link>
                <Nav.Link><Link className="btn btn-outline-light" style={{border:"none"}} to='/addDeal'>Добавить</Link></Nav.Link>
                <Nav.Link><Link className="btn btn-outline-light" style={{border:"none"}} to='/about'>Информация</Link></Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default NaviBar;