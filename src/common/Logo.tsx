
interface LogoProps {
    href: string,
    src: string,
    alt: string
}

export const Logo = ({href, src, alt}: LogoProps) =>
    <a href={href} target='_blank'>
        <img src={src} className='logo' alt={alt} />
    </a>;
