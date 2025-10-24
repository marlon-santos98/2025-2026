'use client'
import React, {useState, useEffect} from "react";
import style from './PokemonCard.module.css'
import axios from "axios"

function PokemonCard({pokemonId}){

    const [pokemonData, setPokemonData] = useState(null)
    
    useEffect(() =>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
            .then(resposta => {
                setPokemonData(resposta.data)
            })
    }, [pokemonId])

    return(
        <div className={style.component}>
            <h1>This is my first Api GET</h1>
            <p>In this course I learned how to use the verb GET</p>
            {
                pokemonData ? (
                    <h2 className={style.name}>Name: {pokemonData.name}</h2>
                )
                :
                (
                    <p>Carregando...</p>
                )
            }
        </div>
    )
}

export default PokemonCard