export default function PageContent({ children, hidden }: { children: React.ReactNode, hidden?: boolean }): JSX.Element {
    return (
        <div className={hidden? "pf-page content background hidden": "pf-page content background"}>
            { children }
        </div>
    )
}