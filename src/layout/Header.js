import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";


function Header(){

    const languageUrl = 'https://pokeapi.co/api/v2/language';

    const [keyword, setKeyword] = useState('');

    const [languagesUrl, setLanguagesUrl] = useState('');

    const [language, setLanguage] = useState('ko');

    const [languageOptions, setLanguageOptions] = useState([]);

    const changeKeyword = (e) =>{
        setKeyword(e.target.value);
    }

    useEffect(()=>{

    },[keyword])

    // const getLanguages = async () =>{
    //     const res = await axios.get(languageUrl);
    //     setLanguagesUrl(res.data.results);
    // }

    // useEffect(()=>{
    //     getLanguages();
    // },[])
    
    // const changeLanguage = (e) =>{
    //     setLanguage(e.target.value);
    // }
    
    // useEffect(()=>{
    //     setLanguageOptions([]);
    //     changeLangOptions();
    // },[language])

    // useEffect(()=>{
    //     changeLangOptions();
    // },[languagesUrl])

    // const changeLangOptions = async() => {
    //     console.log(`===current language : ${language} ===`)
    //     for(const data of languagesUrl){
    //         const lang = await axios.get(data.url);
    //         console.log(lang);
    //         const filteredData = lang.data.names.filter( d => d.language.name == language);
    //         if(filteredData.length > 0){
    //             const langOptionText = filteredData[0].name;
    //             const langOptonVal = lang.data.name;
    //             const item = {
    //                 'text' : langOptionText,
    //                 'val' : langOptonVal
    //             }
    //             console.log(item);
    //             setLanguageOptions((oldOptions)=> [...oldOptions, item]);
    //         }
    //     }
    // }

    return(
        <div>
            <Navbar sticky="top" expand="lg" className="bg-body-tertiary">
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
                        <Nav.Link href="/Berry">Berry</Nav.Link>
                        <Nav.Link href="/Item">Item</Nav.Link>
                        <Nav.Link href="/Machine">Machine</Nav.Link>
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
                            {/* <Form.Group className="d-flex gap-2">
                                <Form.Select className="w-50 ms-auto" size="sm">
                                    <option>Grid</option>
                                    <option>List</option>
                                </Form.Select>
                                <Form.Select size="sm"
                                    value={language}
                                    onChange={changeLanguage}
                                >
                                    {languageOptions ? languageOptions?.map((data)=>{
                                        return(
                                            <option key={data.val} value={data.val}>
                                                {data.text}
                                            </option>
                                        )
                                    }) : null }
                                </Form.Select>
                            </Form.Group> */}
                        </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Header;