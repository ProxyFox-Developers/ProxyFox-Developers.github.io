export default function PageTitle({ children, hidden }: { children: React.ReactNode, hidden: boolean }): JSX.Element {
    return (
        <div className={hidden? "pf-page title hidden": "pf-page title"}>
            { children }
        </div>
    )
}