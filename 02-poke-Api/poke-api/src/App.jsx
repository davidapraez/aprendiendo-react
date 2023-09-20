import {Button} from "./components/Button"
import { useState,useEffect } from "react";
import './sass/App.scss'
import { TiArrowLeftOutline,TiArrowRightOutline } from "react-icons/ti";

const App=()=>{

    let [pokemonNumber,setPokemonNumber]=useState(10)
    let[pokemonName, setPokemonName]=useState('')

    const increment=()=>{
        setPokemonNumber(pokemonNumber+1)
        console.log("Vlaor antes del nuevo render "+ pokemonNumber)
    }
    useEffect(()=>{
        console.log("Valor actual "+pokemonNumber);
        //Aqui debemos llamar a las Api siempre 
          searchPokemon(pokemonNumber)
    },[pokemonNumber])

    const searchPokemon=async pokemonNumber=>{
        const response= await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}/`)
        const data=await response.json()
        setPokemonName(data.name)
    }

    return (
        <>
        <div>
        <h1>Hola</h1>
        <button onClick={increment}>Aumentar</button>
        <div>{pokemonName}</div>
        {/* Tarjetas*/}
        <div className="buttons-container">
            <Button icon={<TiArrowLeftOutline/>} handleClick={()=>console.log('anterior')} />
            <Button icon={<TiArrowRightOutline/>} handleClick={()=>console.log('siguiente')}/>
        </div>
        </div>
        </>
       )
}

export {App};