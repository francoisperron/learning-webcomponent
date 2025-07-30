import {useState} from 'react';
import axios from 'axios';
import {jokeApi} from "../api/joke-api.ts";
import {Category} from "./Category.ts";
import {Joke} from "./Joke.ts";


export const useJoke = () => {
    const [joke, setJoke] = useState<Joke|null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const getJoke = async (category: Category) => {
        try {
            setLoading(true);
            setError(null);
            const newJoke = await jokeApi().get(category);
            setJoke(newJoke);
        } catch (err) {
            if (axios.isAxiosError(err)) {
                setError(err.message);
            } else if (err instanceof Error) {
                setError(err.message);
            } else {
                setError('An unexpected error occurred');
            }
        } finally {
            setLoading(false);
        }
    };

    return {
        joke,
        loading,
        error,
        getJoke,
    };
};
