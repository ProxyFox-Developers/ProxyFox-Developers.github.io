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
            <div class="deprecation">
            <h2>⚠ ProxyFox is shutting down</h2>
            <div class="center">
            <p>Over time it has become increasingly more obvious that this project isn't sustainable for me anymore<br/>
               I've been having a hard time finding motivation to work on the bot, and I've been struggling to afford the server I'm renting for it.
            </p>
            <h3>ProxyFox will be going offline around <time datetime="2024-03-01T17:00:00Z">Friday, March 1st, 2024 @ 12:00</time></h3>
            <p>If anyone wants to take over the project, feel free to reach out. Otherwise, any data you haven't exported will be lost.</p>
            <p>The source code will always remain public on github, at <a href="https://github.com/The-ProxyFox-Group/ProxyFox">https://github.com/The-ProxyFox-Group/ProxyFox</a>.</p>
            <p>Thanks for everything <img src="https://cdn.discordapp.com/emojis/981046672345944154.webp?size=48" height="24" alt="blobfoxheart" title="blobfoxheart" /><br/>
               - Vix</p>
            </div>
            </div>
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
                                const separator = str.lastIndexOf(':')
                                const link = str.substring(2, separator)
                                const name = str.substring(separator + 1)
                                arr.push(<a className="link" href={link}>{name}</a>)
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