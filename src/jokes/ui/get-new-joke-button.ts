export function GetNewJokeButton(onClick: () => void) {
    const btn = document.createElement('button');
    btn.textContent = 'Give me a new joke!';
    btn.addEventListener('click', onClick);
    return btn;
}
