import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import TypeButton from "./TypeButton";
import { Link } from "react-router-dom";

function Pokemon({url}){

    const [pokeInfo, setPokeInfo] = useState('');

    const [imgUrl, setImgUrl] = useState('');

    const [name, setName] = useState('');

    const [types, setTypes] = useState([]);

    const getPokeInfos = async () =>{
        try {
            const res = await axios.get(url);

            setPokeInfo(res.data);

            setImgUrl(res.data.sprites.front_default);
            
            const spec = await axios.get(res.data.species.url);
    
            const nameData = spec.data.names.filter((data)=>data.language.name === 'ko');
            
            if(nameData.length > 0){
                setName(nameData[0].name);
            }

            const resTypes = res.data.types;

            for(const resType of resTypes){

                const url = resType.type.url;

                const typeData = await axios.get(url);

                const filteredTypeData = typeData.data.names.filter((d)=>d.language.name === 'ko');

                const typeItem = [{
                    text : filteredTypeData[0].name,
                    val : typeData.data.name
                }]

                setTypes((current)=>[...current, ...typeItem])
            }

        } catch (error) {
            console.error(error);            
        }

    }

    useEffect(()=>{
       getPokeInfos(); 
    },[])

    return(
        <div>
            <Card className="mb-3 text-center" >
                <Link to={`/Pokemon/${pokeInfo.id}`}>
                    {/* <Card.Img src={imgUrl} alt={name}/> */}
                    <Card.Text>{name}</Card.Text>
                    <Card.Text className="mb-3">
                        {types.map((type, index)=><TypeButton key={type+index} type={type.val} text={type.text}/>)}
                    </Card.Text>
                </Link>
            </Card>
        </div>
    )
}


export default Pokemon;