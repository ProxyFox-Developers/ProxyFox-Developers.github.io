export default function PageContent({ children }: { children: React.ReactNode }): JSX.Element {
    return (
        <div className="pf-page content background">
            { children }
        </div>
    )
}