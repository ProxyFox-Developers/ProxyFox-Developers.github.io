export default function PageContentImage({ src, hidden }: {src: string, hidden?: boolean }): JSX.Element {
    return (
        <img className={hidden? "pf-page content image hidden": "pf-page content image"} src={src}></img>
    )
}