import { useEffect, useState } from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "../css/Header.css";



function Header(){

    const [keyword, setKeyword] = useState('');

    const changeKeyword = (e) =>{
        setKeyword(e.target.value);
    }

    useEffect(()=>{
        
    },[keyword])

    return(
        <div>
            <Navbar bg="light" sticky="top" expand="lg" className="bg-body-tertiary mb-3">
                <Navbar.Brand>Poke-Docu</Navbar.Brand>
                <Navbar.Toggle aria-controls="pokeDocu" />
                <Navbar.Collapse id="pokeDocu">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <div className="gap-3 w-100 d-flex justify-content-center">
                            <NavLink to={'/'} className='nav-link'>Home</NavLink>
                            <NavLink to={'/Move'} className='nav-link'>Move</NavLink>
                            <NavLink to={'/Type'} className='nav-link'>Type</NavLink>
                            <NavLink to={'/Berry'} className='nav-link'>Berry</NavLink>
                            <NavLink to={'/Item'} className='nav-link'>Item</NavLink>
                            <NavLink to={'/Machine'} className='nav-link'>Machine</NavLink>
                        </div>
                    </Nav>
                        <Form className="d-block">
                            <Form.Group controlId="keyword" className="d-flex mb-2">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                    name="keyword"
                                    value={keyword}
                                    onChange={changeKeyword}
                                />
                                <Button type="submit">Search</Button>
                            </Form.Group>
                        </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Header;