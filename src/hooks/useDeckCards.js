import { useEffect, useState } from "react";

export function useDeckCards(format) {
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(false);
    const [progress, setProgress] = useState(0);

    const [races, setRaces] = useState([]);
    const [rarities, setRarities] = useState([]);
    const [types, setTypes] = useState([]);
    const [keywords, setKeyWords] = useState([]);
    const [editions, setEditions] = useState([]);

    const mergeUnique = (prev, incoming) => {
        if(!incoming) return prev;
        const ids = new Set(prev.map(item => item.id));
        return [...prev, ...incoming.filter(item => !ids.has(item.id))];
    }

    useEffect(() => {
        if(!format) return;

        setCards([]);
        setProgress(0);
        setLoading(true);

        setRaces([]);
        setRarities([]);
        setTypes([]);
        setKeyWords([]);

        const editions = format.ediciones;
        let loaded = 0;

        editions.forEach(({ed}) => {
            fetch(`http://localhost:3001/api/edition/${ed}`)
            .then(res => res.json())
            .then(data => {
                if(data?.cards){
                    setCards(prev => [...prev, ...data.cards]);
                }
                if(data?.races) setRaces(prev => mergeUnique(prev, data.races));
                if(data?.rarities) setRarities(prev => mergeUnique(prev, data.rarities));
                if(data?.types) setTypes(prev => mergeUnique(prev, data.types));
                if(data?.keywords) setKeyWords(prev => mergeUnique(prev, data.keywords));

                loaded++;
                setProgress(Math.round((loaded / editions.length) * 100));
                if(loaded === editions.length) setLoading(false);
            })
            .catch(() => {
                loaded++;
                if(loaded === editions.length) setLoading(false);
            });
        });
    }, [format?.folder]);

    return {cards, loading, progress, races, rarities, types, keywords };
}