import * as Aleph from "aleph/react";
import Sidebar from "~/components/Sidebar.tsx"
import SidebarElement from "~/components/SidebarElement.tsx"
import generateSidebar from "~/components/SidebarGenerator.tsx"

export default function App(elements: { children: React.ReactNode }): JSX.Element {
    
    return (
        <>
            { elements.children }
        </>
    );
}