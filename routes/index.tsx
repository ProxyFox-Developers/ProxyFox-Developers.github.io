import * as Aleph from "aleph/react";
import Sidebar from "~/components/Sidebar.tsx"
import SidebarElement from "~/components/SidebarElement.tsx"
import generateSidebar from "~/components/SidebarGenerator.tsx"
import generatePage from "~/components/PageGenerator.tsx"
import SidebarOff from "~/components/SidebarOff.tsx"

export default function Index(): JSX.Element {
    return (
        <div className="screen index">
            <Aleph.Head>
                <title>ProxyFox</title>
                <meta name="description" content="The official website for the ProxyFox Discord bot." />
            </Aleph.Head>
            { generateSidebar() }
            { generatePage() }
            <SidebarOff></SidebarOff>
        </div>
    );
}

