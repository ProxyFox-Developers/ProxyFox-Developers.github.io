export default function SidebarTitle({ children }: { children: React.ReactNode }): JSX.Element {
    return (
        <div className="pf-sidebar title">
            <h1> { children } </h1>
        </div>
    )
}