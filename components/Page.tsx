export default function Page({ children }: { children: React.ReactNode }): JSX.Element {
    return (
        <div className="pf-page root">
            { children }
        </div>
    )
}