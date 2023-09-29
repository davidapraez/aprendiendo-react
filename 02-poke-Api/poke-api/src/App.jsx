//Hooks
import { useState, useEffect } from "react";
//Icons
import { TiArrowLeftOutline, TiArrowRightOutline } from "react-icons/ti";
//Styles
import "./sass/App.scss";
//Components
import { Card } from "./components/Card";
import { Button } from "./components/Button";

const App = () => {
  let [pokemonId, setpokemonId] = useState(1);
  let [pokemonEvolutions, setPokemonEvolutions] = useState([]);

  const increment = () => {
    setpokemonId(pokemonId + 1);
  };
  const decrement = () => {
    if (pokemonId === 1) {
      setpokemonId(1);
    } else {
      setpokemonId(pokemonId - 1);
    }
  };
  useEffect(() => {
    //Aqui debemos llamar a las Api siempre
    searchPokemon(pokemonId);
  }, [pokemonId]);

  const searchPokemon = async (pokemonId) => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/evolution-chain/${pokemonId}/`
    );
    const data = await response.json();
    let pokemonEvolucionsArray = [];
    let pokemonLv1 = data.chain.species.name;
    let pokemonLv1Img = await getPokemonImg(pokemonLv1);
    pokemonEvolucionsArray.push([pokemonLv1, pokemonLv1Img]);

    if (data.chain.evolves_to.length !== 0) {
      let pokemonLv2 = data.chain.evolves_to[0].species.name;
      let pokemonLv2Img = await getPokemonImg(pokemonLv2);
      pokemonEvolucionsArray.push([pokemonLv2, pokemonLv2Img]);
      if (data.chain.evolves_to[0].evolves_to.length !== 0) {
        let pokemonLv3 = data.chain.evolves_to[0].evolves_to[0].species.name;
        let pokemonLv3Img = await getPokemonImg(pokemonLv3);
        pokemonEvolucionsArray.push([pokemonLv3, pokemonLv3Img]);
      }
    }
    setPokemonEvolutions(pokemonEvolucionsArray);
    // setPokemonName(pokemonLv1);
  };
  const getPokemonImg = async (name) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`);
    const data = await response.json();
    return data.sprites.other["official-artwork"].front_default;
  };

  //1:21:31 aqui voy https://www.youtube.com/watch?v=jg5ydNHNVJ4&t=87s&ab_channel=CodingTube

  return (
    <>
      <div className="app">
        {/* Tarjetas*/}
        <div className={`card-container card${pokemonEvolutions.length}`}>
          {pokemonEvolutions.map((pokemon) => (
            <Card key={pokemon[0]} name={pokemon[0]} img={pokemon[1]} />
          ))}
        </div>
        <div className="buttons-container">
          <Button icon={<TiArrowLeftOutline />} handleClick={decrement} />
          <Button icon={<TiArrowRightOutline />} handleClick={increment} />
        </div>
      </div>
    </>
  );
};

export { App };
