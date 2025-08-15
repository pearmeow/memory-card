import { useState, useMemo } from "react";
import "../styles/Image.css";

export default function Image({
    name,
    score,
    setScore,
    isClicked,
    setIsClicked,
}) {
    let [data, setData] = useState(null);
    let [pokeName, setPokename] = useState("");
    async function getData(pokemon) {
        const response = await fetch(
            "https://pokeapi.co/api/v2/pokemon/" + pokemon,
        );
        const result = await response.json();
        setData(result);
        function cleanName(fullName) {
            let cleanedName = "";
            for (let i = 0; i < fullName.length; ++i) {
                if (i === 0) {
                    cleanedName = cleanedName.concat(fullName[i].toUpperCase());
                } else if (fullName[i] === "-") {
                    cleanedName = cleanedName.concat(" ");
                } else if (fullName[i - 1] === "-") {
                    cleanedName = cleanedName.concat(fullName[i].toUpperCase());
                } else {
                    cleanedName = cleanedName.concat(fullName[i]);
                }
            }
            return cleanedName;
        }
        setPokename(cleanName(result.name));
    }
    useMemo(() => {
        getData(name);
    }, [name]);
    function handleScore() {
        if (isClicked[name] === true) {
            setScore(0);
            let allFalse = {};
            for (let key in isClicked) {
                allFalse[key] = false;
            }
            setIsClicked(allFalse);
        } else {
            setScore(score + 1);
            setIsClicked({
                ...isClicked,
                [name]: true,
            });
        }
    }
    return (
        <button className="card" onClick={handleScore}>
            <img src={data && data.sprites.front_default} />
            <p>{pokeName}</p>
        </button>
    );
}
