import './App.css'
import {useState} from 'react'
import {useJoke} from './jokes/core/useJoke.ts'
import {JokeCategorySelector} from './jokes/ui/JokeCategorySelector.tsx'
import {ChuckNorrisFace} from './jokes/ui/ChuckNorrisFace.tsx'
import {Category} from './jokes/core/Category.ts'
import {GetNewJokeButton} from './jokes/ui/GetNewJokeButton.tsx'
import {ShowJoke} from './jokes/ui/ShowJoke.tsx'
import {ShowError} from './jokes/ui/ShowError.tsx'


const App = () => {
    const {joke, loading, error, getJoke} = useJoke()
    const [category, setCategory] = useState<Category>('')

    return (
        <div className='container'>
            <ChuckNorrisFace />
            <JokeCategorySelector setCategory={setCategory} />
            <GetNewJokeButton getJoke={getJoke} category={category} />
            <ShowJoke joke={joke} loading={loading} />
            <ShowError error={error} />
            {error && <p>Oups {error}</p>}
        </div>
    )
}

export default App
