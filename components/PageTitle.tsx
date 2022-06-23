export default function PageTitle({ children }: { children: React.ReactNode }): JSX.Element {
    return (
        <div className="pf-page title">
            { children }
        </div>
    )
}