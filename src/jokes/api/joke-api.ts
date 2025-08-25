import {Joke} from '../core/joke.ts'
import {Category} from '../core/category.ts'
import {Result} from '../../shared/core/result.ts'

export const JokeApi = (baseUrl: string) => {

    const get = async (category: Category): Promise<Result<Joke>> => {
        const queryParam = category === '' ? '' : `?category=${encodeURIComponent(category)}`
        const response = await fetch(`${baseUrl}${queryParam}`)

        if (!response.ok) {
            Result.failure(`HTTP ${response.status} ${response.statusText}`)
        }

        const data: { value: string } = await response.json()
        return Result.success(data.value)
    }

    return {
        get: get
    }
}
