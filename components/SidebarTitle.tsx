export default function SidebarTitle({ children }: { children: React.ReactNode,  }): JSX.Element {
    return (
        <div className="pf-sidebar title">
            { children }
        </div>
    )
}