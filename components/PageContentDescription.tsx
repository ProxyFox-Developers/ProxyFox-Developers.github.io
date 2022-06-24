export default function PageContentDescription({ children, hidden, image }: { children: React.ReactNode, hidden?: boolean, image?: boolean }): JSX.Element {
    let classAdd = "pf-page content description" + (hidden? " hidden": "") + (image? " imageless": "")
    
    return (
        <div className={classAdd}>
            { children }
        </div>
    )
}