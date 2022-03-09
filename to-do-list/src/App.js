import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function CardComponent(props) {
  return (
  <div className={`cardContainer ${props.type}`}>
    <section className="cardText">
      <h3>{props.name}</h3>
      <h4>#{props.id}</h4>
    </section>
    <section className="cardImagery">
      <div className="types">
        <h3 className={`button ${props.type}`}>{props.type}</h3>
        <h3 className={`button ${props.ability}`}>{props.ability}</h3>
      </div>
      <img src={`${props.image}`} alt="" />
    </section>
  </div>
  );
}

function NavigationComponent(props) {
  return <input type="text" className="searchBar" />
}

function App() {

  const[myText, setMyText] = useState();

  return (
    <div className="App">
      <h1>Pokedex</h1>
      <NavigationComponent></NavigationComponent>
      <section className="cardGrid">
        <CardComponent name = "bulbasaur" id = "1" type = "grass" ability = "poison" image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"></CardComponent>
        <CardComponent name = "ivysaur" id = "2" type = "grass" ability = "poison" image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png"></CardComponent>
        <CardComponent name = "venusaur" id = "3" type = "grass" ability = "poison" image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png"></CardComponent>
        <CardComponent name = "charmander" id = "4" type = "fire" ability = "" image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"></CardComponent>
        <CardComponent name = "charmeleon" id = "5" type = "fire" ability = "" image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png"></CardComponent>
        <CardComponent name = "Charizard" id = "6" type = "fire" ability = "flying" image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png"></CardComponent>
        <CardComponent name = "squirtle" id = "7" type = "water" ability = "" image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png"></CardComponent>
        <CardComponent name = "Wartortle" id = "8" type = "water" ability = "" image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png"></CardComponent>
        <CardComponent name = "Blastoise" id = "9" type = "water" ability = "" image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png"></CardComponent>
        <CardComponent name = "Pikachu" id = "25" type = "electric" ability = "" image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"></CardComponent>
        <CardComponent name = "Eevee" id = "133" type = "normal" ability = "" image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png"></CardComponent>
        <CardComponent name = "Gengar" id = "94" type = "ghost" ability = "poison" image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png"></CardComponent>
      </section>
    </div>
  );
}

export default App;
