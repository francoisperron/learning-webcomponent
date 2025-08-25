export const ErrorText = () => {
    const element = document.createElement('div');
    element.style.display = 'none';

    const update = (error: string | null | undefined) => {
        element.textContent = error ? `Oups ${error}` : '';
        element.style.display = error ? '' : 'none';
    }

    return {
        element: element,
        update: update
    };
}
