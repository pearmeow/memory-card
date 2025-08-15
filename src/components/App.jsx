import Image from "./Image.jsx";
import "../styles/App.css";
import { useState } from "react";

function App() {
    let [score, setScore] = useState(0);
    let [isClicked, setIsClicked] = useState({
        sableye: false,
        "giratina-origin": false,
        pikachu: false,
        "mimikyu-disguised": false,
        "mimikyu-busted": false,
        metagross: false,
        gliscor: false,
        "giratina-altered": false,
        ferrothorn: false,
        gengar: false,
    });
    let allPokemon = [];
    for (let key in isClicked) {
        allPokemon.push(key);
    }
    let randomOrder = [];
    while (allPokemon.length > 0) {
        let randInd = Math.floor(Math.random() * allPokemon.length);
        randomOrder.push(
            <Image
                name={allPokemon[randInd]}
                key={allPokemon[randInd]}
                score={score}
                setScore={setScore}
                isClicked={isClicked}
                setIsClicked={setIsClicked}
            />,
        );
        allPokemon[randInd] = allPokemon[allPokemon.length - 1];
        allPokemon.pop();
    }
    return (
        <>
            <div className="score">Score: {score}</div>
            <div className="container">{randomOrder}</div>
        </>
    );
}

export default App;
