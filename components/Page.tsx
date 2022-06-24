export default function Page({ children, hidden }: { children: React.ReactNode, hidden?: boolean }): JSX.Element {
    return (
        <div className={hidden? "pf-page root hidden": "pf-page root"}>
            { children }
        </div>
    )
}