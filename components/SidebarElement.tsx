export default function SidebarElement({ children, href, selected=false }: { children: React.ReactNode, href: string, selected?: boolean }): JSX.Element {
    return (
        <a href={href} onClick={(event) => {
            if (window.matchMedia('(max-width: 600px)').matches) {
                event.preventDefault()
                window.location.href = href+"/hidden"
                return false
            }
        }}>
            <div className={selected? "pf-sidebar element selected": "pf-sidebar element"}>
            <p> { children } </p>
        </div>
        </a>
    )
}