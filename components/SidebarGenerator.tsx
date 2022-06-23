import Sidebar from "./Sidebar.tsx"
import SidebarTitle from "./SidebarTitle.tsx"
import SidebarElement from "./SidebarElement.tsx"
import content from "./Content.tsx"

export default function generateSidebar(tab?: string, element?: string): JSX.Element {
    if (!tab) tab = "home"
    let current = content[tab]
    if (!current) current = content["home"]
    const elements: JSX.Element[] = []
    let first = true;
    for (const i in current.values) {
        const el = current.values[i]
        elements.push(
            <SidebarElement href={("/"+tab+"/"+i)} selected={(element? i==element: first)}>{el.name}</SidebarElement>
        )
        first = false
    }
    
    return (
        <Sidebar>
            <SidebarTitle> {current.name} </SidebarTitle>
            { elements }
        </Sidebar>
    )
}