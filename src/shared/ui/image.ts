export type ImageProps = { href: string; src: string; alt: string }
export type ImageReturn = { element: HTMLAnchorElement }

export const Image = (props: ImageProps): ImageReturn => {
    const anchor = document.createElement('a')
    anchor.target = '_blank'
    anchor.href = props.href

    const img = document.createElement('img')
    img.src = props.src
    img.alt = props.alt

    anchor.appendChild(img)

    return {
        element: anchor
    }
}
