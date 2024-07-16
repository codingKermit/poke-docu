import { useEffect, useState } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";

function Home(){

    const [offset, setOffset] = useState(0);

    const [limit, setLimit] = useState(20);

    const [page, setPage] = useState(0);

    const [pokemon, setPokemon] = useState([]);

    // const [pokeInfo, setPokeInfo] = useState([]);

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

        // console.log(res);

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
        getPokeInfos();
    },[pokemon])

    const getPokeInfos = async () =>{
        for(const poke of pokemon){
            const url = poke.url;
            const pokeInfo = await axios.get(poke.url);
            console.log(pokeInfo.data.sprites.other["official-artwork"].front_default);
        }
    }

    return(
        <Container>
            <div>
                <h4>Hello I'm Home Router!</h4>
            </div>
        </Container>
    )
}


export default Home;