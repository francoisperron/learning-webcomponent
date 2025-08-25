import { Image } from '../../shared/ui/image.ts';

export function ChuckNorrisFace() {
    const element = document.createElement('div');

    const logo = Image({
        href: 'https://api.chucknorris.io/',
        src: '/chuck-norris.svg',
        alt: 'chuck norris'
    });
    element.appendChild(logo.element);

    return {
        element: element
    };
}
