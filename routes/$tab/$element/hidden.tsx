import * as Aleph from "aleph/react";
import generatePage from "~/components/PageGenerator.tsx"
import SidebarOn from "~/components/SidebarOn.tsx"

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
            { generatePage(route.tab, route.element, true) }
            <SidebarOn></SidebarOn>
        </div>
    );
}
