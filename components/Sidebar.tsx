export default function Sidebar({ children }: { children: React.ReactNode }): JSX.Element {
    return (
        <div className="pf-sidebar root">
            { children }
        </div>
    )
}