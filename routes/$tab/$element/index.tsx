import * as Aleph from "aleph/react";
import Sidebar from "~/components/Sidebar.tsx"
import SidebarElement from "~/components/SidebarElement.tsx"
import generateSidebar from "~/components/SidebarGenerator.tsx"
import generatePage from "~/components/PageGenerator.tsx"

type Routing = {
    tab: string,
    element: string
}

export default function Index(): JSX.Element {
    const route = Aleph.useRouter().params as Routing
    return (
        <div className="screen index">
            <Aleph.Head>
                <title>ProxyFox</title>
                <meta name="description" content="The official website for the ProxyFox Discord bot." />
            </Aleph.Head>
            { generateSidebar(route.tab, route.element) }
            { generatePage(route.tab, route.element) }
        </div>
    );
}
