import axios from "axios"
import { useLoaderData } from "react-router-dom";

const url = 'https://pokeapi.co/api/v2/ability/';

export function PokeDetail(){

    const res = useLoaderData();

    console.log(res);

    return(
        <div>

        </div>
    )
}

export async function loader({params}){

    const response = await axios.get(url+params.id);

    return response

}