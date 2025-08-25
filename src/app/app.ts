import './index.css'
import './app.css'
import {ChuckNorrisFace} from '../jokes/ui/chuck-norris-face.ts'
import {JokeCategorySelector} from '../jokes/ui/joke-category-selector.ts'
import {GetNewJokeButton} from '../jokes/ui/get-new-joke-button.ts'
import {JokeText} from '../jokes/ui/joke-text.ts'
import {ErrorText} from '../jokes/ui/error-text.ts'
import type {Category} from '../jokes/core/category.ts'
import {JokeApi} from '../jokes/api/joke-api.ts'
import {AppConfig} from '../config.ts'

export const App = (config: AppConfig) => {
    let category: Category = ''
    let joke: string | null = null
    let loading = false
    let error: string | null = null
    const jokeApi = JokeApi(config.apiBaseUrl)

    const container = document.createElement('div')
    container.className = 'container'

    const categorySelector = JokeCategorySelector((newCategory) => {
        category = newCategory as Category
    })
    const jokeButton = GetNewJokeButton(async () => {
        await fetchJoke()
    })
    const showJoke = JokeText()
    const showError = ErrorText()

    container.appendChild(ChuckNorrisFace().element)
    container.appendChild(categorySelector.element)
    container.appendChild(jokeButton)
    container.appendChild(showJoke.element)
    container.appendChild(showError.element)

    async function fetchJoke() {
        loading = true
        error = null
        updateChildren()

        const getJokeResult = await jokeApi.get(category)
        if (getJokeResult.isFailure) {
            error = getJokeResult.error
            joke = null
        } else {
            error = null
            joke = getJokeResult.value
        }

        loading = false
        updateChildren()
    }

    function updateChildren() {
        showJoke.update({loading, joke})
        showError.update(error)
    }

    updateChildren()

    return container
}
