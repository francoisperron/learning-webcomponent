import {Category} from "../core/Category.ts";

interface GetNewJokeButtonProps {
    getJoke: (category: Category) => Promise<void>,
    category: Category
}

export const GetNewJokeButton = ({getJoke, category}: GetNewJokeButtonProps) =>
    <button onClick={() => getJoke(category)}>Give me a new joke!</button>
