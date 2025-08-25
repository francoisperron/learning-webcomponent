export const JokeText = () => {
    const element = document.createElement('div')

    const update = (props: { loading: boolean; joke: string | null }) => {
        element.textContent = props.loading ? 'loading...' : (props.joke ?? '')
    }
    return {
        element: element,
        update: update
    }
}
