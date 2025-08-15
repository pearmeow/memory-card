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
    return (
        <>
            <div className="score">Score: {score}</div>
            <div className="container">
                <Image
                    name="sableye"
                    key="sableye"
                    score={score}
                    setScore={setScore}
                    isClicked={isClicked}
                    setIsClicked={setIsClicked}
                />
                <Image
                    name="giratina-origin"
                    key="giratina-origin"
                    score={score}
                    setScore={setScore}
                    isClicked={isClicked}
                    setIsClicked={setIsClicked}
                />
                <Image
                    name="pikachu"
                    key="pikachu"
                    score={score}
                    setScore={setScore}
                    isClicked={isClicked}
                    setIsClicked={setIsClicked}
                />
                <Image
                    name="mimikyu-disguised"
                    key="mimikyu-disguised"
                    score={score}
                    setScore={setScore}
                    isClicked={isClicked}
                    setIsClicked={setIsClicked}
                />
                <Image
                    name="mimikyu-busted"
                    key="mimikyu-busted"
                    score={score}
                    setScore={setScore}
                    isClicked={isClicked}
                    setIsClicked={setIsClicked}
                />
                <Image
                    name="metagross"
                    key="metagross"
                    score={score}
                    setScore={setScore}
                    isClicked={isClicked}
                    setIsClicked={setIsClicked}
                />
                <Image
                    name="gliscor"
                    key="gliscor"
                    score={score}
                    setScore={setScore}
                    isClicked={isClicked}
                    setIsClicked={setIsClicked}
                />
                <Image
                    name="giratina-altered"
                    key="giratina-altered"
                    score={score}
                    setScore={setScore}
                    isClicked={isClicked}
                    setIsClicked={setIsClicked}
                />
                <Image
                    name="ferrothorn"
                    key="ferrothorn"
                    score={score}
                    setScore={setScore}
                    isClicked={isClicked}
                    setIsClicked={setIsClicked}
                />
                <Image
                    name="gengar"
                    key="gengar"
                    score={score}
                    setScore={setScore}
                    isClicked={isClicked}
                    setIsClicked={setIsClicked}
                />
            </div>
        </>
    );
}

export default App;
