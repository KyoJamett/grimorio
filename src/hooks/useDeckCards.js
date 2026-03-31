import { useEffect, useState } from "react";

export function useDeckCards(format) {
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(false);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if(!format) return;

        setCards([]);
        setProgress(0);
        setLoading(true);

        const editions = format.ediciones;
        let loaded = 0;

        editions.forEach(({ed}) => {
            fetch(`http://localhost:3001/api/edition/${ed}`)
            .then(res => res.json())
            .then(data => {
                if(data?.cards){
                    setCards(prev => [...prev, ...data.cards]);
                }
                loaded++;
                setProgress(Math.round((loaded / editions.length) * 100));
                if(loaded === editions.length) setLoading(false);
            })
            .catch(() => {
                loaded++;
                if(loaded === ediciones.length) setLoading(false);
            });
        });
    }, [format?.folder]);

    return {cards, loading, progress };
}