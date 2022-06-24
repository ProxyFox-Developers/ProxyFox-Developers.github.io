import * as Aleph from "aleph/react";
import Page from "./Page.tsx"
import PageTitle from "./PageTitle.tsx"
import PageContent from "./PageContent.tsx"
import PageContentImage from "./PageContentImage.tsx"
import PageContentDescription from "./PageContentDescription.tsx"
import content from "./Content.tsx"

export default function generatePage(tab?: string, element?: string, hidden = false): JSX.Element {
    if (!tab) tab = "home"
    let current = content[tab]
    if (!current) current = content["home"]
    if (!element) for (const i in current.values) {
        element = i
        break
    }
    if (!element) return <></>
    const page = current.values[element]

    return (
        <Page hidden={hidden}>
            <PageTitle hidden={hidden}> {page.name} </PageTitle>
            <PageContent hidden={hidden}>
                {(page.image? <PageContentImage src={page.image} hidden={hidden}></PageContentImage>: <></>)}
                <PageContentDescription hidden={hidden} image={!page.image}>
                    {(() => {
                        if (!page.description) return [<></>]
                        const description = page.description
                        const arr: (JSX.Element)[] = []
                        const split = description.split("\n")
                        for (const str of split) {
                            if (str.startsWith("--")) {
                                const nStr = str.substring(2)
                                arr.push(<>&emsp;{nStr}</>)
                                arr.push(<br></br>)
                            } else if (str.startsWith("++")) {
                                const nStr = str.substring(2)
                                arr.push(<h2>{nStr}</h2>)
                            } else if (str.startsWith("::")) {
                                const nStr = str.substring(2)
                                arr.push(<a className="link" href={nStr}>{nStr}</a>)
                            } else {
                                arr.push(<>{str}</>)
                                arr.push(<br></br>)
                            }
                        }
                        return arr
                    })()}
                </PageContentDescription>
            </PageContent>
        </Page>
    )
}