import { useState } from "react";

export default function Image({ name }) {
    let [data, setData] = useState(null);
    async function getData() {
        const response = await fetch(
            "https://pokeapi.co/api/v2/pokemon/ditto/",
        );
        const result = await response.json();
        setData(result.sprites.front_default);
    }
    useEffect(() => {
        getData();
    }, []);
    return <img src={data} />;
}
