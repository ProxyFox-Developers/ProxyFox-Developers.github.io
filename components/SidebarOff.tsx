import content from "./Content.tsx"

export default function SidebarOff({ route = "home", tab }: { route?: string, tab?: string }): JSX.Element {
    if (!content[route]) route = "home"
    if (!tab) for (const i in content[route].values) {
        tab = i
        break;
    }
    
    return (
        <a href={("/"+route+"/"+tab+"/hidden")}><div className="pf-sidebar off">{"•••"}</div></a>
    )
}