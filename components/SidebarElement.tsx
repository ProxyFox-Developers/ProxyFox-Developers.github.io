export default function SidebarElement({ children, href, selected=false }: { children: React.ReactNode, href: string, selected?: boolean }): JSX.Element {
    return (
        <a href={href}>
            <div className={selected? "pf-sidebar element selected": "pf-sidebar element"}>
            <p> { children } </p>
        </div>
        </a>
    )
}