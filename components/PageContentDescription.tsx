export default function PageContentDescription({ children }: { children: React.ReactNode }): JSX.Element {
    return (
        <div className="pf-page content description">
            { children }
        </div>
    )
}