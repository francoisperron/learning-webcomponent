import {Joke} from "../core/Joke.ts";

interface ShowJokeProps {
    joke: Joke | null,
    loading: boolean
}

export const ShowJoke = ({joke, loading}: ShowJokeProps) =>
    loading ? <p>loading...</p> : <p>{joke}</p>
