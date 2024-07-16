import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";


function Header(){

    const [offset, setOffset] = useState(0);

    const [limit, setLimit] = useState(20);

    const [page, setPage] = useState(0);

    const [pokemon, setPokemon] = useState([]);

    const [next, setNext] = useState('');

    const [prev, setPrev] = useState('');

    const [count, setCount] = useState(0);

    const [keyword, setKeyword] = useState('');

    const changeKeyword = (e) =>{
        setKeyword(e.target.value);
    }

    const getPoke = async () =>{

        const calculatedOffset = limit * page;

        let res = '';

        if(next === ''){
            res = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${calculatedOffset}`);
        } else {
            res = await axios.get(next);
        }

        console.log(res);

        setNext(res.data.next);

        setPrev(res.data.previous);

        setCount(res.data.count);

        setPokemon([...pokemon,...res?.data?.results]);

        setPage((current)=> current + 1);

    }

    const changeOffset = (newOffset) =>{
        setOffset(newOffset);
    }

    const changeLimit = (newLimit) =>{
        setLimit(newLimit);
    }

    useEffect(()=>{
        getPoke();
    },[])

    useEffect(()=>{
        console.log(keyword);
    },[keyword])

    return(
        <div>
            <Navbar sticky="top" expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand>Poke-Docu</Navbar.Brand>
                    <Navbar.Toggle aria-controls="pokeDocu" />
                    <Navbar.Collapse id="pokeDocu">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/Move">Move</Nav.Link>
                            <Nav.Link href="/Type">Type</Nav.Link>
                            <Nav.Link href="/Berry">Barries</Nav.Link>
                            <Nav.Link href="/Item">Items</Nav.Link>
                            <Nav.Link href="/Machine">Machines</Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Group controlId="keyword" className="d-flex">
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
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;