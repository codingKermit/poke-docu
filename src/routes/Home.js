import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Spinner } from "react-bootstrap";
import Pokemon from "../components/Pokemon";
import { useInView } from "react-intersection-observer";

function Home(){

    const { ref, inView } = useInView({
        /* Optional options */
        threshold: 0,
    });

    useEffect(()=>{
        getPoke();
    },[inView])

    const [offset, setOffset] = useState(0);

    const [limit, setLimit] = useState(30);

    const [page, setPage] = useState(0);

    const [pokemon, setPokemon] = useState([]);

    const [pokeInfo, setPokeInfo] = useState([]);

    const [next, setNext] = useState('');

    const [prev, setPrev] = useState('');

    const [count, setCount] = useState(0);

    const getPoke = async () =>{

        const calculatedOffset = limit * page;

        let res = '';

        if(next === ''){
            res = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${calculatedOffset}`);
        } else {
            res = await axios.get(next);
        }

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

    return(
        <div>
            <Container>
                <Row xs={4} sm={4} md={6}>
                    {pokemon.map((data)=>{
                        return(
                            <Pokemon
                                key={data.name}
                                url={data.url}
                                name={data.name}
                            ></Pokemon>
                        )
                    })}
                </Row>
                <div style={{textAlign:'center'}}>
                    <Spinner animation="grow" ref={ref} />
                </div>
            </Container>
        </div>
    )
}


export default Home;