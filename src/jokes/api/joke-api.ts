import axios from "axios";
import {Joke} from "../core/Joke.ts";
import {Category} from "../core/Category.ts";


export const jokeApi = () => {
    const get = async (category: Category): Promise<Joke> => {
        const queryParam = category === '' ? '' : `?category=${category}`
        const response = await axios.get(`https://api.chucknorris.io/jokes/random${queryParam}`);
        return response.data.value;
    }
    return {get}
}
