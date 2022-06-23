export default function PageContentImage({ src }: {src: string }): JSX.Element {
    return (
        <img className="pf-page content image" src={src}></img>
    )
}