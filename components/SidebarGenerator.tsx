import Sidebar from "./Sidebar.tsx"
import SidebarTitle from "./SidebarTitle.tsx"
import SidebarElement from "./SidebarElement.tsx"

export default function generateSidebar(name: string): JSX.Element {
    return (
        <Sidebar>
            <SidebarTitle> {name} </SidebarTitle>
            <SidebarElement>
                <p>Hello, World!</p>
            </SidebarElement>
        </Sidebar>
    )
}